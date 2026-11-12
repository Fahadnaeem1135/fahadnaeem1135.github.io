// Loads every file listed in index.html (data-section="...") and puts it in place.
// Sections appear one by one as they arrive (top first), so the page shows quickly.
// Also: loads the YouTube video only when you scroll near it, pauses animations
// in sections you can't see (keeps the site smooth) and runs the light/dark mode button.
// You normally never need to edit this file.
(function () {
  var slots = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var texts = new Array(slots.length);
  var shown = 0;

  // show sections in order, each one as soon as it (and every one above it) has arrived
  function showReady() {
    while (shown < slots.length && texts[shown] !== undefined) {
      slots[shown].outerHTML = texts[shown];
      shown++;
    }
    syncThemeButtons();
    if (shown === slots.length) finish();
  }

  slots.forEach(function (slot, i) {
    var url = slot.getAttribute('data-section');
    fetch(url)
      .then(function (r) { return r.ok ? r.text() : '<!-- could not load ' + url + ' -->'; })
      .catch(function () { return ''; })
      .then(function (html) { texts[i] = html; showReady(); });
  });

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
    var mode = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', mode);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = mode === 'light' ? '#f5f7f2' : '#000000';
    try { localStorage.setItem('theme', mode); } catch (err) {}
    syncThemeButtons();
  });

  // runs once every section is on the page
  function finish() {
    if (location.hash) {
      var target = document.querySelector(location.hash);
      if (target) target.scrollIntoView();
    }

    var hasIO = 'IntersectionObserver' in window;

    // YouTube video: only load the player when the visitor gets close to it
    var vids = document.querySelectorAll('iframe[data-src]');
    if (hasIO) {
      var vio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.src = e.target.getAttribute('data-src');
          e.target.removeAttribute('data-src');
          vio.unobserve(e.target);
        });
      }, { rootMargin: '400px 0px' });
      vids.forEach(function (v) { vio.observe(v); });
    } else {
      vids.forEach(function (v) { v.src = v.getAttribute('data-src'); });
    }

    // pause animations of sections that are off-screen
    if (hasIO) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { e.target.classList.toggle('is-offscreen', !e.isIntersecting); });
      }, { rootMargin: '300px 0px' });
      document.querySelectorAll('section, footer').forEach(function (el) { io.observe(el); });
    }
  }
})();
