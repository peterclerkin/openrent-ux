// Sticky Header Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
  
    navbarToggler.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
  
  
  