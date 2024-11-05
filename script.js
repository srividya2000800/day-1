window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth > 768) { // Only apply on desktop screens
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });