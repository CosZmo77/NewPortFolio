# Saad Design — local portfolio

A Hollow Knight inspired React + Vite portfolio. The original home sequence is preserved: hero → about → selected works → technical arsenal → services → contact. Each chamber blends through black into the next environment.

## Run locally

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open the URL printed by Vite. No deployment or Git push is needed.

```sh
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

## Motion and scenery

- `src/components/LevelBackdrop.tsx` layers original scenery, atmospheric effects, and a dark foreground. The masks in `src/index.css` fade both ends into the black page.
- `src/components/LevelEffects.tsx` gives each home level its own atmosphere: soul motes at the surface, fireflies in About, rain in Projects, crystals in Skills, embers in Services, and lanterns in Contact. The effects pause offscreen and in hidden tabs, with fewer particles on mobile.
- `src/hooks/useDescent.ts` owns scoped GSAP entrances, opposing parallax movement, and pointer-driven charm/card lighting. Each effect is cleaned up on navigation. The page keeps native scrolling.
- `src/components/DepthMap.tsx` moves the Knight marker between the original home sections on larger screens.
- CSS/GSAP motion respects the system reduced-motion preference. Existing animated character artwork is preserved.
- Ambient particles and the marquee pause offscreen; the marquee also pauses in hidden tabs and has a pause button.

## Interactive details

- The current Xentric Integrated Solutions role is shown on the dedicated About page, with a short introduction on Home in `CurrentExperience.tsx`. Dates, title, location, and responsibilities follow the owner's supplied experience.
- `ProjectCollection.tsx` renders the same gallery on Home and Projects from `src/data/projects.ts`. Home features three entries; Projects includes all seven. Each has the same screenshot frame, overview, stack, links, and native details disclosure. The full iLovePhysio technical notes load only when opened.
- iLovePhysio uses the owner-supplied homepage screenshot at `public/assets/physio/ilovephysio-home.png`. The previous anatomy illustrations and their attribution remain archived in `public/assets/physio/ATTRIBUTION.md`.

- Home opens with an asymmetric name composition and an illustrated Knight shrine. Three original character charms lead into work, About, and services; focus/hover lights their paths and wakes only the selected character. The central Knight has a brief, replayable awakening. Its spark elements are removed after the effect; no persistent animation loop is added. The shrine stacks below the title on phones, where content remains fully opaque while scrolling.

- Services uses a three-discipline chooser with the original character icons. Its contact links carry the chosen service into the form.
- The original photo appears in an engraved character frame. Awaken portrait opens a portal to /about; the About portrait returns to /.
- Contact is an ornamental letter on /contact with project choices, labelled fields, and sending, error, and success states. Service links preselect the craft through the service query parameter. Errors preserve the draft.
- Header links, shrine paths, and footer doorways open dedicated /about, /projects, /services, and /contact chapters. Supported browsers dissolve between scenes after the destination chunk loads. Reduced motion and other browsers navigate directly. The Begin the descent link, DepthMap, and chapter cues explicitly scroll within the original six-level homepage.
- The complete project archive lives on /projects. Home retains selected work and an archive doorway, keeping the level descent concise.

## Arrival and the resting chamber

- `ArrivalGate` holds the first reveal until fonts and opening art are ready. On fast connections the entrance stays visible for 2.2 seconds, then fades for 760ms; reduced motion uses a 650ms minimum and a short fade. Slow loads do not acquire another full hold. Hero layers emerge together with small movements and gentle easing. Page animations initialize before paint and start with the reveal. A stable scrollbar gutter prevents horizontal shifts when scroll locks are released.
- The footer is a small resting chamber: character doorways lead to About and Projects, the bench returns to the surface, and social links appear as charms. It keeps the original background and contains no emoji.

## Faster assets

Original files under `public/assets/Images` remain untouched. The app uses WebP derivatives in `public/assets/optimized`, with smaller mobile variants and lazy loading below the fold. Hero artwork: **11,383,639 → 145,848 bytes** on desktop, **78,510 bytes** for the mobile crop. The first document load uses an asset-based percentage screen: it prepares all four fonts, opening artwork, and any initial route chunk before revealing the portfolio. The silver progress bar reports completed opening resources without a per-frame React loop. The entrance uses the original Knight, logo, and opening scenery; a six-second fallback prevents stalled assets from trapping visitors. Internal navigation does not replay it. Fonts use `font-display: swap`; secondary routes load on demand.

Regenerate assets with Python and Pillow:

```sh
python -m pip install Pillow
python scripts/optimize-assets.py
```

The exact image mapping, dimensions, and sizes are recorded in `public/assets/optimized/manifest.json`.

The contact page retains its existing Web3Forms integration and needs an internet connection to deliver real messages. Local UI tests intercepted the request and simulated success/failure without sending a message.

## Motion performance

- Level fades use black gradient overlays, avoiding full-section masks around moving scenery. The original backgrounds and level sequence are preserved.
- Decorative particle elements exist only for visible levels, and disappear when the tab is hidden or reduced motion is requested. They also wait until the entrance veil starts leaving. Each environment keeps its own particle treatment.
- Desktop scenery uses one scroll-linked image transform per level. Mobile scenery stays still; foregrounds no longer have a second parallax layer.
- `CharacterSprite` displays the original animation only while visible and selected. Otherwise it uses a first-frame poster, including for reduced motion. Regenerate posters after optimizing assets with `python scripts/create-character-posters.py`.
- Pointer tilt caches its element bounds on entry, avoiding layout reads on every mouse move.

Local development browser spot check (1280 × 720, two seconds at the hero): before, 58 animation frames and 24 frame intervals over 33.4 ms; after, 121 frames and none over 33.4 ms. CSS animations present fell from 159 to 10. This is a local comparison, not a guarantee for every device.
