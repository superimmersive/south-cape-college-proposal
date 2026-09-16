"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ExampleSplat } from "@/content/concepts";
import { withBase } from "@/lib/base-path";

const LIB_URL =
  "https://cdn.jsdelivr.net/npm/@mkkellogg/gaussian-splats-3d@0.4.7/+esm";
const DEMO_PAGE = "https://superimmersive.github.io/products/3dgs.html";

type SplatPanelProps = {
  scene: ExampleSplat;
};

type GaussianViewer = {
  start: () => void;
  stop?: () => void;
  dispose?: () => Promise<void>;
  addSplatBuffers: (
    buffers: unknown[],
    options: unknown[],
    a: boolean,
    b: boolean,
    c: boolean,
  ) => Promise<unknown>;
};

type GaussianModule = {
  Viewer: new (options: Record<string, unknown>) => GaussianViewer;
  SplatLoader: {
    loadFromFileData: (
      buffer: ArrayBuffer,
      ...args: number[]
    ) => Promise<unknown>;
  };
};

type FrameElement = HTMLDivElement & {
  webkitRequestFullscreen?: () => Promise<void>;
};

type FullscreenDocument = Document & {
  webkitFullscreenElement?: Element | null;
  webkitExitFullscreen?: () => Promise<void>;
};

