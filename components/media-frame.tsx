import type { ReactNode } from "react";
import Image from "next/image";
import { hasMedia, type Media } from "@/content/media";
import { MediaPlaceholder } from "./media-placeholder";
import { MediaVideo } from "./media-video";

type MediaFrameProps = {
  media: Media;
  /** CSS aspect ratio, e.g. "16 / 9". */
  ratio?: string;
  /** Optional wider ratio from the md breakpoint up. */
  ratioMd?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Slow zoom on hover — used on interactive cards only. */
  zoom?: boolean;
  /** Show the video play/pause control. */
  videoControls?: boolean;
  compactPlaceholder?: boolean;
  /** Overlay content, e.g. a badge in the bottom-left of the frame. */
  overlay?: ReactNode;
  /** `contain` shows the full frame; default `cover` fills the panel. */
  fit?: "cover" | "contain";
  /** CSS object-position, e.g. "center bottom" to crop the top. */
  objectPosition?: string;
};

/**
 * The single media surface used across the page. Falls back to a labelled
 * placeholder whenever the real asset has not been supplied yet, so dropping a
 * file into /public and setting one path is all that is needed later.
 */
export function MediaFrame({
  media,
  ratio = "16 / 9",
  ratioMd,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  zoom = false,
  videoControls = false,
  compactPlaceholder = false,
  overlay,
  fit = "cover",
  objectPosition,
}: MediaFrameProps) {
  const filled = hasMedia(media);
  const playlist =
    media.placeholderClips
      ?.filter((clip) => clip.video || clip.videoWebm)
      .map((clip) => ({ src: clip.video, webm: clip.videoWebm })) ?? [];
  const overlayVideo =
    playlist.length > 0 ||
    Boolean(media.placeholderVideoWebm || media.placeholderVideo);
  const canZoom =
    zoom && (filled || Boolean(media.placeholderImage) || Boolean(overlayVideo));

  return (
    <div
      className={`media ${canZoom ? "media--zoom" : ""} ticks ${className}`}
      style={
        {
          "--ratio": ratio,
          ...(ratioMd ? { "--ratio-md": ratioMd } : {}),
        } as React.CSSProperties
      }
    >
      {media.video || media.videoWebm ? (
        <MediaVideo
          src={media.video}
          webm={media.videoWebm}
          playlist={playlist.length > 0 ? playlist : undefined}
          poster={media.poster}
          alt={media.alt ?? media.placeholder}
          controls={videoControls}
          fit={fit}
          objectPosition={objectPosition}
        />
      ) : media.image ? (
        <Image
          src={media.image}
          alt={media.alt ?? media.placeholder}
          fill
          sizes={sizes}
          priority={priority}
          className={fit === "contain" ? "object-contain" : "object-cover"}
          style={objectPosition ? { objectPosition } : undefined}
        />
      ) : (
        <>
          {overlayVideo ? (
            <MediaVideo
              src={media.placeholderVideo}
              webm={media.placeholderVideoWebm}
              playlist={playlist.length > 0 ? playlist : undefined}
              poster={media.poster}
              alt={media.alt ?? media.placeholder}
              controls={videoControls}
            />
          ) : null}
          <MediaPlaceholder
            label={media.placeholder}
            note={media.placeholderNote}
            compact={compactPlaceholder}
            image={overlayVideo ? undefined : media.placeholderImage}
            sizes={sizes}
            overVideo={Boolean(overlayVideo)}
          />
        </>
      )}
      {overlay ? (
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
          {overlay}
        </div>
      ) : null}
    </div>
  );
}
