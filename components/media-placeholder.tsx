import Image from "next/image";

type MediaPlaceholderProps = {
  label: string;
  note?: string;
  /** Smaller type for compact frames. */
  compact?: boolean;
  /** Atmospheric still behind the labelled overlay. */
  image?: string;
  sizes?: string;
  /** Video is already filling the frame; only render labels + a darken wash. */
  overVideo?: boolean;
};

/**
 * Deliberately non-photographic stand-in for missing media, unless a
 * placeholder still is supplied. It must never read as a finished screenshot
 * of real work — the overlay always stays until `image` / `video` is set.
 */
export function MediaPlaceholder({
  label,
  note,
  compact = false,
  image,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  overVideo = false,
}: MediaPlaceholderProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] select-none" aria-hidden="true">
      {!overVideo && image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes={sizes}
          className="object-cover"
        />
      ) : !overVideo ? (
        <>
          <div className="grid-bg absolute inset-0 opacity-70" />
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(243,245,249,0.16) 0 1px, transparent 1px 11px)",
            }}
          />
        </>
      ) : null}
      <div
        className="absolute inset-0"
        style={{
          background: overVideo || image
            ? "linear-gradient(180deg, rgba(5,6,10,0.62) 0%, rgba(5,6,10,0.42) 42%, rgba(5,6,10,0.78) 100%)"
            : "radial-gradient(120% 90% at 50% 0%, rgba(126,159,192,0.10), transparent 62%), radial-gradient(90% 70% at 50% 100%, rgba(5,6,10,0.85), transparent 70%)",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 block h-px w-10 bg-accent" />
        <p
          className={`font-display uppercase leading-tight tracking-[0.14em] text-fg ${
            compact ? "text-[0.78rem] md:text-sm" : "text-sm md:text-lg"
          }`}
        >
          {label}
        </p>
        {note && <p className="label mt-3">{note}</p>}
      </div>
    </div>
  );
}
