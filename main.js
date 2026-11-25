(function () {
  var S = window.STUDIO, P = window.PROJECTS, WORK = 'assets/work/';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // Photos: every cover ships at 1200 and 2400px; the browser picks by rendered width and pixel density
  var photo = function (p, sizes, eager) {
    var base = WORK + p.cover;
    return '<img src="' + base + '-1200.jpg" srcset="' + base + '-1200.jpg 1200w, ' + base + '-2400.jpg 2400w" sizes="' + sizes + '"' +
      ' loading="' + (eager ? 'eager' : 'lazy') + '" decoding="async" width="2400" height="1600"';
  };
  var credit = function (c) { return '<a href="' + c.url + '?utm_source=zinos_portfolio&amp;utm_medium=referral" rel="noopener">' + esc(c.by) + '</a>'; };

  $('.hero .lead').textContent = S.lead;
  var hc = $('[data-hero-credit]');
  hc.href = S.heroPhoto.url + '?utm_source=zinos_portfolio&utm_medium=referral'; hc.textContent = S.heroPhoto.by;
  $('[data-about]').textContent = S.about;
  document.querySelectorAll('[data-mail]').forEach(function (a) {
    a.href = 'mailto:' + S.email + '?subject=New%20project';
    if (a.hasAttribute('data-mail-text')) a.textContent = S.email;
  });

  // Gallery: one lead project across the full width, then equal pairs so every
  // caption in a row shares a baseline. A leftover odd tile also runs full width.
  $('[data-gallery]').innerHTML = P.map(function (p, i) {
    var lead = i === 0 || (i === P.length - 1 && (P.length - 1) % 2 === 1);
    return '<li class="tile ' + (lead ? 'is-lead' : 'is-half') + '" data-tag="' + p.tag + '">' +
      '<button type="button" data-open="' + i + '" aria-label="Open case study: ' + esc(p.title) + '">' +
        '<div class="tile__frame" style="background:' + p.ground + '">' + photo(p, lead ? '(max-width: 1024px) calc(100vw - 40px), calc(100vw - 80px)' : '(max-width: 1024px) calc(100vw - 40px), calc(50vw - 52px)', i === 0) + ' alt=""></div>' +
        '<div class="tile__meta">' +
          '<span class="tile__title">' + esc(p.title) + '</span>' +
          '<span class="tile__open" aria-hidden="true">View case →</span>' +
          '<span class="tile__disc"><span class="tile__no">' + pad(i + 1) + '</span>' + esc(p.discipline) + ' · ' + p.year + '</span>' +
        '</div>' +
      '</button></li>';
  }).join('');

  // Filters
  var labels = { all: 'All', identity: 'Identity', packaging: 'Packaging', editorial: 'Editorial', event: 'Event', campaign: 'Campaign', illustration: 'Illustration' };
  var counts = P.reduce(function (m, p) { m[p.tag] = (m[p.tag] || 0) + 1; return m; }, { all: P.length });
  var filters = $('[data-filters]');
  filters.innerHTML = Object.keys(labels).filter(function (k) { return counts[k]; }).map(function (k) {
    return '<button type="button" data-filter="' + k + '" aria-pressed="' + (k === 'all') + '">' + labels[k] + '<sup>' + counts[k] + '</sup></button>';
  }).join('');
  filters.addEventListener('click', function (e) {
    var b = e.target.closest('[data-filter]'); if (!b) return;
    var f = b.dataset.filter;
    filters.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    document.querySelectorAll('.tile').forEach(function (t) { t.classList.toggle('is-hidden', f !== 'all' && t.dataset.tag !== f); });
  });

  // Services and timeline
  $('[data-services]').innerHTML = S.services.map(function (s, i) {
    return '<li><div class="no">' + pad(i + 1) + '</div><h3>' + esc(s.name) + '</h3><p>' + esc(s.detail) + '</p><span class="time">' + esc(s.from) + '</span></li>';
  }).join('');
  $('[data-steps]').innerHTML = S.steps.map(function (s) {
    return '<li><span class="when">' + esc(s.when) + '</span><strong>' + esc(s.name) + '</strong><p>' + esc(s.text) + '</p></li>';
  }).join('');

  // Case sheet
  var sheet = $('[data-sheet]'), body = $('[data-sheet-body]'), current = 0;
  function contrast(hex) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#0B0B0F' : '#FFFFFF';
  }
  function render(i) {
    var p = P[i]; current = i;
    $('[data-sheet-count]').textContent = pad(i + 1) + ' / ' + pad(P.length) + ' · ' + p.discipline;
    body.innerHTML =
      '<header class="sh__head"><div><span class="caption">' + esc(p.client) + ' · ' + p.year + '</span><h2 class="h1" id="sheet-title">' + esc(p.title) + '</h2></div><p class="lead">' + esc(p.summary) + '</p></header>' +
      '<figure class="sh__cover" style="background:' + p.ground + '">' + photo(p, '(max-width: 1360px) calc(100vw - 80px), 1200px', true) + ' alt="' + esc(p.photo.alt) + '">' +
        '<figcaption class="caption">Photo: ' + credit(p.photo) + ' on Unsplash</figcaption></figure>' +
      '<dl class="sh__facts">' +
        '<div><dt>Role</dt><dd>' + esc(p.role) + '</dd></div>' +
        '<div><dt>Timeline</dt><dd>' + esc(p.timeline) + '</dd></div>' +
        '<div><dt>Client</dt><dd>' + esc(p.client) + '</dd></div>' +
        '<div><dt>Discipline</dt><dd>' + esc(p.discipline) + '</dd></div>' +
      '</dl>' +
      '<section class="sh__brief"><h3 class="h2">The brief</h3><div><p>' + esc(p.brief) + '</p><ul class="sh__deliv" aria-label="Delivered">' + p.deliverables.map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('') + '</ul></div></section>' +
      '<ol class="sh__steps" aria-label="Process">' + p.process.map(function (s, k) {
        return '<li><span class="when">' + pad(k + 1) + ' · ' + esc(s.when) + '</span><strong>' + esc(s.label) + '</strong><p>' + esc(s.text) + '</p></li>';
      }).join('') + '</ol>' +
      '<section class="sh__why"><h3 class="h2">Why it works</h3><div><blockquote>' + esc(p.decision) + '</blockquote>' +
        '<div class="sh__palette">' + p.palette.map(function (c) { return '<div style="background:' + c.hex + ';color:' + contrast(c.hex) + '">' + esc(c.name) + '<br>' + c.hex + '</div>'; }).join('') + '</div>' +
        '<p class="sh__type">' + esc(p.type) + '</p></div></section>' +
      '<button type="button" class="sh__next" data-next>Next project<span>' + esc(P[(i + 1) % P.length].title) + ' →</span></button>';
    sheet.scrollTop = 0;
  }
  function open(i) {
    render(i);
    if (!sheet.open) sheet.showModal();
    document.documentElement.style.overflow = 'hidden';
    history.replaceState(null, '', '#case-' + P[i].id);
  }
  sheet.addEventListener('close', function () {
    document.documentElement.style.overflow = '';
    history.replaceState(null, '', location.pathname);
    var t = document.querySelector('[data-open="' + current + '"]'); if (t) t.focus({ preventScroll: true });
  });
  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-open]'); if (o) open(+o.dataset.open);
  });
  $('[data-close]').addEventListener('click', function () { sheet.close(); });
  sheet.addEventListener('click', function (e) {
    if (e.target.closest('[data-prev]')) render((current - 1 + P.length) % P.length);
    else if (e.target.closest('[data-next]')) render((current + 1) % P.length);
  });
  sheet.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') render((current + 1) % P.length);
    if (e.key === 'ArrowLeft') render((current - 1 + P.length) % P.length);
  });

  var m = location.hash.match(/^#case-(.+)$/);
  if (m) { var idx = P.findIndex(function (p) { return p.id === m[1]; }); if (idx > -1) open(idx); }
})();
