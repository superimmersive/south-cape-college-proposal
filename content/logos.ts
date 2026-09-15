/**
 * Organisations associated with previous professional work.
 *
 * These are NOT presented as Superimmersive clients — the section wording is
 * "Selected organisations associated with previous professional work."
 *
 * Canonical files live in /content/logos at the workspace root. Copies for this
 * site are in /public/images/logos. Leave `logo` blank to render the name as text.
 */

export type Organisation = {
  name: string;
  /** e.g. "/images/logos/absa.png" — leave blank to render the name as text. */
  logo?: string;
  /** Black / near-black marks that need to read on the dark wall. */
  invert?: boolean;
  /** CSS brightness() multiplier, e.g. 1.4. Ignored when invert is set. */
  brightness?: number;
};

export const organisations: Organisation[] = [
  { name: "Absa", logo: "/images/logos/absa.png" },
  { name: "Anglo American", logo: "/images/logos/anglo-american.png", brightness: 1.4 },
  { name: "Aston Martin", logo: "/images/logos/aston-martin.png" },
  {
    name: "Blair Project / ProtoEV",
    logo: "/images/logos/protoev.png",
  },
  { name: "Budweiser", logo: "/images/logos/budweiser.png" },
  { name: "Cadbury", logo: "/images/logos/cadbury.png" },
  { name: "Capel Manor College", logo: "/images/logos/capel-manor.png" },
  {
    name: "Catapult Energy Systems",
    logo: "/images/logos/catapult-energy-systems.png",
  },
  { name: "Coventry University", logo: "/images/logos/coventry-university.png" },
  {
    name: "Darlington Libraries",
    logo: "/images/logos/darlington-libraries.png",
  },
  { name: "Game South Africa", logo: "/images/logos/game-south-africa.png" },
  { name: "Hasbro", logo: "/images/logos/hasbro.png" },
  { name: "HP", logo: "/images/logos/hp.png" },
  { name: "HRUC", logo: "/images/logos/hruc.png", brightness: 1.4 },
  { name: "Investec", logo: "/images/logos/investec.png" },
  { name: "Johnnie Walker", logo: "/images/logos/john-walker.png" },
  { name: "Network Rail", logo: "/images/logos/network-rail.png" },
  { name: "Nedbank", logo: "/images/logos/nedbank.png" },
  { name: "Nestlé", logo: "/images/logos/nestle.png", brightness: 1.4 },
  { name: "Nissan", logo: "/images/logos/nissan.png", invert: true },
  {
    name: "Northern Engineering Solutions",
    logo: "/images/logos/northern-engineering-solutions.png",
    brightness: 1.4,
  },
  { name: "Roche Diagnostic Solutions", logo: "/images/logos/roche.png", brightness: 1.4 },
  { name: "SANRAL", logo: "/images/logos/sanral.png" },
  { name: "Sasol", logo: "/images/logos/sasol.png", brightness: 1.4 },
  { name: "Thule", logo: "/images/logos/thule.png", invert: true },
  { name: "Transnet", logo: "/images/logos/transnet.png" },
  { name: "Tyne Coast College", logo: "/images/logos/tyne-coast.png" },
  { name: "UNIDO", logo: "/images/logos/unido.png" },
  {
    name: "University of Johannesburg",
    logo: "/images/logos/university-of-johannesburg.png",
  },
  { name: "Weylandts", logo: "/images/logos/weylandts.png" },
];
