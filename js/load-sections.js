// Loads every file listed in index.html (data-section="...") and puts it in place.
// Also: pauses animations in sections you can't see (keeps the site smooth)
// and runs the light/dark mode button.
// You normally never need to edit this file.
(async function () {
  var slots = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var htmls = await Promise.all(slots.map(function (slot) {
    return fetch(slot.getAttribute('data-section'))
      .then(function (r) { return r.ok ? r.text() : '<!-- could not load ' + slot.getAttribute('data-section') + ' -->'; })
      .catch(function () { return ''; });
  }));
  slots.forEach(function (slot, i) { slot.outerHTML = htmls[i]; });
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }

  // pause animations of sections that are off-screen
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle('is-offscreen', !e.isIntersecting); });
    }, { rootMargin: '300px 0px' });
    document.querySelectorAll('section, footer').forEach(function (el) { io.observe(el); });
  }

  // light / dark mode button
  function syncThemeButtons() {
    var light = document.documentElement.getAttribute('data-theme') === 'light';
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.setAttribute('aria-pressed', light ? 'true' : 'false');
      b.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      b.title = light ? 'Dark mode' : 'Light mode';
    });
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.theme-toggle');
    if (!btn) return;
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = next === 'light' ? '#f5f7f2' : '#000000';
    try { localStorage.setItem('theme', next); } catch (err) {}
    syncThemeButtons();
  });
  syncThemeButtons();
})();
