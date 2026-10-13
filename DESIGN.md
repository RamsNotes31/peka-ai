# Peka, design direction

Dials: ENERGY 2 / RHYTHM 2 / MOTION 1

## Identity

- Product: Peka, a small set of AI tools for reading Indonesia's public conversation. Warganet AI (AI agents debating the news) and Kata Wowo (Prabowo speeches labeled sentence by sentence) are live; MBG Watch is coming soon; more follow, unnamed until ready. Status: pre-release.
- Thesis that ties them together: three voices, one toolbox. The press (Warganet), the people in charge (Kata Wowo), public programs on the ground (MBG Watch).
- Audience: brand teams, social media managers, developers, and everyday users in Indonesia. English first, Indonesian as an option.
- References from the owner: vercel.com (clean frame, hairlines), dahono.com (big headline, firm tone), and a spec-sheet style image (uppercase mono labels, crosshairs, tick meters, holographic stickers). Yellow is Peka's color.

## Palette

| Token | Value | Why |
|---|---|---|
| bg | #f3f3f0 | Spec-sheet paper, not screen white. From the reference image |
| fg | #111111 | Ink |
| muted | #5c5c5a | Secondary text, 6.6:1 on bg |
| line | #d6d6d2 | Hairline grid |
| accent | #ffd60a | Peka yellow, fill only: headline highlight, logo, positive meter, alert pill, active sample edge. Never as text color |

Holographic stickers are the only decorative element. No glow, no background gradients.

Measuring motif: tick ruler under the headline, tick meters on the board and in the demo, 3x3 dot marks in the corners of the hero and board (print registration marks). One language: Peka measures.

## Type

- Display and body: Inter Tight. Tight and neutral, gives a big headline like the reference without competing with the mono labels.
- Utility: Space Mono uppercase for spec labels, feed rows, and output. Monospace here carries meaning: machine output and spec-sheet language, not decoration.
- English translations under Indonesian sample text are sentence case in the body face, muted, so they read as a gloss and not as data.

## Layout

- Two vertical rules frame the content, sections are separated by horizontal rules, no background color changes.
- Radius 2px on buttons and inputs, 999px only on label pills. Two values.
- No shadows except a 1px drop shadow on stickers so they read as stuck-on.
- Cards that hold a sticker give it a 108px title band; stickers never overlap text.

## Signature

The "Under the hood" board: four cards showing what the live tools actually produce (an agent post, the news intake, a labeled sentence, a speech scoreboard) in a spec-sheet format. Followed by the "Hot on Warganet" log feed and the Kata Wowo sentence explorer. All three are the shape of the products themselves, built from snapshots of real output. Yellow marks the key label, "Janji" (promise), wherever it appears.

Sticker characters, one per section where the meaning fits: Bubble (text being read) in the hero, Radar (sources) on card 03, Bell (alerts) on card 04, Lens (inspecting) on the demo output.

## Theme

Light only. The spec-sheet paper is the identity; a dark version would lose it.

## Motion

Hover, a 300ms meter width transition when a demo result appears, a 150ms fade on the result panel. No loops, no scroll reveal. `prefers-reduced-motion` is respected.

## Copy

Plain, friendly, short sentences. No em dashes, no buzzwords, no invented numbers. Every number on the page is a sample and labeled as such. Product names other than the first are hidden behind "Coming soon" until they are ready to try.
