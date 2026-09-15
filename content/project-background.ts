import fs from "node:fs";
import path from "node:path";
import type { Capability } from "./capabilities";
import type { Media } from "./media";

const VIDEO_EXT = new Set([".webm", ".mp4", ".mov"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const SKIP = new Set([".gitkeep", "thumbs.db", ".ds_store"]);

type Clip = { webm?: string; mp4?: string };

function publicUrl(folder: string, file: string) {
  const prefix = folder.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
  return `/${prefix}/${encodeURIComponent(file)}`;
}

function readFolder(relative: string) {
  const dir = path.join(process.cwd(), "public", relative);
  const clips = new Map<string, Clip>();
  const images: string[] = [];

  if (!fs.existsSync(dir)) return { clips, images };

  for (const file of fs.readdirSync(dir)) {
    if (SKIP.has(file.toLowerCase()) || file.startsWith(".")) continue;

    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext).toLowerCase();
    const url = publicUrl(relative, file);

    if (ext === ".webm") {
      const clip = clips.get(base) ?? {};
      clip.webm = url;
      clips.set(base, clip);
    } else if (VIDEO_EXT.has(ext)) {
      const clip = clips.get(base) ?? {};
      clip.mp4 = url;
      clips.set(base, clip);
    } else if (IMAGE_EXT.has(ext)) {
      images.push(url);
    }
  }

  return { clips, images };
}

function backgroundFromFolder(relative: string): Partial<Media> {
  const { clips, images } = readFolder(relative);
  const playlist = [...clips.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, clip]) => ({
      videoWebm: clip.webm,
      video: clip.mp4,
    }));
  const first = playlist[0];
  const image = images.sort((a, b) => a.localeCompare(b))[0];

  return {
    placeholderClips: playlist,
    placeholderVideoWebm: first?.videoWebm ?? "",
    placeholderVideo: first?.video ?? "",
    placeholderImage: playlist.length ? undefined : image,
  };
}

/** Clips and stills in `public/projects/<slug>/`, used behind the overlay. */
export function backgroundFor(slug: string): Partial<Media> {
  return backgroundFromFolder(path.join("projects", slug));
}

export function heroBackground(): Partial<Media> {
  return backgroundFromFolder(path.join("videos", "hero"));
}

export function withProjectBackgrounds(items: Capability[]): Capability[] {
  return items.map((item) => ({
    ...item,
    media: {
      ...item.media,
      ...backgroundFor(item.slug),
    },
  }));
}
