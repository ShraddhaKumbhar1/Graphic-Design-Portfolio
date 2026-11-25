# Design Map

Source: `ZINOS-brand-guidelines-A4.pdf` (v1.0, November 2026, 19 A4 pages). Measured from the PDF's text layer and vector drawings, checked against page renders.

## Spacing Scale
- Base unit 8px: 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- Page margin: 39pt on A4 (13.8 mm). Web: 40px at 1440px, 20px under 640px
- Letterhead margin 20 mm · bleed 3 mm · safe margin 4 mm
- Gutter 24px

## Font Hierarchy
| Role | Family | Size / line | Weight |
|---|---|---|---|
| Display | Michroma | 56 / 64 | 400 |
| Heading 1 | Michroma | 36 / 44 | 400 |
| Heading 2 | Michroma | 20 / 28 | 400 |
| Lead | DM Sans | 20 / 30 | 200 ExtraLight |
| Body | DM Sans | 16 / 26 | 300 Light |
| Emphasis | DM Sans | 16 / 26 | 400 Regular |
| Caption | DM Sans | 12 / 18 | 300 Light |
| Descriptor (DESIGN STUDIO) | DM Sans | ≈11, uppercase, tracked to wordmark width | 200 |
| Working documents | Inter | 33pt headings (500), 9.8pt body (300) | — |

Rules: Michroma tracking +0 in text, +60 in the wordmark only. Body measure 45–75 characters. Headings and buttons in sentence case. No exclamation marks. Numbers and prices always DM Sans.

## Color Palette
| Role | Hex | Share |
|---|---|---|
| White (ground) | `#FFFFFF` | 55% |
| Ink (text, dark ground) | `#0B0B0F` | 25% |
| Fog (panels, tints) | `#EEF0F6` | 10% |
| Cobalt (one use per layout) | `#2D4BFF` | 10% |
| Text secondary | `#3B3F4D` | — |
| Text muted | `#5B6070` | — |

## Image Ratios
- Cover / hero: 2.35:1 (2400×1024)
- Landscape plate: 16:9 (2400×1343, 1600×896)
- Portrait plate: 2:3 (1200×1800)
- Social post: 4:5 (1080×1350); square 1:1
- OG image: 1.91:1 (1200×630)

## Component Tokens
- Radius: 0px on panels, swatches and photos. App icon uses ≈22%; round avatar only
- Shadows: none
- Dividers: 0.75pt ink hairline (1px on screen); panel outline 1px `#E2E5EE`
- Grid: A4 three-column (starts at 39 / 218 / 398pt), two-column split at 313pt; web content max 1200px
- Logo: clear space = height of Z on every side; screen minimums lockup 140px, wordmark 80px, monogram 16px
- Motion: hero text enters once on load; `prefers-reduced-motion` respected

---

# Taste DNA

### Cobalt is a single word, not a theme
- **Trigger**: When a layout needs a point of emphasis (a button, a card face, a cover)
- **Decision**: One cobalt (`#2D4BFF`) element per layout, with white and ink doing everything else, over a blue-tinted UI where links, icons and headings all share the accent
- **Reason**: A colour that appears once reads as a decision. The eye lands on it first, so it can only point at the thing that matters most, which on a portfolio is "start a project"
- **Evidence**: stated proportion 55 / 25 / 10 / 10; stationery rule "one cobalt element at most per piece"; website spec "one cobalt button"; cobalt-on-fog logo marked "sparingly"

### Wide display face kept on a short leash
- **Trigger**: When deciding where the extended, technical Michroma face is allowed
- **Decision**: Michroma only for the wordmark and headlines of a few words, with DM Sans Light for everything read, over using the display face for navigation, numbers and labels to push the brand voice harder
- **Reason**: Extended letterforms stick in memory at 36–56px and tire the eye at 14px. A price set in a wide face looks like a logo, not a figure a client can trust
- **Evidence**: type scale uses Michroma only at 56, 36 and 20px; "never numbers, prices, forms or body text"; stationery uses no Michroma; body is 16/26 DM Sans Light at 45–75 characters

### One logo, then silence (restraint)
- **Trigger**: When a layout has room for more brand marks: footers, watermarks, photo corners
- **Decision**: One logo per layout, the Z monogram wherever the name would repeat, and no logo on photographs, over repeating the lockup as a pattern or watermark
- **Reason**: A studio that sells restraint has to practise it. Repeated logos compete with the client work, which is what a visitor came to see
- **Evidence**: the "Using the logo once" page; website rule "wordmark in the navigation, footer uses the Z, hero photograph stays clean"; photography and mockups carry no logo

### Hairlines and flat grounds instead of boxes
- **Trigger**: When grouping content: contents list, personality traits, font-use table, asset inventory
- **Decision**: 0.75pt ink hairlines and flat fog panels with square corners, no shadows and no rounded cards, over card UI with radius and elevation
- **Reason**: Ruled lists read like a printed spec sheet, which suits a studio whose promise is checked, delivered files. Depth is left to photographs lit by one soft source
- **Evidence**: p3 vector drawings are 0.75pt rules in `#0B0B0F`; swatches and panels have 0px radius; no drop shadows anywhere in the PDF; imagery spec "lit by one soft source"
