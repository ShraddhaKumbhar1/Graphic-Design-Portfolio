/*
  Portfolio content shared by all three directions.
  Every project here is a stand-in: replace client, copy and cover with real work.
  Covers are Unsplash photos (Unsplash License), saved as assets/work/{cover}-2400.jpg and -1200.jpg.
  After editing a project, run `node scripts/build-projects.js` to regenerate its page in work/.
  Voice rules (brand guidelines p4): plain, warm, specific. Sentence case. No exclamation marks.
*/
window.STUDIO = {
  name: 'ZINOS Design Studio',
  tagline: 'Ideas that last.',
  lead: 'Brand identity, packaging, print and websites for small local businesses, startups and creative brands.',
  about: 'ZINOS is a studio for graphic, UI/UX and print design. We work directly with each client: short feedback loops, no hand-offs, and files that are checked before they leave.',
  email: 'hello@zinos.example',
  domain: 'zinos.example',
  location: 'Working remotely, replies the same day',
  services: [
    { name: 'Brand identity', detail: 'Logo suite, colour, type and a guidelines PDF you can hand to any printer.', from: '4–6 weeks' },
    { name: 'Packaging', detail: 'Labels, cartons and pouches with print-ready dielines and proofs.', from: '3–5 weeks' },
    { name: 'Editorial and print', detail: 'Magazines, zines, books and posters built on a grid your team can reuse.', from: '3–8 weeks' },
    { name: 'Websites and UI', detail: 'Responsive marketing sites and product screens, designed and built as static pages.', from: '3–6 weeks' }
  ],
  steps: [
    { name: 'Call', when: 'Day 1', text: 'A 30-minute call about what you need and when. No charge.' },
    { name: 'Proposal', when: 'Day 3', text: 'Scope, timeline and a fixed price on one page.' },
    { name: 'Two directions', when: 'Week 2', text: 'We send two directions. Pick one and we refine it.' },
    { name: 'Files', when: 'Final week', text: 'Everything delivered in colour, black and white, with a short guide.' }
  ]
};

