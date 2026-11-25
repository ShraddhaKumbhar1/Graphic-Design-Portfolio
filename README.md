# Graphic-Design-Portfolio

Portfolio site for ZINOS Design Studio, built from `ZINOS-brand-guidelines-A4.pdf`. Direction: **Night gallery**: a full-screen night landscape, a filterable image gallery on ink, and each project opening as a full case study sheet (brief, process, colour and type decisions).

Open `index.html`, or serve the folder:

```
python -m http.server 5520
```

## Layout system

Everything sits on one 12-column grid (40px margins, 24px gutters; 20px and 16px on phones):

- Gallery: one lead project across all 12 columns (16:9), then equal 6 + 6 pairs (4:3), so both captions in a row share a baseline. Captions start at the image's left edge.
- Services and the "How a project runs" steps use the same four columns (1, 4, 7, 10); the steps sit in a full-width fog band.
- Case sheet: facts and steps on columns 1, 4, 7 and 10; body copy from column 4; the summary from column 7.

## Files

- `index.html`, `styles.css`, `main.js`: the site
- `assets/projects.js`: all portfolio copy (studio text, services, process, case studies)
- `assets/work/{project}-1200.jpg` / `-2400.jpg`: project cover photos from Unsplash, two sizes each, chosen by the browser through `srcset`
- `assets/img/hero-night-1600.jpg` / `-3200.jpg`: hero photo from Unsplash
- `CREDITS.md`: photographer and source for every Unsplash photo (also credited on the site)- `assets/logo/`: lockup, wordmark, monogram and favicon, outlined from the PDF's vectors
- `assets/brand.js`: injects the logo into any `data-logo="lockup|wordmark|monogram"` element
- `zinos.md` / `zinos.json`: design map and taste principles extracted from the guidelines

## Replacing the stand-in work

The seven projects (Halden Coffee, Ossa Skincare, Tidewater Quarterly, Low Light Film Week, Northloop, Kestrel Library, Ridgeline) are fictional briefs. Edit `assets/projects.js` and save real covers into `assets/work/` as `{cover}-1200.jpg` and `{cover}-2400.jpg` (3:2 or 4:3, main subject inside the middle 75% of the height so the 16:9 lead crop keeps it). Update the `photo` credit, or remove it for your own photography.

Brand rules kept: Michroma only for headlines, DM Sans for reading and numbers, wordmark in the nav and the Z in the footer, one cobalt element (the "Start a project" button), sentence case, no exclamation marks, hero text enters once and `prefers-reduced-motion` is respected.
