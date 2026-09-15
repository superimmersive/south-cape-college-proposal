import { brand } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hair py-10">
      <div className="shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="label">
          {brand.company} × {brand.counterparty} — proposal document
        </p>
        <p className="label">
          © {year} {brand.company} · Prepared for discussion
        </p>
      </div>
    </footer>
  );
}
