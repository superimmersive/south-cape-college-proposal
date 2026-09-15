# South Cape College × Superimmersive — Digital Proposal

Live: [superimmersive.github.io/south-cape-college-proposal](https://superimmersive.github.io/south-cape-college-proposal/)

An interactive proposal document presenting a collaboration between South Cape
College and Superimmersive.

The home page is a single scrolling proposal. Each training area under
**What Could We Build Together?** opens a dedicated Statement of Work page at
`/opportunity/[slug]`.

Next.js (App Router) · TypeScript · Tailwind CSS v4 · no runtime dependencies
beyond React.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to /out (also used by GitHub Pages)
```

## Editing content

All copy, pricing, media paths, logos and links live in `/content`. No section
component contains hard-coded project data.

| File | Contents |
| --- | --- |
| `content/site.ts` | Brand, founder, contact details, nav items, POC price and duration, page metadata |
| `content/proposal.ts` | Engagement timeline, POC notes, POC process, commercial terms, value cards, partnership stages, about and mission copy |
| `content/concepts.ts` | Training-area cards, Statement of Work copy, platforms |
| `content/capabilities.ts` | Hero media and the "What We've Already Built" cards |
| `content/projects.ts` | Selected work cards and their external URLs |
| `content/logos.ts` | The organisation wall |
| `content/media.ts` | Shared media type used by every visual |

Clearing a value removes or disables the thing it drives — an empty `link` shows
"Available on request" rather than a dead button, an empty `email` disables the
CTA, an empty `proposalPdf` disables the download. Nothing is invented at render
time.

## Media

Real assets have not been supplied yet, so every visual renders a labelled
placeholder. See `public/ASSETS.md` for the folder layout and the one-line change
needed to swap each placeholder for a real image or video.

Video is muted, looped, inline and poster-backed. Audio never autoplays, and
video holds on its poster when the visitor prefers reduced motion.

## Structure

```text
app/
  layout.tsx            fonts, metadata, Open Graph
  page.tsx              home proposal
  opportunity/[slug]    Statement of Work for each training area
  opengraph-image.tsx    generated social card (neutral, no project imagery)
  globals.css           design tokens, component classes, motion
components/
  site-nav.tsx          sticky nav, active section, mobile menu
  mobile-cta.tsx        persistent CTA on phones
  sow-document.tsx      SOW page layout
  reveal.tsx            scroll reveal primitive
  section.tsx           section shell (eyebrow, heading, lede)
  media-frame.tsx       image / video / placeholder surface
  chain.tsx             short arrow progressions
  concept-list.tsx      numbered concept lists
  sections/             one file per home-page section
content/                all editable copy and data
public/images, public/videos
```

## Accessibility and motion

- Single `h1`, ordered headings, labelled sections and a skip link.
- Reveal animations are opacity and small translations only, driven by one shared
  `IntersectionObserver`; anything already on screen shows on the first frame.
- `prefers-reduced-motion: reduce` disables reveals, hover zooms, smooth
  scrolling and video autoplay.
- Print styles force every section visible so the page exports to PDF intact.

## Before sharing publicly

Set `meta.siteUrl` in `content/site.ts` to the deployed URL so canonical and
Open Graph URLs resolve. The page currently sends `robots: noindex` — remove that
from `app/layout.tsx` only if the proposal is meant to be indexed.
