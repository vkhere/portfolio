/**
 * main.js - Portfolio JavaScript
 * Vinay Kumar | Backup & Storage Administrator
 */

'use strict';

/* ══════════════════════════════════════════════════════════
   1. NAVBAR - scroll effect & hamburger
   ══════════════════════════════════════════════════════════ */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  highlightActiveNav();
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* ══════════════════════════════════════════════════════════
   2. ACTIVE NAV HIGHLIGHT - based on scroll position
   ══════════════════════════════════════════════════════════ */
function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.pageYOffset;

  sections.forEach(section => {
    const sectionTop    = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const id            = section.getAttribute('id');
    const link          = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (link) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.style.color = 'var(--accent)';
      } else {
        link.style.color = '';
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════
   3. TYPEWRITER EFFECT - hero title
   ══════════════════════════════════════════════════════════ */
const titles = [
  'Backup Administrator',
  'Storage Administrator',
  'IT Infrastructure Expert',
  'EMC Avamar Specialist',
  'Rubrik & Commvault Admin',
  'ITIL Certified Professional',
];

let   titleIndex  = 0;
let   charIndex   = 0;
let   isDeleting  = false;
const typedEl     = document.getElementById('typed-title');
const typeSpeed   = 80;
const deleteSpeed = 40;
const pauseTime   = 2000;

function typeWriter() {
  if (!typedEl) return;

  const currentTitle = titles[titleIndex];

  if (!isDeleting) {
    typedEl.textContent = currentTitle.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeWriter, pauseTime);
      return;
    }
    setTimeout(typeWriter, typeSpeed);
  } else {
    typedEl.textContent = currentTitle.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    setTimeout(typeWriter, deleteSpeed);
  }
}

// Start after hero animations load
setTimeout(typeWriter, 1000);

/* ══════════════════════════════════════════════════════════
   4. SCROLL ANIMATIONS - Intersection Observer
   ══════════════════════════════════════════════════════════ */
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Animate skill bars if inside
      entry.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
        const targetWidth = bar.dataset.width;
        setTimeout(() => {
          bar.style.width = targetWidth + '%';
          bar.classList.add('filled');
        }, i * 200);
      });
    }
  });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));

// Observe section cards for fade-in
const fadeTargets = document.querySelectorAll(
  '.cert-card, .project-card, .award-card, .skill-category, .edu-item'
);

fadeTargets.forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
  observer.observe(el);
});

// Override observer for general cards
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeTargets.forEach(el => cardObserver.observe(el));

/* ══════════════════════════════════════════════════════════
   5. SKILL BARS - trigger on first view
   ══════════════════════════════════════════════════════════ */
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = (bar.dataset.width || 0) + '%';
        }, i * 200 + 300);
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-category').forEach(cat => skillBarObserver.observe(cat));

/* ══════════════════════════════════════════════════════════
   6. CONTACT FORM - basic handler
   ══════════════════════════════════════════════════════════ */
const contactForm = document.getElementById('contact-form');
const formMsg     = document.getElementById('form-msg');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      showFormMsg('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showFormMsg('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate send (replace with actual backend / EmailJS / Formspree)
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.textContent  = 'Sending...';
    submitBtn.disabled     = true;

    setTimeout(() => {
      showFormMsg('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
      contactForm.reset();
      submitBtn.textContent = 'Send Message ✉';
      submitBtn.disabled    = false;
    }, 1500);
  });
}

function showFormMsg(msg, type) {
  if (!formMsg) return;
  formMsg.textContent = msg;
  formMsg.style.color = type === 'success' ? 'var(--accent-3)' : '#f87171';
  setTimeout(() => { formMsg.textContent = ''; }, 5000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ══════════════════════════════════════════════════════════
   7. SMOOTH SCROLL for all anchor links
   ══════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const top  = target.offsetTop - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ══════════════════════════════════════════════════════════
   8. SCROLL DOWN INDICATOR - fade out on scroll
   ══════════════════════════════════════════════════════════ */
const scrollDown = document.getElementById('scroll-down');
if (scrollDown) {
  window.addEventListener('scroll', () => {
    scrollDown.style.opacity = window.scrollY > 100 ? '0' : '1';
  });

  scrollDown.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ══════════════════════════════════════════════════════════
   9. PARTICLE BACKGROUND (subtle)
   ══════════════════════════════════════════════════════════ */
function createParticles() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(0, 212, 255, ${Math.random() * 0.4 + 0.1});
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: twinkle ${Math.random() * 4 + 3}s ease-in-out infinite ${Math.random() * 4}s;
      pointer-events: none;
    `;
    heroBg.appendChild(particle);
  }
}

createParticles();

/* ══════════════════════════════════════════════════════════
   10. COUNTER ANIMATION - hero stats
   ══════════════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 2000, suffix = '') {
  let start = 0;
  const step = target / (duration / 16);
  const isFloat = String(target).includes('.');

  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(interval);
    }
    el.textContent = isFloat
      ? start.toFixed(1) + suffix
      : Math.round(start) + suffix;
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stats = entry.target.querySelectorAll('.stat-num');
      stats.forEach(stat => {
        const raw    = stat.textContent.replace(/[^0-9.]/g, '');
        const suffix = stat.textContent.replace(/[0-9.]/g, '');
        const target = parseFloat(raw);
        animateCounter(stat, target, 1800, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

/* ══════════════════════════════════════════════════════════
   11. HAMBURGER ANIMATION (3 bars → X)
   ══════════════════════════════════════════════════════════ */
hamburger.addEventListener('click', () => {
  const spans = hamburger.querySelectorAll('span');
  if (hamburger.classList.contains('active')) {
    spans[0].style.transform    = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity      = '0';
    spans[2].style.transform    = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform    = '';
    spans[1].style.opacity      = '1';
    spans[2].style.transform    = '';
  }
});

/* ══════════════════════════════════════════════════════════
   12. COPY EMAIL ON CLICK
   ══════════════════════════════════════════════════════════ */
const emailLink = document.querySelector('a[href="mailto:vinayhereon@gmail.com"]');
if (emailLink) {
  emailLink.addEventListener('click', (e) => {
    // Let default mailto open, but also copy to clipboard
    navigator.clipboard?.writeText('vinayhereon@gmail.com').catch(() => {});
  });
}

console.log(
  '%c Vinay Kumar Portfolio 🚀 ',
  'background: #00d4ff; color: #000; font-weight: bold; font-size: 14px; padding: 6px 12px; border-radius: 4px;'
);
