/*
  Smooth scroll: eases the page toward each scroll target instead of jumping,
  in the spirit of Lenis, with no dependency.

  - Mouse wheel and trackpad: deltas add to a target; the page glides there
    (exponential ease, frame-rate independent, ~0.6s to settle).
  - Keyboard: arrows, Page Up/Down, Space, Home and End use the same glide.
  - Same-page links (#work, #services, #contact, index.html#...): glide to the
    section, leaving room for the fixed nav (CSS scroll-padding-top).
  - Native scrolling is left alone for touch screens (they already have momentum),
    for visitors who prefer reduced motion, for ctrl+wheel zoom, horizontal wheels,
    inner scroll areas, form fields and the skip link. Dragging the scrollbar
    stays native and the glide picks up from wherever it ends.
*/
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (reduce.matches || !fine.matches || !window.requestAnimationFrame) return;

  var root = document.documentElement;
  var EASE = 0.085;          // share of the remaining distance covered per 60Hz frame
  var current = window.scrollY, target = current, animating = false, last = 0;

  root.classList.add('has-smooth-scroll');   // CSS turns off native smooth behaviour so scrollTo is immediate

  function maxScroll() { return Math.max(0, root.scrollHeight - window.innerHeight); }
  function clamp(v) { return Math.min(maxScroll(), Math.max(0, v)); }
  function sync() { current = target = window.scrollY; }

  function tick(now) {
    var dt = last ? Math.min(64, now - last) : 16.7;
    last = now;
    var k = 1 - Math.pow(1 - EASE, dt / 16.7);
    target = clamp(target);
    current += (target - current) * k;
    if (Math.abs(target - current) < 0.5) { current = target; animating = false; }
    window.scrollTo(0, current);
    if (animating) requestAnimationFrame(tick);
  }
  function glideTo(y) {
    if (!animating) sync();
    target = clamp(y);
    if (!animating) { animating = true; last = 0; requestAnimationFrame(tick); }
  }
  function glideBy(d) { glideTo((animating ? target : window.scrollY) + d); }

  // An element between the pointer and the page that can scroll on its own keeps native scrolling
  function insideScroller(el) {
    if (!(el instanceof Element)) return false;
    for (; el && el !== document.body && el !== root; el = el.parentElement) {
      var o = getComputedStyle(el).overflowY;
      if ((o === 'auto' || o === 'scroll') && el.scrollHeight > el.clientHeight + 1) return true;
    }
    return false;
  }

  window.addEventListener('wheel', function (e) {
    if (e.defaultPrevented || e.ctrlKey) return;                 // ctrl+wheel is browser zoom
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;         // horizontal gestures
    if (insideScroller(e.target)) return;
    e.preventDefault();
    var unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
    glideBy(e.deltaY * unit);
  }, { passive: false });

  // Native scrolls we did not start (scrollbar drag, find-in-page, focus) reset the glide
  window.addEventListener('scroll', function () { if (!animating) sync(); }, { passive: true });
  window.addEventListener('mousedown', function (e) {
    if (animating && e.clientX >= root.clientWidth) { animating = false; sync(); }   // grabbing the scrollbar
  });

  window.addEventListener('keydown', function (e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    var t = e.target, tag = t.tagName;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag) || t.isContentEditable || insideScroller(t)) return;
    var h = window.innerHeight, d = null;
    switch (e.key) {
      case 'ArrowDown': d = 140; break;
      case 'ArrowUp': d = -140; break;
      case 'PageDown': d = h * 0.85; break;
      case 'PageUp': d = -h * 0.85; break;
      case ' ': if (tag === 'BUTTON' || tag === 'A') return; d = (e.shiftKey ? -1 : 1) * h * 0.85; break;
      case 'Home': glideTo(0); e.preventDefault(); return;
      case 'End': glideTo(maxScroll()); e.preventDefault(); return;
    }
    if (d === null) return;
    e.preventDefault();
    glideBy(d);
  });

  function samePage(url) {
    var clean = function (p) { return p.replace(/index\.html$/, ''); };
    return url.origin === location.origin && clean(url.pathname) === clean(location.pathname);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || a.classList.contains('skip')) return;
    var url = new URL(a.href, location.href);
    if (!url.hash || !samePage(url)) return;
    var el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!el) return;
    e.preventDefault();
    var pad = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
    var y = el.getBoundingClientRect().top + window.scrollY - (el.getBoundingClientRect().top + window.scrollY > 0 ? pad : 0);
    history.pushState(null, '', url.hash);
    glideTo(y);
  });

  window.addEventListener('resize', function () { if (!animating) sync(); });
})();
