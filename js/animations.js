// const isMobile = window.innerWidth < 768

// if (isMobile) {
//   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
// }

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------
// HERO SPLIT TEXT ANIMATION
// ----------------------------------

const heroHeading = document.querySelector(".hero-heading");


gsap.from(".hero-heading", {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  delay: 0.5,
  duration: 1,
});

gsap.from(".hero-buttons button", {
  y: 30,
  opacity: 0,
  delay: 0.7,
  stagger: 0.2,
});

// BACKGROUND GLOW BALL PARALLAX

gsap.to(".glow-1", {
  y: -100,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
});

gsap.to(".glow-2", {
  y: 150,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
});

gsap.to(".glow-3", {
  y: -80,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5,
  },
});









// testimonial animation

gsap.from(".testimonial-card", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".testimonials-section",
    start: "top 80%",
  },
});



// ── HORIZONTAL LINE SCROLL ANIMATION ──────────────────
(function () {
  const section = document.getElementById('process-flow');
  if (!section) return;

  const fill  = section.querySelector('.process-line-fill');
  const items = section.querySelectorAll('.process-item');
  const icons = section.querySelectorAll('.process-icon');

  if (!fill) return;

  // Initial hidden state for items
  items.forEach(item => {
    item.style.opacity    = '0';
    item.style.transform  = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  function onScroll() {
    const rect = section.getBoundingClientRect();
    const wh   = window.innerHeight;

    const start    = wh * 0.6;
    const end      = wh * -0.2;
    const progress = Math.min(1, Math.max(0,
      (start - rect.top) / (start - end)
    ));

    if (window.innerWidth <= 900) {
      const grid = section.querySelector('.process-grid');
      if (grid) grid.style.setProperty('--line-progress', (progress * 100) + '%');
      fill.style.width = (progress * 100) + '%';
    } else {
      fill.style.width = (progress * 100) + '%';
    }

    icons.forEach((icon, i) => {
      const threshold = (i + 1) / (icons.length + 1);
      if (progress >= threshold) {
        icon.classList.add('active');
      }
    });

    items.forEach(item => {
      if (item.getBoundingClientRect().top < wh * 0.88) {
        item.style.opacity   = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


gsap.from(".hero-buttons a", {
  y: 30,
  opacity: 0,
  delay: 0.7,
  stagger: 0.2,
});