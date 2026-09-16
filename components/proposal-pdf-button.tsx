"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { proposalPdf } from "@/content/site";
import { withBase } from "@/lib/base-path";

type ProposalPdfButtonProps = {
  className?: string;
  onClick?: () => void;
};

export function ProposalPdfButton({
  className = "btn btn--primary btn--sm",
  onClick,
}: ProposalPdfButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const label = "View Proposal PDF";
  const href = proposalPdf ? encodeURI(withBase(proposalPdf)) : "";
  const fileName = proposalPdf
    ? decodeURIComponent(proposalPdf.split("/").pop() ?? "proposal.pdf")
    : "proposal.pdf";

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

  if (!proposalPdf) {
    return (
      <span
        className={className}
        aria-disabled="true"
        title="PDF export not attached yet"
      >
        {label}
      </span>
    );
  }

  const openPanel = () => {
    onClick?.();
    setOpen(true);
  };

  const panel = open ? (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
        aria-label="Close proposal PDF"
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-xl border border-hair bg-ink-2 shadow-2xl sm:h-[86vh] sm:rounded-xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-hair px-5 py-4 md:px-7">
          <div className="min-w-0">
            <p className="label">Proposal</p>
            <p
              id={titleId}
              className="font-display mt-1 truncate text-lg tracking-tight text-fg md:text-xl"
            >
              {fileName.replace(/\.pdf$/i, "")}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a href={href} download={fileName} className="btn btn--primary btn--sm">
              Download
            </a>
            <button
              ref={closeRef}
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
        <iframe
          src={`${href}#view=FitH`}
          title={fileName}
          className="min-h-0 w-full flex-1 bg-ink"
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <button type="button" className={className} onClick={openPanel}>
        {label}
      </button>
      {mounted && panel ? createPortal(panel, document.body) : null}
    </>
  );
}
