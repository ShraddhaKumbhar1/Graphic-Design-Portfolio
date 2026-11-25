"""
Renders the hero gradient: assets/img/hero-gradient-{1280,1920,2880,3840}.jpg

A soft, blurred colour field in the ZINOS palette, lit by one soft source
(brand guidelines p14: "soft blurred colour", "lit by one soft source").
Ink (#0B0B0F) ground, deep navy and cobalt (#2D4BFF) blooms with a pale
fog highlight, kept dark at the bottom left where the headline sits.

Colour is mixed in linear light, softly tone-mapped so nothing clips,
then dithered with fine grain so the gradient never shows bands.

Run:  python scripts/render-hero-gradient.py
Needs numpy and Pillow. Change SEED for a different composition.
"""
import os
import numpy as np
from PIL import Image

SEED = 1125
W, H = 3840, 2560                      # 3:2, same ratio the page's `sizes` rule expects
OUT = os.path.join(os.path.dirname(__file__), '..', 'assets', 'img')


def srgb_to_linear(c):
    c = np.asarray(c, dtype=np.float64) / 255.0
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def linear_to_srgb(c):
    c = np.clip(c, 0, 1)
    return np.where(c <= 0.0031308, c * 12.92, 1.055 * np.power(c, 1 / 2.4) - 0.055)


def hexrgb(h):
    h = h.lstrip('#')
    return srgb_to_linear([int(h[i:i + 2], 16) for i in (0, 2, 4)])


rng = np.random.default_rng(SEED)
y, x = np.mgrid[0:H, 0:W].astype(np.float64)
u, v = x / W, y / H
aspect = W / H

# Gentle domain warp so the blooms read as soft light, not perfect circles
warp_u = u + 0.035 * np.sin(v * 5.1 + 1.3) + 0.02 * np.sin((u + v) * 7.3 + 0.4)
warp_v = v + 0.03 * np.sin(u * 4.3 + 2.2) + 0.018 * np.sin((u - v) * 6.1 + 1.7)

# Blooms are rotated ellipses: (centre u, centre v, radius x, radius y, angle deg, colour, strength).
# Long, tilted shapes read as a sweep of blurred light rather than a spotlight.
blooms = [
    (0.72, 0.30, 0.70, 0.46, -18, '#13207A', 1.10),   # deep navy field
    (0.66, 0.32, 0.58, 0.20, -24, '#2D4BFF', 0.85),   # cobalt sweep, upper right to centre
    (0.82, 0.22, 0.34, 0.12, -24, '#6F86FF', 0.40),   # brighter core inside the sweep
    (0.86, 0.18, 0.20, 0.10, -24, '#C7D1FF', 0.20),   # the one soft light source
    (0.28, 0.10, 0.50, 0.30, 10, '#1B2F9E', 0.40),    # cooler wash, top left
    (0.52, 0.66, 0.55, 0.28, -10, '#2A2470', 0.35),   # violet undertone, low centre
    (0.96, 0.58, 0.26, 0.40, 0, '#1E3BD8', 0.28),     # spill on the right edge
]

base = hexrgb('#0B0B0F')
img = np.zeros((H, W, 3)) + base
for cu, cv, rx, ry, ang, hexc, s in blooms:
    dx = (warp_u - cu) * aspect
    dy = warp_v - cv
    a = np.deg2rad(ang)
    px = dx * np.cos(a) + dy * np.sin(a)
    py = -dx * np.sin(a) + dy * np.cos(a)
    d2 = (px / rx) ** 2 + (py / ry) ** 2
    img += np.exp(-d2 * 2.0)[..., None] * hexrgb(hexc) * s

# Keep the headline corner (bottom left) and the bottom edge dark and calm
shade = np.clip(1 - 0.75 * np.exp(-(((u - 0.0) * aspect) ** 2 / 1.4 + (v - 1.0) ** 2 / 0.35)), 0.2, 1)
img *= shade[..., None]
img *= (0.55 + 0.45 * (1 - v ** 2.2))[..., None]

# Soft tone map in linear light: highlights roll off instead of clipping
img = 1 - np.exp(-img * 1.35)
img = img / (1 - np.exp(-1.35 * 1.6))

srgb = linear_to_srgb(img) * 255.0

# Fine monochrome grain + sub-step dither: removes 8-bit banding in the dark ramps
grain = rng.normal(0, 1.6, (H, W))[..., None]
srgb = np.clip(srgb + grain + rng.uniform(-0.5, 0.5, (H, W, 3)), 0, 255).astype(np.uint8)

full = Image.fromarray(srgb)
for w in (1280, 1920, 2880, 3840):
    im = full if w == W else full.resize((w, round(H * w / W)), Image.LANCZOS)
    path = os.path.join(OUT, f'hero-gradient-{w}.jpg')
    im.save(path, 'JPEG', quality=90, subsampling=0, optimize=True, progressive=True)
    print(os.path.relpath(path), im.size, os.path.getsize(path) // 1024, 'KB')
