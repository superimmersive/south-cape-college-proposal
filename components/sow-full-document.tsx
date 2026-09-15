"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";

type SowFullDocumentProps = {
  title: string;
  markdown: string;
};

export function SowFullDocument({ title, markdown }: SowFullDocumentProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!markdown.trim()) return null;

  const panel = open ? (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
        aria-label="Close Statement of Work"
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-xl border border-hair bg-ink-2 shadow-2xl sm:max-h-[86vh] sm:rounded-xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-hair px-5 py-4 md:px-7">
          <div>
            <p className="label">Statement of Work</p>
            <p
              id={titleId}
              className="font-display mt-1 text-lg tracking-tight text-fg md:text-xl"
            >
              {title}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="btn btn--ghost btn--sm shrink-0"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>

        <div className="sow-md overflow-y-auto px-5 py-8 md:px-8 md:py-10">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        className="btn btn--ghost"
        onClick={() => setOpen(true)}
      >
        Read full Statement of Work
      </button>
      {mounted && panel ? createPortal(panel, document.body) : null}
    </>
  );
}
