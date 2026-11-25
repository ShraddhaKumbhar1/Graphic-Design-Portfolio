/*
  Hero motion: a quiet, p5-style flow field drawn over the hero gradient.

  A few hundred particles drift through a slowly changing Perlin-noise field,
  mostly left to right like light moving through the colour. Each leaves a short,
  faint trail that fades in and out over its life. The gradient image itself
  stays still: no parallax.

  Restraint rules: pale blue-white only (cobalt stays reserved for the button),
  1px lines at 12-26% peak opacity, masked away from the nav and the text.
  Movement is time-based, so it drifts at the same pace on 60Hz and 165Hz screens.
  Pauses when the hero is off-screen or the tab is hidden. Does nothing at all
  when the visitor prefers reduced motion.
*/
(function () {
  var hero = document.querySelector('.hero');
  var img = hero && hero.querySelector('.hero__img');
  if (!hero || !img || !window.requestAnimationFrame) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ---------- Perlin noise (improved Perlin, 3D) ----------
  var perm = new Uint8Array(512);
  (function seed() {
    var p = [], i, j, t, s = 20261125;
    for (i = 0; i < 256; i++) p[i] = i;
    for (i = 255; i > 0; i--) {
      s = (s * 1664525 + 1013904223) >>> 0;
      j = s % (i + 1); t = p[i]; p[i] = p[j]; p[j] = t;
    }
    for (i = 0; i < 512; i++) perm[i] = p[i & 255];
  })();
  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function lerp(a, b, t) { return a + t * (b - a); }
  function grad(h, x, y, z) {
    h &= 15;
    var u = h < 8 ? x : y, v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
    return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
  }
  function noise(x, y, z) {
    var X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
    x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
    var u = fade(x), v = fade(y), w = fade(z);
    var A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
    var B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
    return lerp(
      lerp(lerp(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
           lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u), v),
      lerp(lerp(grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1), u),
           lerp(grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1), u), v),
      w);
  }

  // ---------- Canvas ----------
  var canvas = document.createElement('canvas');
  canvas.className = 'hero__motion';
  canvas.setAttribute('aria-hidden', 'true');
  img.insertAdjacentElement('afterend', canvas);
  var ctx = canvas.getContext('2d');

  var W = 0, H = 0, particles = [];
  var TRAIL = 32;          // points kept per trail
  var STEP = 2.2;          // px between recorded points, so trails are ~70px on any refresh rate
  var running = false, visible = true, raf = 0, t0 = 0, last = 0;

  function spawn(p) {
    p.x = Math.random() * W;
    p.y = Math.random() * H;
    p.trail = [p.x, p.y];
    p.life = 0;
    p.max = 4 + Math.random() * 6;           // seconds
    p.speed = 22 + Math.random() * 34;       // px per second
    p.alpha = 0.12 + Math.random() * 0.14;   // peak opacity
    p.width = Math.random() < 0.2 ? 1.3 : 1;
    return p;
  }

  function resize() {
    var r = hero.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var count = Math.round(Math.min(420, Math.max(120, (W * H) / 3600)));
    particles = [];
    for (var i = 0; i < count; i++) {
      var p = spawn({});
      p.life = Math.random() * p.max;        // stagger so they do not all fade in together
      particles.push(p);
    }
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    var dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
    var t = (now - t0) * 0.00005;            // field evolves very slowly
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      // Angle mostly within ±60° of "east": a wind that wanders but keeps its direction
      var a = noise(p.x * 0.0018, p.y * 0.0026, t) * 2.1;
      p.x += Math.cos(a) * p.speed * dt;
      p.y += Math.sin(a) * p.speed * 0.55 * dt;
      var n = p.trail.length;
      var dx = p.x - p.trail[n - 2], dy = p.y - p.trail[n - 1];
      if (dx * dx + dy * dy >= STEP * STEP) {
        p.trail.push(p.x, p.y);
        if (p.trail.length > TRAIL * 2) p.trail.splice(0, 2);
      }
      p.life += dt;

      if (p.life > p.max || p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) { spawn(p); continue; }
      if (p.trail.length < 4) continue;

      var env = Math.sin(Math.PI * p.life / p.max);   // fade in, then out
      ctx.lineWidth = p.width;
      ctx.strokeStyle = 'rgba(214, 226, 255, ' + (p.alpha * env).toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(p.trail[0], p.trail[1]);
      for (var k = 2; k < p.trail.length; k += 2) ctx.lineTo(p.trail[k], p.trail[k + 1]);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  }

  // ---------- Lifecycle ----------
  function start() {
    if (running || reduce.matches || !visible || document.hidden) return;
    running = true;
    last = 0;
    t0 = t0 || performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(raf);
  }
  function enable() {
    resize();
    hero.classList.add('has-motion');
    requestAnimationFrame(function () { canvas.classList.add('is-on'); });
    start();
  }
  function disable() {
    stop();
    ctx.clearRect(0, 0, W, H);
    canvas.classList.remove('is-on');
    hero.classList.remove('has-motion');
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      visible ? start() : stop();
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });

  var resizeTimer = 0;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { if (!reduce.matches) resize(); }, 150);
  });

  var onReduce = function () { reduce.matches ? disable() : enable(); };
  if (reduce.addEventListener) reduce.addEventListener('change', onReduce);
  else if (reduce.addListener) reduce.addListener(onReduce);

  if (!reduce.matches) enable();
})();
