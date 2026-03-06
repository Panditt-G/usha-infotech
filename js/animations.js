// const isMobile = window.innerWidth < 768

// if (isMobile) {
//   ScrollTrigger.getAll().forEach(trigger => trigger.kill())
// }

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------
// HERO SPLIT TEXT ANIMATION
// ----------------------------------

const heroHeading = document.querySelector(".hero-heading");

const words = heroHeading.querySelectorAll("br, span, text");

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

// how er work animation

gsap.fromTo(
  ".process-line",
  { scaleX: 0 },
  {
    scaleX: 1,
    ease: "none",
    duration: 1.5,
    transformOrigin: "left center",
    scrollTrigger: {
      trigger: ".process-section",
      start: "top 40%",
      end: "bottom 100%",
      scrub: true
    }
  }
);

// gsap.from(".process-item", {
//   y:40,
//   opacity:0,
//   stagger:0.3,
//   duration:1,
//   ease:"power2.out",
//   scrollTrigger:{
//     trigger:".process-section",
//     start:"top 80%"
//   }
// })

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".process-section",
    start: "top 130%",
    end: "bottom 60%",
    scrub: 1,
  },
});

tl.to(".process-line::after", {
  scaleX: 1,
  duration: 1,
});

tl.from(".process-item", {
  y: 40,
  opacity: 0.6,
  stagger: 0.3,
  duration: 1,
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

