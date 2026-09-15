"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  suggestedEnquiryBody,
  suggestedEnquirySubject,
} from "@/content/enquiry";
import { contact } from "@/content/site";

export type EnquiryArea = {
  slug: string;
  title: string;
};

type StartEnquiryButtonProps = {
  className?: string;
  areaTitle?: string;
  areas?: EnquiryArea[];
};

type Status = "idle" | "sending" | "sent" | "error";

export function StartEnquiryButton({
  className = "btn btn--primary",
  areaTitle,
  areas = [],
}: StartEnquiryButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState(areaTitle ?? "Welding Training");
  const [message, setMessage] = useState(suggestedEnquiryBody(areaTitle));
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
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
    nameRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const subject = useMemo(() => suggestedEnquirySubject(area || undefined), [area]);

  const openDialog = () => {
    setArea(areaTitle ?? "Welding Training");
    setMessage(suggestedEnquiryBody(areaTitle ?? "Welding Training"));
    setStatus("idle");
    setError("");
    setOpen(true);
  };

  const mailtoFallback = () => {
    if (!contact.email) return;
    const body = [
      name ? `From: ${name}${email ? ` <${email}>` : ""}` : "",
      "",
      message,
    ]
      .filter((line, index, lines) => line !== "" || lines[index - 1] !== "")
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(contact.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message: [
              `From: ${name} <${email}>`,
              area ? `Training area: ${area}` : "",
              "",
              message,
            ]
              .filter(Boolean)
              .join("\n"),
            _subject: subject,
            _template: "box",
            _captcha: "false",
            _replyto: email,
          }),
        },
      );
      const payload = (await response.json().catch(() => ({}))) as {
        error?: string;
        activation?: boolean;
      };

      if (!response.ok) {
        throw new Error(payload.error || "Send failed");
      }

      setStatus("sent");
      if (payload.activation) {
        setError(
          "If this is the first message, confirm the request in your inbox, then send again.",
        );
      }
    } catch (caught) {
      setStatus("error");
      setError(
        caught instanceof Error
          ? caught.message
          : "The message could not be delivered.",
      );
      mailtoFallback();
    }
  };

  const panel =
    mounted && open ? (
      <div
        className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center sm:p-6"
        role="presentation"
      >
        <button
          type="button"
          className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
          aria-label="Close message"
          onClick={() => setOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="relative z-10 flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden rounded-t-xl border border-hair bg-ink-2 shadow-2xl sm:max-h-[86vh] sm:rounded-xl"
        >
          <div className="flex items-start justify-between gap-4 border-b border-hair px-5 py-4 md:px-7">
            <div>
              <p className="label">Send a message</p>
              <p
                id={titleId}
                className="font-display mt-1 text-lg tracking-tight text-fg md:text-xl"
              >
                Let&apos;s get started
              </p>
              {contact.email && (
                <p className="body-text mt-2 text-[0.85rem]">
                  Delivers to {contact.email}
                </p>
              )}
            </div>
            <button
              type="button"
              className="btn btn--ghost btn--sm shrink-0"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          {status === "sent" ? (
            <div className="px-5 py-10 md:px-7">
              <p className="h3">Message sent.</p>
              <p className="body-text mt-4 max-w-md">
                It has been delivered to {contact.email}. We will follow up from
                there.
              </p>
              {error && <p className="body-text mt-4 text-[0.9rem]">{error}</p>}
              <button
                type="button"
                className="btn btn--primary mt-8"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-6 md:px-7"
            >
              <label className="label" htmlFor="enquiry-name">
                Name
              </label>
              <input
                ref={nameRef}
                id="enquiry-name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 w-full rounded-lg border border-hair bg-ink px-4 py-3 text-[0.95rem] text-fg outline-none transition-colors focus:border-accent"
                autoComplete="name"
              />

              <label className="label mt-6" htmlFor="enquiry-email">
                Email
              </label>
              <input
                id="enquiry-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-lg border border-hair bg-ink px-4 py-3 text-[0.95rem] text-fg outline-none transition-colors focus:border-accent"
                autoComplete="email"
              />

              {areas.length > 0 && (
                <>
                  <label className="label mt-6" htmlFor="enquiry-area">
                    Training area
                  </label>
                  <select
                    id="enquiry-area"
                    value={area}
                    onChange={(event) => {
                      const next = event.target.value;
                      setArea(next);
                      setMessage(suggestedEnquiryBody(next || undefined));
                    }}
                    className="mt-2 w-full rounded-lg border border-hair bg-ink px-4 py-3 text-[0.95rem] text-fg outline-none transition-colors focus:border-accent"
                  >
                    <option value="">To be confirmed</option>
                    {areas.map((item) => (
                      <option key={item.slug} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </>
              )}

              <label className="label mt-6" htmlFor="enquiry-message">
                Message
              </label>
              <textarea
                id="enquiry-message"
                required
                rows={10}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 w-full resize-y rounded-lg border border-hair bg-ink px-4 py-3 text-[0.95rem] leading-relaxed text-fg outline-none transition-colors focus:border-accent"
              />

              {error && status === "error" && (
                <p className="body-text mt-4 text-[0.9rem] text-fg-soft">{error}</p>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === "sending" || !contact.email}
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    ) : null;

  return (
    <>
      <button type="button" className={className} onClick={openDialog}>
        Let&apos;s get started
      </button>
      {panel ? createPortal(panel, document.body) : null}
    </>
  );
}
