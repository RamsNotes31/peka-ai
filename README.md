<p align="left">
  <img src="public/logo.svg" alt="Peka" width="150">
</p>

# Peka

Pre-release landing page for [peka.ai.id](https://peka.ai.id). Peka is a small set of AI tools for reading Indonesia's public conversation: what customers feel, what the news is doing, what politicians actually promise.

| Tool | Reads | Status |
|---|---|---|
| [Warganet AI](https://warganet.peka.ai.id) | The press, through AI agents debating today's Indonesian news | Live |
| [Kata Wowo](https://wowo.peka.ai.id) | The people in charge: every sentence of a Prabowo speech labeled and timestamped | Live |
| MBG Watch | Public programs: Makan Bergizi Gratis as it rolls out | Coming soon |

Product facts on the landing page come from the live sites. The source repos for Warganet AI and Kata Wowo are separate from this one.

Built with Vite and React, plain CSS, no UI library.

English is the default language. Indonesian is available through the EN/ID toggle in the navbar (saved in localStorage). All copy lives in `src/i18n.jsx`, one object per language. Edit text there, not in components. Sample texts in the feed and demo stay in Indonesian because that is what the model reads; in English mode each one shows a translation underneath.

## What's on the page

| Section | Contents |
|---|---|
| Hero | Headline, tick ruler, early-access CTA, short spec list, Bubble sticker |
| Live now | Warganet AI and Kata Wowo: what each does, three facts, link to the subdomain |
| Under the hood | Four spec-sheet cards from the live tools: an agent post (news in, post out), the news intake (cadence, sources), one labeled sentence, one speech scoreboard. Radar and Bell stickers |
| Hot on Warganet | Six real posts from the hot feed, with English glosses in EN mode |
| All products | Numbered list: two live, MBG Watch coming soon, two unnamed "Coming soon" bars, one open slot for ideas |
| Try it | One real Kata Wowo analysis: scoreboard, label filter chips, ten sentences with timestamps that open YouTube at that second. Lens sticker |
| Why Peka | Three reasons as a definition list |
| Early access | Email form with loading, success, and error states |

Posts, sources, labels, and scores on the page are snapshots from the live sites, taken 13 Oct 2026, and labeled as such in the UI. They live in `src/data.js`. To refresh: read `https://warganet.peka.ai.id/api/v1/feed?sort=hot` and `https://warganet.peka.ai.id/api/v1/news?sort=latest`, and any speech page on `wowo.peka.ai.id`, then update the arrays and `SNAPSHOT_DATE`. The Warganet API does not send CORS headers, so the landing page cannot fetch it live from the browser.

## Running it

Needs Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build     # production build to dist/
npm run preview   # serve the build locally
```

## Structure

```
.
├── index.html                 # Vite entry, fonts, icons, meta, JSON-LD, noscript fallback
├── public/
│   ├── favicon.svg, favicon.ico, favicon-48.png, favicon-96.png
│   ├── apple-touch-icon.png, icon-192.png, icon-512.png
│   ├── og.png                 # Open Graph image, 1200x630
│   ├── logo.svg, logo-dark.svg
│   ├── manifest.webmanifest, robots.txt, sitemap.xml
├── scripts/
│   └── gen-icons.mjs          # renders the mark to PNG/ICO/OG, no dependencies
├── src/
│   ├── main.jsx
│   ├── App.jsx                # section order
│   ├── i18n.jsx               # all copy, EN and ID, plus the language provider
│   ├── data.js                # snapshots from warganet.peka.ai.id and wowo.peka.ai.id
│   ├── index.css              # all styles, tokens in :root
│   └── components/
│       ├── Nav.jsx            # sticky navbar, language toggle, mobile menu
│       ├── Logo.jsx           # the Peka mark as a React component
│       ├── Stickers.jsx       # Bubble, Bell, Radar, Lens
│       ├── Hero.jsx           # hero, Crosshair, Eyebrow
│       ├── Live.jsx           # Warganet AI and Kata Wowo cards
│       ├── SpecBoard.jsx      # spec cards, Meter
│       ├── Feed.jsx
│       ├── Products.jsx
│       ├── Demo.jsx
│       ├── Why.jsx
│       ├── Access.jsx
│       └── Footer.jsx
├── DESIGN.md                  # design direction and the reason behind each choice
└── vite.config.js
```

## Design

Full notes in [DESIGN.md](DESIGN.md). In short:

- Spec-sheet look on a Vercel-style frame: paper background `#f3f3f0`, hairlines `#d6d6d2`, two vertical rules bounding the content.
- Type: Inter Tight for headlines and body, Space Mono uppercase for labels, feed, and output.
- Peka yellow `#ffd60a` is only ever a fill (highlight, logo, positive meter, alert pill). Never text.
- Measuring motif: tick ruler, tick meters, crosshair, corner dot marks. The logo uses the same crosshair.
- Four holographic sticker characters, one per section where the meaning fits: Bubble (text being read) in the hero, Radar (sources) on card 03, Bell (alerts) on card 04, Lens (inspecting) on the demo output.
- Light theme only. Motion is hover and state transitions only.

Color and font tokens are in `:root` in `src/index.css`.

## Logo

The mark is a yellow square with a crosshair: a ring, four ticks, a dot. It means paying attention and measuring, the same motif used across the page.

- `public/favicon.svg`: mark only, 32x32.
- `public/logo.svg`, `public/logo-dark.svg`: mark plus wordmark for light and dark backgrounds.
- `src/components/Logo.jsx`: React component, `size` prop in pixels.

Raster icons are generated by `scripts/gen-icons.mjs`. Re-run it if the mark changes:

```bash
node scripts/gen-icons.mjs
```

## Not wired up yet

- **Early-access form** posts to `/v1/early-access` with `{ "email": "...", "lang": "en" }`. There is no backend yet, so the UI shows an honest failure message until the endpoint exists. Change it in `src/components/Access.jsx`.
- **MBG Watch** has a name and a one-line description only. Add facts, a link, and a screenshot when it is ready to try.
- **"Coming soon" rows** in the roadmap are intentionally unnamed. Fill them in when each tool is ready to show.

## SEO

- `robots.txt` allows all crawlers and points to `sitemap.xml`.
- `sitemap.xml` lists one URL: `https://peka.ai.id/`.
- `index.html` carries canonical, meta robots, Open Graph, Twitter card, JSON-LD (Organization, WebSite), and a `noscript` summary for crawlers without JavaScript.
- After deploying, add the domain in [Google Search Console](https://search.google.com/search-console), submit `https://peka.ai.id/sitemap.xml`, and request indexing for the home page. That step is manual.

## Deploy

`npm run build` produces a static site in `dist/`. Deploy to Vercel, Netlify, Cloudflare Pages, or any static host. On Vercel the framework is detected as Vite, no extra config.

## Accessibility

- Every control is reachable by keyboard with a visible focus ring.
- The mobile menu closes on Escape. Demo samples are a radiogroup with arrow-key navigation.
- Secondary text `#5c5c5a` on `#f3f3f0` has a 6.6:1 contrast ratio. All tap targets are at least 44px on touch screens.
- `prefers-reduced-motion` turns off all transitions.

## License

Not decided yet.
