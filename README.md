# Graphic-Design-Portfolio

Portfolio site for ZINOS Design Studio, built from `ZINOS-brand-guidelines-A4.pdf`. Direction: **Night gallery**: a full-screen night landscape, a filterable image gallery on ink, and a separate page for each project (brief, deliverables, colour and type decisions).

Open `index.html`, or serve the folder:

```
python -m http.server 5520
```

## Pages

- `index.html`: home (hero, gallery, services, how a project runs, contact)
- `work/{project}.html`: one page per project, e.g. `work/halden.html`. Each has the same fixed nav as the home page (logo back home, Work, Services, Contact), previous and next project links, and the contact band.

The nav is fixed to the top of every page. On the home page it starts clear over the hero photo and turns solid ink once you scroll (`assets/nav.js`); on project pages it is solid from the start.

## Editing projects

All project copy lives in `assets/projects.js`. The home gallery reads it directly; the project pages are static HTML generated from it, so after any edit run:

```
node scripts/build-projects.js
```

This rewrites every file in `work/` and removes pages for projects that no longer exist. Edit the data, not the generated pages.

## Layout system

Everything sits on one 12-column grid (40px margins, 24px gutters; 20px and 16px on phones):

- Gallery: one lead project across all 12 columns (16:9), then pairs of one big cover (7 columns) and one smaller cover (5 columns), both 4:3 and hanging from the same top line. The big side swaps every row. Captions start at the image's left edge. Below 1024px every tile runs full width.
- Services and the "How a project runs" steps use the same four columns (1, 4, 7, 10); the steps sit in a full-width fog band.
- Project pages: facts (role, client, discipline, year) on columns 1, 4, 7 and 10; body copy from column 4; the summary from column 7.

## Files

- `index.html`, `styles.css`, `main.js`: the home page; `styles.css` is shared with the project pages
- `work/*.html`: generated project pages
- `scripts/build-projects.js`: generates `work/*.html` from `assets/projects.js` (Node, no dependencies)
- `assets/projects.js`: all portfolio copy (studio text, services, process, case studies)
- `assets/nav.js`: turns the fixed nav solid on scroll
- `assets/smooth-scroll.js`: eased, inertia-style scrolling on every page (Lenis-like, no dependency). Wheel, trackpad, arrow keys, Page Up/Down, Space, Home/End and same-page links glide instead of jumping. Touch screens and reduced-motion visitors keep native scrolling. `EASE` sets the feel: lower is floatier, higher is snappier (0.085 now).
- `assets/hero-motion.js`: the hero's motion layer, a p5-style Perlin-noise flow field drawn on a canvas (no libraries). Faint pale trails drift like wind over the ridge, and the photo shifts a few pixels with the mouse. Pauses off-screen and in background tabs; turned off entirely for visitors who prefer reduced motion. Tune density with `count`, speed with `p.speed`, strength with `p.alpha`.
- `assets/work/{project}-1200.jpg` / `-2400.jpg`: project cover photos from Unsplash, two sizes each, chosen by the browser through `srcset`
- `assets/img/hero-night-{1280,1920,2880,3840}.jpg`: hero photo from Unsplash (from a 5168px original); `sizes` accounts for the cover crop on tall screens
- `CREDITS.md`: photographer and source for every Unsplash photo (also credited on the site)
- `assets/logo/`: lockup, wordmark, monogram and favicon, outlined from the PDF's vectors
- `assets/brand.js`: injects the logo into any `data-logo="lockup|wordmark|monogram"` element
- `zinos.md` / `zinos.json`: design map and taste principles extracted from the guidelines

## Replacing the stand-in work

The seven projects (Halden Coffee, Ossa Skincare, Tidewater Quarterly, Low Light Film Week, Northloop, Kestrel Library, Ridgeline) are fictional briefs. Edit `assets/projects.js`, save real covers into `assets/work/` as `{cover}-1200.jpg` and `{cover}-2400.jpg` (3:2 or 4:3, main subject inside the middle 75% of the height so the 16:9 lead crop keeps it), then run the build script. Update the `photo` credit, or remove it for your own photography.

Brand rules kept: Michroma only for headlines, DM Sans for reading and numbers, wordmark in the nav and the Z in the footer, one cobalt element per page (the "Start a project" button), sentence case, no exclamation marks, hero text enters once and `prefers-reduced-motion` is respected.
