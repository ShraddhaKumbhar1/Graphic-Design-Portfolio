/*
  Portfolio content shared by all three directions.
  Every project here is a stand-in: replace client, copy and cover with real work.
  Covers are Unsplash photos (Unsplash License), saved as assets/work/{cover}-2400.jpg and -1200.jpg.
  Voice rules (brand guidelines p4): plain, warm, specific. Sentence case. No exclamation marks.
*/
window.STUDIO = {
  name: 'ZINOS Design Studio',
  tagline: 'Ideas that last.',
  lead: 'Brand identity, packaging, print and websites for small local businesses, startups and creative brands.',
  about: 'ZINOS is a studio for graphic, UI/UX and print design. I work directly with each client: short feedback loops, no hand-offs, and files that are checked before they leave.',
  email: 'hello@zinos.example',
  domain: 'zinos.example',
  location: 'Working remotely, replies the same day',
  heroPhoto: { by: 'Haseeb Jamil', url: 'https://unsplash.com/photos/snowy-mountain-peak-under-starry-sky-3s85IxVDyXE' },
  services: [
    { name: 'Brand identity', detail: 'Logo suite, colour, type and a guidelines PDF you can hand to any printer.', from: '4–6 weeks' },
    { name: 'Packaging', detail: 'Labels, cartons and pouches with print-ready dielines and proofs.', from: '3–5 weeks' },
    { name: 'Editorial and print', detail: 'Magazines, zines, books and posters built on a grid your team can reuse.', from: '3–8 weeks' },
    { name: 'Websites and UI', detail: 'Responsive marketing sites and product screens, designed and built as static pages.', from: '3–6 weeks' }
  ],
  steps: [
    { name: 'Call', when: 'Day 1', text: 'A 30-minute call about what you need and when. No charge.' },
    { name: 'Proposal', when: 'Day 3', text: 'Scope, timeline and a fixed price on one page.' },
    { name: 'Two directions', when: 'Week 2', text: 'I send two directions. Pick one and we refine it.' },
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
    timeline: '6 weeks',
    deliverables: ['Logo suite in 4 forms', 'Palette of 3 colours', 'Type pairing', '24-page guidelines', 'Cups, bags, cards and menu', 'Shopfront sign'],
    process: [
      { label: 'Listen', when: 'Week 1', text: 'Two mornings behind the counter, noting what customers actually read: the board, the cup and the bag.' },
      { label: 'Sketch', when: 'Week 2', text: 'Forty marks in pencil, six redrawn on screen, two shown to the owners.' },
      { label: 'System', when: 'Weeks 3–4', text: 'An italic serif for warmth, a plain sans for prices. The green comes from the shop’s tiled counter.' },
      { label: 'Apply', when: 'Weeks 5–6', text: 'Cups, bags, cards and the sign, each proofed on the real stock before print.' }
    ],
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
    timeline: '5 weeks',
    deliverables: ['Carton and label system for 8 products', 'Dielines for 3 formats', 'Print specifications', 'Two rounds of press proofs'],
    process: [
      { label: 'Audit', when: 'Week 1', text: 'Photographed three shelves in two shops and timed how long it took to find each product.' },
      { label: 'Hierarchy', when: 'Week 2', text: 'Number first, name second, brand third. Customers reorder by number, so the number gets the space.' },
      { label: 'Dielines', when: 'Weeks 3–4', text: 'A 40 × 20 × 140 mm carton with 3 mm bleed, checked line by line with the printer.' },
      { label: 'Proof', when: 'Week 5', text: 'Two press proofs on 350 gsm uncoated board before the run of 4,000.' }
    ],
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
    timeline: '8 weeks',
    deliverables: ['12-column grid and baseline', 'Master pages and paragraph styles', 'Cover template', 'Issue 14 layout', '10-page style guide'],
    process: [
      { label: 'Read', when: 'Weeks 1–2', text: 'Read the last four issues end to end and marked every place where reading broke.' },
      { label: 'Grid', when: 'Week 3', text: '12 columns, 5 mm gutters and a 13 pt baseline that body text, captions and folios all share.' },
      { label: 'Pacing', when: 'Weeks 4–6', text: 'Essay, then a full-bleed photograph, then short pieces. One rhythm the editor can repeat each issue.' },
      { label: 'Handover', when: 'Weeks 7–8', text: 'InDesign templates and a style guide, so the editor laid out issue 15 alone.' }
    ],
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
    timeline: '7 weeks',
    deliverables: ['Festival identity', '3 posters', 'Tickets and passes', '12 social templates', 'Wayfinding signs', 'Tote bag'],
    process: [
      { label: 'Concept', when: 'Week 1', text: 'One circle of projector light, recoloured for each night of the programme.' },
      { label: 'Posters', when: 'Weeks 2–3', text: 'Three posters from one template, so volunteers could make more without me.' },
      { label: 'Print', when: 'Weeks 4–5', text: 'Numbered tickets, and passes with a red ring so staff are easy to spot.' },
      { label: 'Signs', when: 'Weeks 6–7', text: 'High-contrast signs tested at 8 m in the hall with the house lights down.' }
    ],
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
    timeline: '4 weeks',
    deliverables: ['Campaign line', 'Art direction', '2 posters', '18 social assets', 'Landing page design', 'Export kit in 9 sizes'],
    process: [
      { label: 'Line', when: 'Week 1', text: '“Made for the long way round.” chosen from 30 written lines.' },
      { label: 'Motif', when: 'Week 1', text: 'Contour lines traced from the route the founders walked when testing the jacket.' },
      { label: 'Channels', when: 'Weeks 2–3', text: 'Poster, story, post and web page built from one grid and one type size ratio.' },
      { label: 'Launch', when: 'Week 4', text: 'Every asset exported in 9 sizes and named by channel, ready for the media buyer.' }
    ],
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
    timeline: '3 weeks',
    deliverables: ['Audit of 40 existing touchpoints', 'Visitor and staff interviews', 'Sketches and 3 directions', 'New mark and signage system', '12-page case study'],
    process: [
      { label: 'Audit', when: 'Week 1', text: 'Photographed 40 places the logo appears. It was legible in 9 of them.' },
      { label: 'Research', when: 'Week 1', text: 'Talked to six visitors and two staff. Most called it “the library on Hale Street”, never “Kestrel”.' },
      { label: 'Sketch', when: 'Week 2', text: 'Three directions. The one that stayed builds a K from book spines.' },
      { label: 'System', when: 'Week 3', text: 'One teal, one amber reserved for wayfinding, one sans for every sign.' }
    ],
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
    timeline: '3 weeks',
    deliverables: ['3 illustrated posters, A2', '3 four-colour palettes', 'Risograph run of 60'],
    process: [
      { label: 'Observe', when: 'Week 1', text: 'Photographed one viewpoint at 05:48, 12:30 and 19:12 on the same day.' },
      { label: 'Reduce', when: 'Week 1', text: 'Each scene cut down to four ridges and one sun.' },
      { label: 'Colour', when: 'Week 2', text: 'Four inks per poster, each picked from the photographs.' },
      { label: 'Print', when: 'Week 3', text: 'Risograph, 60 copies, two colours per pass.' }
    ],
    decision: 'Four layers per poster is where the depth still reads and the risograph registration stays forgiving.',
    palette: [{ hex: '#6E3540', name: 'Dawn' }, { hex: '#21485A', name: 'Noon' }, { hex: '#F2B36B', name: 'Dusk' }],
    type: 'Text serif for the title, spaced sans for time stamps'
  }
];