window.PROJECTS = [
  {
    id: 'halden',
    title: 'Halden Coffee',
    discipline: 'Brand identity',
    tag: 'identity',
    client: 'Café and roastery, 30 seats',
    year: 2026,
    cover: 'halden',
    ground: '#E2CFB5',
    photo: { by: 'With Mahdy', url: 'https://unsplash.com/photos/a-brown-paper-bag-sitting-on-top-of-a-white-table-wizWrRZJXSg', alt: 'A kraft paper coffee bag standing on a white table in soft light' },
    summary: 'An identity for a neighbourhood café opening its second shop.',
    brief: 'Halden’s first logo came from a menu template. It blurred on cup sleeves, could not be printed in one colour and had no rules for the new shop’s signage.',
    role: 'Identity, guidelines, print',
    deliverables: ['Logo suite in 4 forms', 'Palette of 3 colours', 'Type pairing', '24-page guidelines', 'Cups, bags, cards and menu', 'Shopfront sign'],
    decision: 'The italic wordmark holds at 12 mm on a bag sticker and at 2 m on the shopfront, so the café needs one logo, not three.',
    palette: [{ hex: '#1F3A2E', name: 'Counter green' }, { hex: '#EDE6D8', name: 'Oat' }, { hex: '#B5532D', name: 'Roast' }],
    type: 'Italic serif for the name, grotesque sans for menus and prices'
  },
  {
    id: 'ossa',
    title: 'Ossa Skincare',
    discipline: 'Packaging',
    tag: 'packaging',
    client: 'Skincare startup, 3 people',
    year: 2026,
    cover: 'ossa',
    ground: '#D0C9BD',
    photo: { by: 'Aleksandrs Karevs', url: 'https://unsplash.com/photos/a-bunch-of-bottles-sitting-on-top-of-a-table-V2Ks2FTkdEk', alt: 'Three glass dropper bottles on a stone plinth with dried flowers' },
    summary: 'A packaging system that lets eight products share one shelf without blurring together.',
    brief: 'Ossa launched with eight products in near-identical bottles. Customers in shops picked up the wrong one, and reorders by email kept asking “which serum was it?”',
    role: 'Packaging, dielines, print production',
    deliverables: ['Carton and label system for 8 products', 'Dielines for 3 formats', 'Print specifications', 'Two rounds of press proofs'],
    decision: 'A large product number lets a customer find their serum from two metres away and reorder it without reading a word.',
    palette: [{ hex: '#EDE7DE', name: 'Stone' }, { hex: '#8A5A44', name: 'Amber glass' }, { hex: '#2B2826', name: 'Charcoal' }],
    type: 'Wide-tracked sans for the brand, serif numerals for product numbers'
  },
  {
    id: 'tidewater',
    title: 'Tidewater Quarterly',
    discipline: 'Editorial design',
    tag: 'editorial',
    client: 'Independent coastal magazine',
    year: 2025,
    cover: 'tidewater',
    ground: '#D4D3D3',
    photo: { by: 'Sarah Dorweiler', url: 'https://unsplash.com/photos/person-reading-book-on-white-surface-Sy8dsVyiPgs', alt: 'A hand holding open a magazine spread with black and white photographs' },
    summary: 'A redesign of a 64-page quarterly so long essays are calm to read and photographs get room.',
    brief: 'Tidewater’s editor was laying out each issue from scratch. Essays ran in narrow columns, photos were cropped to fit and no two spreads lined up.',
    role: 'Art direction, grid, templates',
    deliverables: ['12-column grid and baseline', 'Master pages and paragraph styles', 'Cover template', 'Issue 14 layout', '10-page style guide'],
    decision: 'Body text at 9.5/13 pt with about 62 characters per line, and captions on the same baseline, so spreads line up across the gutter.',
    palette: [{ hex: '#16222A', name: 'Deep' }, { hex: '#2F6366', name: 'Tide' }, { hex: '#FBFAF7', name: 'Paper' }],
    type: 'Text serif for essays and headlines, small sans for kickers and captions'
  },
  {
    id: 'lowlight',
    title: 'Low Light Film Week',
    discipline: 'Event branding',
    tag: 'event',
    client: 'Community film festival, 7 screens',
    year: 2025,
    cover: 'lowlight',
    ground: '#3B3933',
    photo: { by: 'Jeremy Yap', url: 'https://unsplash.com/photos/turned-on-projector-J39X2xX_8CQ', alt: 'A vintage film projector throwing a beam of light through a dark room' },
    dark: true,
    summary: 'A festival identity built from one circle of projector light.',
    brief: 'A seven-day festival with no photography budget needed posters, passes, social posts and signs that work in a dimmed hall, and that volunteers could extend themselves.',
    role: 'Identity, posters, print, wayfinding',
    deliverables: ['Festival identity', '3 posters', 'Tickets and passes', '12 social templates', 'Wayfinding signs', 'Tote bag'],
    decision: 'Every piece reuses the same circle, so a volunteer with the template can make a new poster in about 20 minutes.',
    palette: [{ hex: '#0B0B0B', name: 'Night' }, { hex: '#F2A33A', name: 'Lamp' }, { hex: '#E0482F', name: 'Red' }],
    type: 'Heavy grotesque for titles, regular sans for times and screens'
  },
  {
    id: 'northloop',
    title: 'Northloop launch',
    discipline: 'Campaign art direction',
    tag: 'campaign',
    client: 'Outerwear startup',
    year: 2026,
    cover: 'northloop',
    ground: '#7D8390',
    photo: { by: 'Backroad Packers', url: 'https://unsplash.com/photos/man-in-orange-hoodie-standing-on-rocky-mountain-during-daytime-kWgR1Y6pcFg', alt: 'A hiker in an orange jacket standing on a rocky summit above a valley' },
    summary: 'One jacket launched across posters, social and a landing page in four weeks.',
    brief: 'Northloop had one product, one launch date and no campaign. Each channel had been designed by a different freelancer, and none of it looked related.',
    role: 'Concept, art direction, design',
    deliverables: ['Campaign line', 'Art direction', '2 posters', '18 social assets', 'Landing page design', 'Export kit in 9 sizes'],
    decision: 'One orange and one motif in every channel, so someone who saw the poster recognises the post a day later.',
    palette: [{ hex: '#FF5B2E', name: 'Signal' }, { hex: '#F1EEE8', name: 'Bone' }, { hex: '#1C1A17', name: 'Charcoal' }],
    type: 'Bold grotesque with tight tracking for headlines, regular weight for details'
  },
  {
    id: 'kestrel',
    title: 'Kestrel Library',
    discipline: 'Brand redesign case study',
    tag: 'identity',
    client: 'Public library, self-initiated',
    year: 2026,
    cover: 'kestrel',
    ground: '#6D675C',
    photo: { by: 'Metin Ozer', url: 'https://unsplash.com/photos/a-library-filled-with-lots-of-books-and-chairs-pCp5zuDXGJg', alt: 'Rows of bookshelves and reading tables in a public library' },
    summary: 'A self-initiated study of why a library’s logo fails on signs and screens, and how to fix it.',
    brief: 'The library’s 2009 logo uses four colours, three typefaces and a bevel. It disappears below 40 mm, and the building’s signs ignore it entirely.',
    role: 'Research, identity, signage (self-initiated)',
    deliverables: ['Audit of 40 existing touchpoints', 'Visitor and staff interviews', 'Sketches and 3 directions', 'New mark and signage system', '12-page case study'],
    decision: 'A K built from book spines still reads at 16 px as a favicon and at one metre on the entrance sign.',
    palette: [{ hex: '#0F4C5C', name: 'Teal' }, { hex: '#F3EFE6', name: 'Paper' }, { hex: '#E3A33A', name: 'Amber' }],
    type: 'One grotesque sans in two weights, for the name and for every sign'
  },
  {
    id: 'ridgeline',
    title: 'Ridgeline',
    discipline: 'Illustrated poster series',
    tag: 'illustration',
    client: 'Self-initiated',
    year: 2025,
    cover: 'ridgeline',
    ground: '#8F7F70',
    photo: { by: 'Sven Pieren', url: 'https://unsplash.com/photos/mountain-ridges-under-warm-sky-ibikgDapcp4', alt: 'Layered mountain ridges fading into warm haze at dawn' },
    summary: 'Three posters of one mountain at three times of day, in four colours each.',
    brief: 'A personal series to test a limited-palette illustration style that could carry a client campaign: one subject, one viewpoint, three times of day.',
    role: 'Illustration, risograph print',
    deliverables: ['3 illustrated posters, A2', '3 four-colour palettes', 'Risograph run of 60'],
    decision: 'Four layers per poster is where the depth still reads and the risograph registration stays forgiving.',
    palette: [{ hex: '#6E3540', name: 'Dawn' }, { hex: '#21485A', name: 'Noon' }, { hex: '#F2B36B', name: 'Dusk' }],
    type: 'Text serif for the title, spaced sans for time stamps'
  }
];
