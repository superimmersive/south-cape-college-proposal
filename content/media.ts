/**
 * Shared media shape used by every visual on the page.
 *
 * image  — path under /public, e.g. "/images/projects/vr-training.jpg"
 * video  — path under /public, e.g. "/videos/projects/vr-training.mp4"
 * videoWebm — optional WebM source, served first when present
 * poster — poster frame for the video
 * alt    — required whenever an image or video is set
 *
 * When image and video are both empty the UI renders a labelled placeholder,
 * so the page never shows a broken frame or invented screenshot.
 */
export type Media = {
  image?: string;
  video?: string;
  videoWebm?: string;
  poster?: string;
  alt?: string;
  /** Text shown on the placeholder while the real asset is missing. */
  placeholder: string;
  placeholderNote?: string;
  /** Optional still shown behind the labelled placeholder. Not treated as the final asset. */
  placeholderImage?: string;
  /** Optional looping clip shown behind the labelled placeholder. */
  placeholderVideo?: string;
  placeholderVideoWebm?: string;
  /** Multiple background clips; played in order behind the overlay. */
  placeholderClips?: { video?: string; videoWebm?: string }[];
};

export const hasMedia = (media: Media) =>
  Boolean(media.image || media.video || media.videoWebm);
