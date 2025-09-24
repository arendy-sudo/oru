// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Add smooth scrolling behavior
  navLinks.forEach(link => {

    // navegación del menu

    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Solo aplica smooth scroll si es un enlace interno (comienza con #)
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);

        if (targetSection) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      // Si es un archivo externo como servicios.html, no hacemos nada. El navegador redirige solo.
    });
    //


  });

  // Contact button functionality
  const contactBtn = document.querySelector('.contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function () {
      // Scroll to top or show contact form
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // You can add more contact functionality here
      console.log('Contact button clicked');
    });
  }

  // Add scroll effect to header
  let lastScrollTop = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });

  // Add transition to header
  header.style.transition = 'transform 0.3s ease-in-out';

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Reset first section (hero) to be visible immediately
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
  }
});

// Handle window resize
window.addEventListener('resize', function () {
  // Recalculate any position-dependent elements if needed
  console.log('Window resized');
});

// Add loading animation
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});


// boton para subir 

const footerIcon = document.querySelector('.footer-icon a');
if (footerIcon) {
  footerIcon.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
