"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ProposalPdfButton } from "@/components/proposal-pdf-button";
import { brand, navItems } from "@/content/site";
import { homeHref, sectionHref } from "@/lib/base-path";

export function SiteNav() {
  const pathname = usePathname();
  const home = pathname === "/";
  const hrefFor = (id: string) => sectionHref(id, home);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? "border-hair bg-ink/85 backdrop-blur-xl"
          : "border-transparent bg-ink/40 backdrop-blur-sm"
      }`}
    >
      <div className="shell">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <a
            href={home ? "#top" : homeHref()}
            className="group flex min-w-0 flex-col leading-none"
            aria-label={`${brand.company} — proposal for ${brand.counterparty}`}
          >
            <span className="font-display text-[0.95rem] font-medium uppercase tracking-[0.16em] text-fg">
              Superimmersive
            </span>
            <span className="label mt-1.5 truncate">
              × {brand.counterparty}
            </span>
          </a>

          <nav aria-label="Proposal sections" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={hrefFor(item.id)}
                    aria-current={active === item.id ? "true" : undefined}
                    className={`relative block px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      active === item.id
                        ? "text-fg"
                        : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ${
                        active === item.id ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ProposalPdfButton className="btn btn--primary btn--sm hidden sm:inline-flex" />

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hair-strong text-fg lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-hair bg-ink lg:hidden"
      >
        <nav aria-label="Proposal sections" className="shell py-6">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.id} className="border-b border-hair last:border-0">
                <a
                  href={hrefFor(item.id)}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="label text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl tracking-tight text-fg">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ProposalPdfButton
            className="btn btn--primary mt-7 w-full"
            onClick={() => setOpen(false)}
          />
        </nav>
      </div>
    </header>
  );
}
