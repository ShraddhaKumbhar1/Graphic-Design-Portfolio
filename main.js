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

  $('.hero .lead').textContent = S.lead;
  $('[data-about]').textContent = S.about;
  document.querySelectorAll('[data-mail]').forEach(function (a) {
    a.href = 'mailto:' + S.email + '?subject=New%20project';
    if (a.hasAttribute('data-mail-text')) a.textContent = S.email;
  });

  // Gallery: one lead project across the full width, then pairs of one big cover
  // (7 columns) and one smaller cover (5 columns). The big side swaps every row
  // so the page zigzags. A leftover odd tile runs full width.
  var SIZES = {
    'is-lead': '(max-width: 1024px) calc(100vw - 40px), calc(100vw - 80px)',
    'is-big': '(max-width: 1024px) calc(100vw - 40px), calc((100vw - 80px) * 7 / 12)',
    'is-small': '(max-width: 1024px) calc(100vw - 40px), calc((100vw - 80px) * 5 / 12)'
  };
  $('[data-gallery]').innerHTML = P.map(function (p, i) {
    var lead = i === 0 || (i === P.length - 1 && (P.length - 1) % 2 === 1);
    var row = Math.floor((i - 1) / 2), first = (i - 1) % 2 === 0;
    var size = lead ? 'is-lead' : ((row % 2 === 0) === first ? 'is-big' : 'is-small');
    return '<li class="tile ' + size + '" data-tag="' + p.tag + '">' +
      '<a class="tile__link" href="work/' + p.id + '.html">' +
        '<div class="tile__frame" style="background:' + p.ground + '">' + photo(p, SIZES[size], i === 0) + ' alt=""></div>' +
        '<div class="tile__meta">' +
          '<span class="tile__title">' + esc(p.title) + '</span>' +
          '<span class="tile__open" aria-hidden="true">View case →</span>' +
          '<span class="tile__disc"><span class="tile__no">' + pad(i + 1) + '</span>' + esc(p.discipline) + ' · ' + p.year + '</span>' +
        '</div>' +
      '</a></li>';
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

  // Services and how a project runs
  $('[data-services]').innerHTML = S.services.map(function (s, i) {
    return '<li><div class="no">' + pad(i + 1) + '</div><h3>' + esc(s.name) + '</h3><p>' + esc(s.detail) + '</p><span class="time">' + esc(s.from) + '</span></li>';
  }).join('');
  $('[data-steps]').innerHTML = S.steps.map(function (s) {
    return '<li><span class="when">' + esc(s.when) + '</span><strong>' + esc(s.name) + '</strong><p>' + esc(s.text) + '</p></li>';
  }).join('');
})();
