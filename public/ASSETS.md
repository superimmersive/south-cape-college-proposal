# Dropping in real assets

Nothing on the page is hard-coded to a file. Every visual reads a path from
`/content`, and shows a labelled placeholder until that path is filled in.

## 1. Copy the file into the right folder

```text
public/
  images/
    hero/        hero-main.jpg
    projects/    vr-training.jpg  interactive-3d.jpg  technical-simulation.jpg
                 multiplatform.jpg  welding-industrial.jpg  web-multiplatform.jpg
                 medical-vr.jpg  general-portfolio.jpg
                 platform-vr.jpg  platform-web.jpg  platform-mobile-ar.jpg
    poc/         welding-poc.jpg  assembly-line-pneumatics.jpg  ppe-training.jpg
    logos/       absa.svg  anglo-american.svg  …
    founder/     devon-kirchner.jpg
  videos/
    hero/        hero-main.mp4  hero-main.webm
    projects/    vr-training.mp4
    poc/         welding-poc.mp4
```

## 2. Point the content file at it

| What you are changing | File |
| --- | --- |
| Hero visual | `content/capabilities.ts` → `heroMedia` |
| "What We've Already Built" cards | `content/capabilities.ts` → `capabilities` |
| Welding / assembly-line / PPE visuals | `content/concepts.ts` |
| Platform cards | `content/concepts.ts` → `platforms` |
| Selected work cards and their URLs | `content/projects.ts` |
| Organisation logos | `content/logos.ts` |
| Founder portrait | `content/site.ts` → `founder.portrait` |
| Contact details, price, duration | `content/site.ts` |
| Proposal PDF download | `content/site.ts` → `proposalPdf` |

Example:

```ts
media: {
  image: "/images/poc/welding-poc.jpg",
  alt: "Welding training module running in VR",
  placeholder: "Welding Training",
}
```

## 3. Video notes

- Set `video` for MP4 and `videoWebm` for WebM. WebM is served first.
- Always set `poster` so nothing pops in on slow connections.
- Video is muted, looped and inline. Audio never autoplays.
- With `prefers-reduced-motion` the video holds on its poster frame.

## 4. Links

`content/projects.ts` → `link`. Leave it as `""` and the card shows a quiet
"Available on request" instead of a dead button. Do not add a URL that does not
resolve.

## 5. Logos

`content/logos.ts` → `logo`. Use SVG or transparent PNG that reads on a
near-black background. Until a file is supplied the organisation name renders as
a text mark, which is deliberate — no placeholder or look-alike logos.
