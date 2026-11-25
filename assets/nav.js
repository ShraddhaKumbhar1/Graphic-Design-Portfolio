/* Fixed nav: on pages where it starts clear (data-transparent), it turns solid ink
   as soon as the page scrolls, so the links stay readable over any section. */
(function () {
  var nav = document.querySelector('[data-nav]');
  if (!nav || !nav.hasAttribute('data-transparent')) return;
  var update = function () { nav.classList.toggle('is-solid', window.scrollY > 24); };
  update();
  window.addEventListener('scroll', update, { passive: true });
})();
