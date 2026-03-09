// -----------------------------
// LENIS SMOOTH SCROLL ENGINE
// -----------------------------
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


// -----------------------------
// NAVBAR SCROLL EFFECT
// -----------------------------
const navbar = document.querySelector(".navbar");

lenis.on("scroll", (e) => {
  if (e.scroll > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// -----------------------------
// COUNTER (Trigger on Scroll)
// -----------------------------
const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    counter.innerText = Math.floor(progress * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// SCROLL PROGRESS BAR
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.querySelector(".scroll-progress").style.width = progress + "%";
});

// MAGNETIC BUTTON EFFECT
const magneticButtons = document.querySelectorAll(".btn-primary, .btn-outline");

magneticButtons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });
});

// ── service card
//  ──
const services = [
  {
    tag: "Hardware",
    title: "Premium Hardware Supply",
    image: "assets/Supply.png", 
    short:
      "Authorised procurement from global giants like Dell, HP, and Lenovo with full enterprise warranty.",
    desc: "We source and supply enterprise-grade hardware from globally authorised distributors. Every device is GEM-registered, warranty-backed, and delivered with full OEM support.",
    features: [
      "Authorised Dell, HP, Lenovo distributor",
      "GEM registered supplier",
      "Full enterprise warranty coverage",
      "Pan-India delivery & logistics",
      "Bulk & single-unit orders",
    ],
    shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="120" cy="60" rx="60" ry="80" fill="none" stroke="rgba(180,150,80,0.6)" stroke-width="2" transform="rotate(-30 120 60)"/>
        <ellipse cx="120" cy="60" rx="40" ry="55" fill="rgba(180,150,80,0.15)" transform="rotate(-30 120 60)"/>
        <circle cx="100" cy="80" r="30" fill="rgba(180,150,80,0.1)" stroke="rgba(180,150,80,0.4)" stroke-width="1.5"/>
      </svg>`,
  },
  {
    tag: "Surveillance",
    title: "CCTV & Surveillance Systems",
    image: "assets/CCTV.png", 
    short:
      "End-to-end CCTV installation for offices, warehouses and campuses. 24/7 monitoring support.",
    desc: "Complete IP and analog CCTV solutions designed for enterprise environments. From site survey to installation and AMC, we handle it all with certified technicians.",
    features: [
      "IP & HD analog camera systems",
      "Site survey & custom design",
      "Remote monitoring setup",
      "Annual maintenance contracts",
      "Integration with access control",
    ],
    shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="30" width="100" height="120" rx="20" fill="rgba(100,200,180,0.1)" stroke="rgba(100,200,180,0.4)" stroke-width="2" transform="rotate(15 110 90)"/>
        <circle cx="110" cy="90" r="35" fill="rgba(100,200,180,0.08)" stroke="rgba(100,200,180,0.3)" stroke-width="1.5"/>
      </svg>`,
  },
  {
    tag: "Networking",
    title: "Enterprise Networking",
    image: "assets/Enterprise.png",
    short:
      "Structured cabling, Wi-Fi deployments and firewall setup for seamless connectivity.",
    desc: "We design and deploy robust network infrastructure — from structured LAN/WAN cabling to enterprise Wi-Fi, routers, switches, and next-gen firewalls.",
    features: [
      "Structured LAN/WAN cabling",
      "Cisco & Fortinet certified",
      "Wi-Fi site survey & deployment",
      "Firewall & VPN configuration",
      "Network monitoring & support",
    ],
    shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,20 180,80 160,160 40,160 20,80" fill="rgba(120,180,255,0.08)" stroke="rgba(120,180,255,0.4)" stroke-width="2"/>
        <circle cx="100" cy="100" r="40" fill="rgba(120,180,255,0.07)" stroke="rgba(120,180,255,0.25)" stroke-width="1.5"/>
      </svg>`,
  },
  {
    tag: "Rentals",
    title: "IT Equipment Rentals",
    image: "assets/IT.png",
    short:
      "Short and long-term laptop, desktop and AV equipment rentals for events and enterprises.",
    desc: "Flexible rental plans for laptops, desktops, projectors, and complete IT setups. Ideal for events, short-term projects, and scaling teams without CAPEX.",
    features: [
      "Daily, weekly & monthly plans",
      "Laptops, desktops & AV gear",
      "Pre-configured on request",
      "On-site delivery & support",
      "Insurance & replacement cover",
    ],
    shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(200,160,80,0.35)" stroke-width="2"/>
        <circle cx="100" cy="100" r="45" fill="rgba(200,160,80,0.08)" stroke="rgba(200,160,80,0.25)" stroke-width="1.5"/>
        <circle cx="100" cy="100" r="20" fill="rgba(200,160,80,0.12)"/>
      </svg>`,
  },
];

// ── Ticker ──
const tickerBrands = [
  "CISCO",
  "DELL",
  "HP",
  "LENOVO",
  "APC",
  "DP PLUS",
  "GEM REGISTERED",
  "PAN-INDIA CLIENT",
];
const track = document.getElementById("ticker");
const items = [...tickerBrands, ...tickerBrands]
  .map((b) => {
    return `<span class="ticker-item"><span class="ticker-dot"></span>${b}</span>`;
  })
  .join("");
