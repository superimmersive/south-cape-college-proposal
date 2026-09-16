"use client";

import { useEffect, useRef, useState } from "react";
import { withBase } from "@/lib/base-path";

export type MediaClip = {
  src?: string;
  webm?: string;
};

type MediaVideoProps = {
  src?: string;
  webm?: string;
  playlist?: MediaClip[];
  poster?: string;
  alt?: string;
  /** Show a play/pause control. Feature videos use this, small cards do not. */
  controls?: boolean;
  fit?: "cover" | "contain";
  objectPosition?: string;
};

/**
 * Muted, looping background video with an optional manual control.
 * Never plays audio, and never autoplays when reduced motion is requested.
 * A playlist advances to the next clip when the current one ends, then repeats.
 */
export function MediaVideo({
  src,
  webm,
  playlist,
  poster,
  alt,
  controls = false,
  fit = "cover",
  objectPosition,
}: MediaVideoProps) {
  const clips: MediaClip[] =
    playlist && playlist.length > 0
      ? playlist
      : [{ src, webm }].filter((clip) => clip.src || clip.webm);
  const ref = useRef<HTMLVideoElement | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const clip = clips[index] ?? clips[0] ?? {};
  const many = clips.length > 1;
  const clipKey = clips.map((item) => item.webm || item.src).join("|");

  useEffect(() => {
    setIndex(0);
  }, [clipKey]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    video.load();
    void video.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [clip.webm, clip.src, index]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !many) return;

    const onEnded = () => {
      setIndex((current) => (current + 1) % clips.length);
    };
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [many, clips.length]);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;

    if (video.paused) {
      void video.play().then(() => setPlaying(true));
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  if (!clip.webm && !clip.src) return null;

  return (
    <>
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
        style={objectPosition ? { objectPosition } : undefined}
        poster={poster ? withBase(poster) : undefined}
        muted
        loop={!many}
        playsInline
        preload="auto"
        aria-label={alt}
      >
        {clip.webm && <source src={withBase(clip.webm)} type="video/webm" />}
        {clip.src && <source src={withBase(clip.src)} type="video/mp4" />}
      </video>

      {controls && (
        <button
          type="button"
          onClick={toggle}
          className="btn btn--ghost btn--sm absolute bottom-4 right-4 z-20 bg-ink/70 backdrop-blur-sm"
          aria-pressed={playing}
        >
          {playing ? "Pause" : "Play"}
        </button>
      )}
    </>
  );
}
