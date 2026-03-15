(function () {
  'use strict';

  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      mainNav.classList.toggle('is-open', !expanded);
    });
  }

  // Optional: close mobile nav when a link is clicked (single-page)
  var navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 700px)').matches && mainNav) {
        mainNav.classList.remove('is-open');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