track.innerHTML = items;

// ── Carousel state ──
let current = 0;
const total = services.length;

const nextBtn = document.querySelector(".right-btn")
const prevBtn = document.querySelector(".left-btn")

function clickAnim(btn){
  gsap.fromTo(
    btn,
    { scale: 1 },
    { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.out" }
  )
}

nextBtn.addEventListener("click", () => {

  clickAnim(nextBtn)

  current = (current + 1) % total
  renderCarousel()
  renderDots()

})

prevBtn.addEventListener("click", () => {

  clickAnim(prevBtn)

  current = (current - 1 + total) % total
  renderCarousel()
  renderDots()

})

function getRelativeIndex(i) {
  // returns position relative to current: -1, 0, 1, others hidden
  let diff = i - current;
  if (diff < -Math.floor(total / 2)) diff += total;
  if (diff > Math.floor(total / 2)) diff -= total;
  return diff;
}

function renderCarousel() {
  const track = document.getElementById("cardsTrack");
  track.innerHTML = "";

  // Show current -1, current, current +1
  const indices = [
    (current - 1 + total) % total,
    current,
    (current + 1) % total,
  ];

  indices.forEach((idx, pos) => {
    const s = services[idx];
    const isActive = pos === 1;

    const card = document.createElement("div");
    card.className = `service-card ${isActive ? "active" : "side"}`;
   card.innerHTML = `

    <img src="${s.image}" class="card-image">

<div class="card-bg"></div>

<div class="card-shape">${s.shape}</div>

<div class="card-content">

<div class="card-title">${s.title}</div>


<button class="card-btn">Explore Solution</button>

</div>
`



   card.addEventListener("click", () => {

  openModal(idx)

});

    track.appendChild(card);
  });
}

function renderDots() {
  const dotsEl = document.getElementById("dots");
  dotsEl.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const d = document.createElement("div");
    d.className = `dot ${i === current ? "active" : ""}`;
    d.addEventListener("click", () => {
      current = i;
      renderCarousel();
      renderDots();
    });
    dotsEl.appendChild(d);
  }
}

// Auto-rotate
setInterval(() => {
  current = (current + 1) % total;
  renderCarousel();
  renderDots();
}, 3500);

// ── Modal ──
function openModal(idx) {
  const s = services[idx];
  document.getElementById("modalTag").textContent = s.tag;
  document.getElementById("modalTitle").textContent = s.title;
  document.getElementById("modalShape").innerHTML = s.shape
  document.getElementById("modalDesc").textContent = s.desc;
  const ul = document.getElementById("modalFeatures");
  ul.innerHTML = s.features.map((f) => `<li>${f}</li>`).join("");
const overlay = document.getElementById("modalOverlay")
const box = document.getElementById("modalBox")

overlay.classList.add("open")

gsap.fromTo(
  box,
  {scale:0.8, opacity:0, y:60},
  {scale:1, opacity:1, y:0, duration:0.5, ease:"power3.out"}
);
  document.body.style.overflow = "hidden";
}

function closeModal(){

const overlay = document.getElementById("modalOverlay")
const box = document.getElementById("modalBox")

gsap.to(box,{
scale:0.8,
opacity:0,
y:40,
duration:0.3,
onComplete:()=>{
overlay.classList.remove("open")
}
})

document.body.style.overflow = "";

}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

// Init
renderCarousel();
renderDots();

// cta call
document.querySelector(".modal-cta").addEventListener("click", () => {
  window.location.href = "tel:+918087051208";
});

document.querySelector(".modal-secondary").addEventListener("click", () => {
  window.open("https://wa.me/918087051208", "_blank");
});
ScrollTrigger.refresh();



// HAMBURGER MOBILE NAV
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = 
    mobileNav.classList.contains('open') ? 'hidden' : '';
});

function closeMobileNav() {
  hamburger.classList.remove('open');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

// TOUCH SWIPE — mobile
const cardsTrack = document.getElementById('cardsTrack');
let touchStartX = 0;

cardsTrack.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

cardsTrack.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      current = (current + 1) % total;
    } else {
      current = (current - 1 + total) % total;
    }
    renderCarousel();
    renderDots();
  }
});


// READ MORE TOGGLE
function toggleReadMore(btn) {
  const p = btn.closest('.testimonial-text');
  const short = p.querySelector('.t-short');
  const full  = p.querySelector('.t-full');
  const isExpanded = full.style.display !== 'none';
  if (isExpanded) {
    full.style.display  = 'none';
    short.style.display = '-webkit-box';
    btn.textContent     = 'Read More ↓';
  } else {
    short.style.display = 'none';
    full.style.display  = 'inline';
    btn.textContent     = 'Read Less ↑';
  }
}

document.getElementById("navCallBtn").addEventListener("click", () => {
  window.location.href = "tel:+918087051208";
});