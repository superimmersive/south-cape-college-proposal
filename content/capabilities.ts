import type { Media } from "./media";

export type Capability = {
  slug: string;
  title: string;
  description: string;
  media: Media;
};

/** Drop clips or stills into `public/projects/<slug>/`. They play behind the placeholder overlay. */
export const capabilities: Capability[] = [
  {
    slug: "immersive-training-solutions",
    title: "Immersive Training Solutions",
    description: "Immersive training and simulation environments.",
    media: {
      image: "",
      video: "",
      placeholder: "Immersive Training Solutions",
    },
  },
  {
    slug: "interactive-products",
    title: "Interactive Products",
    description: "Interactive 3D applications and digital experiences.",
    media: {
      image: "",
      video: "",
      placeholder: "Interactive Products",
    },
  },
  {
    slug: "simulated-environments",
    title: "Simulated Environments",
    description: "Simulated environments for training and visualisation.",
    media: {
      image: "",
      video: "",
      placeholder: "Simulated Environments",
    },
  },
  {
    slug: "video-productions",
    title: "Video Productions",
    description: "Video production for training, demonstration and presentation.",
    media: {
      image: "",
      video: "",
      placeholder: "Video Productions",
    },
  },
  {
    slug: "interactive-games",
    title: "Interactive Games",
    description: "Interactive games and playable digital experiences.",
    media: {
      image: "",
      video: "",
      placeholder: "Interactive Games",
    },
  },
  {
    slug: "digital-avatars",
    title: "Digital Avatars",
    description: "Digital characters and avatar systems.",
    media: {
      image: "",
      video: "",
      placeholder: "Digital Avatars",
    },
  },
];

export const heroMedia: Media = {
  image: "", // /images/hero/hero-main.jpg
  video: "", // /videos/hero/hero-main.mp4
  videoWebm: "",
  poster: "", // /images/hero/hero-main.jpg
  placeholder: "Superimmersive",
  placeholderNote: "Immersive technology",
};