function currentFullscreenElement() {
  const doc = document as FullscreenDocument;
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

function exitFrameFullscreen() {
  const doc = document as FullscreenDocument;
  if (doc.fullscreenElement) return document.exitFullscreen();
  if (doc.webkitFullscreenElement && doc.webkitExitFullscreen) {
    return doc.webkitExitFullscreen();
  }
  return Promise.resolve();
}

let libPromise: Promise<GaussianModule> | null = null;

function loadLibrary() {
  if (!libPromise) {
    const load = Function("url", "return import(url)") as (
      url: string,
    ) => Promise<GaussianModule>;
    libPromise = load(LIB_URL).catch((caught) => {
      libPromise = null;
      throw caught;
    });
  }
  return libPromise;
}

function isAbortError(caught: unknown) {
  return (
    (caught instanceof DOMException && caught.name === "AbortError") ||
    (caught instanceof Error && caught.name === "AbortError")
  );
}

async function fetchSplatBuffer(
  url: string,
  signal: AbortSignal,
  onProgress: (percent: number) => void,
) {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Could not download scene (${response.status})`);
  }

  const total = Number(response.headers.get("content-length")) || 0;
  if (!response.body || !total) {
    return response.arrayBuffer();
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.byteLength;
    onProgress(Math.min(99, Math.round((received / total) * 100)));
  }

  const out = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return out.buffer;
}

function requestFrameFullscreen(frame: FrameElement) {
  if (frame.requestFullscreen) {
    return frame.requestFullscreen();
  }
  if (frame.webkitRequestFullscreen) {
    return frame.webkitRequestFullscreen();
  }
  return Promise.reject(new Error("Fullscreen is not available here."));
}

export function SplatPanel({ scene }: SplatPanelProps) {
  const frameRef = useRef<FrameElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<GaussianViewer | null>(null);
  const [active, setActive] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState("Opening viewer…");
  const [error, setError] = useState("");
  const [fullscreen, setFullscreen] = useState(false);

  const splatUrl = withBase(scene.splat);
  const posterUrl = withBase(scene.poster);
  const fallbackUrl = scene.fallbackUrl ?? DEMO_PAGE;
  const ready = active && !status && !error;

  useEffect(() => {
    if (!active || !hostRef.current) return;

    const host = hostRef.current;
    const abort = new AbortController();
    let cancelled = false;

    (async () => {
      try {
        setError("");
        setStatus("Opening viewer…");
        const GS = await loadLibrary();
        if (cancelled) return;

        setStatus("Loading splats…");
        const buffer = await fetchSplatBuffer(splatUrl, abort.signal, (percent) => {
          setStatus(`Loading splats… ${percent}%`);
        });
        if (cancelled) return;

        setStatus("Preparing scene…");
        const viewer = new GS.Viewer({
          rootElement: host,
          cameraUp: scene.cameraUp,
          initialCameraPosition: scene.cameraPosition,
          initialCameraLookAt: scene.cameraLookAt,
          sharedMemoryForWorkers: false,
          gpuAcceleratedSort: false,
          sphericalHarmonicsDegree: 0,
          antialiased: true,
        });
        viewerRef.current = viewer;

        const splatBuffer = await GS.SplatLoader.loadFromFileData(buffer, 5, 0, false);
        if (cancelled) {
          viewer.stop?.();
          await viewer.dispose?.();
          return;
        }

        await viewer.addSplatBuffers(
          [splatBuffer],
          [{ splatAlphaRemovalThreshold: 5 }],
          true,
          false,
          false,
        );
        if (cancelled) return;
        viewer.start();
        setStatus("");
      } catch (caught) {
        if (cancelled || isAbortError(caught)) return;
        setError(
          caught instanceof Error ? caught.message : "Could not load this scene.",
        );
      }
    })();

    return () => {
      cancelled = true;
      abort.abort();
      const viewer = viewerRef.current;
      viewerRef.current = null;
      viewer?.stop?.();
      void viewer?.dispose?.();
      host.innerHTML = "";
    };
  }, [active, attempt, splatUrl, scene.cameraUp, scene.cameraPosition, scene.cameraLookAt]);

  useEffect(() => {
    const onFullscreen = () => {
      const frame = frameRef.current;
      setFullscreen(!!frame && currentFullscreenElement() === frame);
    };
    document.addEventListener("fullscreenchange", onFullscreen);
    document.addEventListener("webkitfullscreenchange", onFullscreen);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreen);
      document.removeEventListener("webkitfullscreenchange", onFullscreen);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (currentFullscreenElement() === frameRef.current) {
        void exitFrameFullscreen().catch(() => {});
      }
    };
  }, []);

  const retry = useCallback(() => {
    setError("");
    setStatus("Opening viewer…");
    setAttempt((current) => current + 1);
  }, []);

  const toggleFullscreen = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) return;
    if (currentFullscreenElement() === frame) {
      void exitFrameFullscreen().catch(() => {});
      return;
    }
    void requestFrameFullscreen(frame).catch(() => {});
  }, []);

  return (
    <div
      ref={frameRef}
      className="media ticks splat-viewport"
      style={{ "--ratio": "16 / 9" } as React.CSSProperties}
    >
      {!active ? (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 z-10 cursor-pointer"
          aria-label={`View ${scene.title} in 3D`}
        >
          <img
            src={posterUrl}
            alt={scene.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-ink/45" />
          <span className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="mb-4 block h-px w-10 bg-accent" />
            <span className="label">Click to explore</span>
            {scene.downloadHint ? (
              <span className="mt-3 block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-fg-muted">
                {scene.downloadHint} download
              </span>
            ) : null}
          </span>
        </button>
      ) : (
        <>
          <div ref={hostRef} className="absolute inset-0 h-full w-full" />
          {status && !error ? (
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-ink/70 px-6 text-center">
              <p className="body-text text-fg-muted">{status}</p>
            </div>
          ) : null}
          {error ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-ink/80 px-6 text-center">
              <p className="body-text text-fg">{error}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button type="button" className="btn btn--primary btn--sm" onClick={retry}>
                  Try again
                </button>
                <a
                  href={fallbackUrl}
                  className="btn btn--ghost btn--sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open 3DGS page
                </a>
              </div>
            </div>
          ) : null}
          {ready ? (
            <button
              type="button"
              className="splat-fullscreen"
              onClick={toggleFullscreen}
              aria-label={fullscreen ? "Exit fullscreen" : "View fullscreen"}
            >
              {fullscreen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 9V4h5M4 15v5h5M20 9V4h-5M20 15v5h-5" />
                </svg>
              )}
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}
