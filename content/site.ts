/**
 * Single source of truth for brand, contact and navigation.
 * Leave a field as an empty string and the UI hides or disables the related control —
 * nothing here is invented at render time.
 */

export const brand = {
  company: "Superimmersive",
  counterparty: "South Cape College",
  descriptor:
    "South African IT / 4IR startup specialising in immersive technology, 3D development and interactive training experiences.",
  ownership: "Black-owned and youth-owned",
  experience: "11+ years professional industry experience",
} as const;

export const founder = {
  name: "Devon Kirchner",
  title: "Founder & Director",
  company: "Superimmersive",
  /** Portrait is optional. Drop a file in /public/images/founder and point here. */
  portrait: "/images/founder/devon-kirchner-unrefined-nohat.png",
  capabilities: [
    "Technical Art",
    "3D Development",
    "VR / AR",
    "Software",
    "Interactive Training",
    "Immersive Technology",
  ],
} as const;

/**
 * Contact details as published on the Superimmersive company site.
 * Clear a value to remove that line and its link from the page.
 */
export const contact = {
  email: "devon@superimmersive.io",
  phone: "068 594 3568",
  phoneHref: "tel:+27685943568",
  website: "https://superimmersive.github.io/",
  websiteLabel: "superimmersive.github.io",
  location: "George, Western Cape",
} as const;

/** Optional PDF export of this proposal. Drop the file in /public and set the path. */
export const proposalPdf =
  "/Proposed Industry Collaboration with South Cape College.pdf";

/**
 * Hero panel actions. Leave a path empty and the button shows disabled —
 * do not invent an APK or web URL.
 */
export const heroActions = {
  title: "Craniotomy Training Demo",
  apk: "https://drive.google.com/drive/folders/1dsGZLashUZFpkkGfQ9n4TtaHBhG6iniq?usp=drive_link",
  apkLabel: "Meta Quest APK",
  web: "https://superimmersive.github.io/craniotomy-exercise/",
  webLabel: "Try On Web",
} as const;

export const navItems = [
  { id: "top", label: "Overview" },
  { id: "poc", label: "POC" },
  { id: "opportunity", label: "Opportunity" },
  { id: "about", label: "About" },
  { id: "work", label: "Our Work" },
  { id: "contact", label: "Contact" },
] as const;

export const poc = {
  price: "R85,000",
  priceLabel: "Fixed Development Cost",
  duration: "2–3 Weeks",
  durationLabel: "Expected Development Period",
} as const;

export const meta = {
  title:
    "South Cape College × Superimmersive | Immersive Technology for Skills Development",
  description:
    "A proposed industry collaboration between South Cape College and Superimmersive to develop immersive training experiences for education, skills development and 4IR initiatives.",
  /**
   * Public URL of this proposal once hosted. Used for canonical and Open Graph URLs.
   */
  siteUrl: "https://superimmersive.github.io/south-cape-college-proposal",
} as const;
