// Loads every file listed in index.html (data-section="...") and puts it in place.
// You normally never need to edit this file.
(async function () {
  var slots = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var htmls = await Promise.all(slots.map(function (slot) {
    return fetch(slot.getAttribute('data-section'), { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.text() : '<!-- could not load ' + slot.getAttribute('data-section') + ' -->'; })
      .catch(function () { return ''; });
  }));
  slots.forEach(function (slot, i) { slot.outerHTML = htmls[i]; });
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
})();
