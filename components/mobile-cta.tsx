"use client";

import { useEffect, useState } from "react";
import {
  StartEnquiryButton,
  type EnquiryArea,
} from "@/components/start-enquiry-button";

/**
 * Keeps the primary CTA reachable on phones, where the header only has room for
 * the brand and the menu button. Hides again once the contact section arrives so
 * the same button is not offered twice.
 */
export function MobileCta({ areas = [] }: { areas?: EnquiryArea[] }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const contactInView = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;

      setVisible(window.scrollY > 520 && !contactInView);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-hair bg-ink/90 px-5 pt-3 backdrop-blur-xl transition-transform duration-500 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      <StartEnquiryButton className="btn btn--primary w-full" areas={areas} />
    </div>
  );
}
