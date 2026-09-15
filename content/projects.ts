import type { Media } from "./media";

/**
 * Selected work. Every card supports an image, a video, a description and an
 * external URL.
 *
 * Leave `link` empty and the card shows a neutral disabled state — never
 * invent a URL here.
 */
export type Project = {
  title: string;
  category: string;
  description: string;
  link: string;
  linkLabel?: string;
  media: Media;
};

export const projects: Project[] = [
  {
    title: "VR Training",
    category: "Immersive training",
    description:
      "Immersive training and simulation environments built for headset delivery.",
    link: "",
    media: {
      image: "", // /images/projects/vr-training.jpg
      video: "", // /videos/projects/vr-training.mp4
      placeholder: "VR Training",
      placeholderNote: "Project visual",
    },
  },
  {
    title: "Welding / Industrial Simulation",
    category: "Industrial simulation",
    description:
      "Interactive industrial process simulation, including the welding concept presented to the College.",
    link: "",
    media: {
      image: "", // /images/projects/welding-industrial.jpg
      video: "",
      placeholder: "Welding / Industrial Simulation",
      placeholderNote: "Project visual",
    },
  },
  {
    title: "Interactive 3D",
    category: "Interactive 3D",
    description:
      "Realtime 3D applications and product-grade interactive experiences.",
    link: "",
    media: {
      image: "", // /images/projects/interactive-3d.jpg
      video: "",
      placeholder: "Interactive 3D",
      placeholderNote: "Project visual",
    },
  },
  {
    title: "Web / Multiplatform",
    category: "Web & multiplatform",
    description:
      "Browser-based training and 3D experiences that run without an install.",
    link: "",
    media: {
      image: "", // /images/projects/web-multiplatform.jpg
      video: "",
      placeholder: "Web / Multiplatform",
      placeholderNote: "Project visual",
    },
  },
  {
    title: "Medical / Technical VR",
    category: "Medical & technical",
    description:
      "Procedure-driven technical training with step-by-step guided interaction.",
    link: "",
    media: {
      image: "", // /images/projects/medical-vr.jpg
      video: "",
      placeholder: "Medical / Technical VR",
      placeholderNote: "Project visual",
    },
  },
  {
    title: "General Portfolio",
    category: "Selected work",
    description:
      "Wider technical art, 3D development and immersive technology work.",
    link: "",
    media: {
      image: "", // /images/projects/general-portfolio.jpg
      video: "",
      placeholder: "General Portfolio",
      placeholderNote: "Project visual",
    },
  },
];
