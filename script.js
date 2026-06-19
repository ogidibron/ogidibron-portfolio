/* ═══════════════════════════════════════════════════════════
   Gideon Tetteh Luotey — Portfolio Script
   ═══════════════════════════════════════════════════════════ */

/* ─── QUOTES POOL ────────────────────────────────────────── */
const QUOTES = [
  { text: "The greatest tragedy in this world is never trying.",                                          attr: "— Unknown" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.",     attr: "— Ralph Waldo Emerson" },
  { text: "Talent is a pursued interest. Anything that you're willing to practice, you can do.",         attr: "— Bob Ross" },
  { text: "A person who never made a mistake never tried anything new.",                                  attr: "— Albert Einstein" },
  { text: "The only way to do great work is to love what you do.",                                        attr: "— Steve Jobs" },
  { text: "It does not matter how slowly you go as long as you do not stop.",                             attr: "— Confucius" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",       attr: "— Winston Churchill" },
  { text: "The future belongs to those who believe in the beauty of their dreams.",                       attr: "— Eleanor Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.",                                          attr: "— Albert Einstein" },
  { text: "You miss 100% of the shots you don't take.",                                                   attr: "— Wayne Gretzky" },
  { text: "The secret of getting ahead is getting started.",                                              attr: "— Mark Twain" },
  { text: "Don't watch the clock; do what it does. Keep going.",                                          attr: "— Sam Levenson" },
  { text: "Whether you think you can or you think you can't, you're right.",                              attr: "— Henry Ford" },
  { text: "Build your dreams, or someone else will hire you to build theirs.",                            attr: "— Farrah Gray" },
  { text: "Hard work beats talent when talent doesn't work hard.",                                        attr: "— Tim Notke" },
  { text: "The difference between ordinary and extraordinary is that little extra.",                      attr: "— Jimmy Johnson" },
];

/* ─── QUOTE: PICK A DIFFERENT ONE EACH VISIT ─────────────── */
function pickQuote() {
  const last = parseInt(localStorage.getItem('gtl_q') ?? '-1', 10);
  let idx;
  do {
    idx = Math.floor(Math.random() * QUOTES.length);
  } while (idx === last && QUOTES.length > 1);
  localStorage.setItem('gtl_q', String(idx));
  return QUOTES[idx];
}

/* ─── SPLASH SCREEN ──────────────────────────────────────── */
function dismissSplash() {
  const sp = document.getElementById('splash');
  if (!sp || sp.classList.contains('out')) return;
  sp.classList.add('out');
  // Remove from DOM after transition so it doesn't interfere
  setTimeout(() => sp.remove(), 1050);
}

(function initSplash() {
  const q = pickQuote();
  document.getElementById('splash-text').textContent = q.text;
  document.getElementById('splash-attr').textContent = q.attr;

  // Auto-dismiss after 4 s
  setTimeout(dismissSplash, 4000);

  // Any keypress also dismisses
  document.addEventListener('keydown', dismissSplash, { once: true });

  // Click anywhere on splash to dismiss
  document.getElementById('splash').addEventListener('click', dismissSplash);
})();

/* ─── NAV: SOLID ON SCROLL ───────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav?.classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

/* ─── MOBILE NAV ─────────────────────────────────────────── */
function toggleMobileNav(btn) {
  const mobileNav = document.getElementById('nav-mobile');
  if (!btn || !mobileNav) return;

  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileNav() {
  const btn = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('nav-mobile');
  if (!btn || !mobileNav) return;

  btn.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

/* Close mobile nav on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileNav();
});

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .service-card, .blog-card, .timeline-item').forEach(el => revealObserver.observe(el));

/* ─── SKILLS FILTER ──────────────────────────────────────── */
function showSkills(category) {
  document.querySelectorAll('.skill-tab').forEach(tab => {
    const isActive = tab.dataset.category === category;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('.skill-card').forEach(card => {
    const shouldShow = category === 'all' || card.dataset.category === category;
    card.style.display = shouldShow ? 'block' : 'none';
  });
}

/* ─── CONTACT FORM ───────────────────────────────────────── */
function setFormStatus(form, message, type) {
  const status = form.querySelector('.form-status');
  if (!status) return;

  status.textContent = message;
  status.dataset.state = type;
}

function setFieldError(field, hasError) {
  if (!field) return;
  field.setAttribute('aria-invalid', String(hasError));
}

function handleContactForm(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  const fields = {
    name: form.querySelector('#f-name'),
    email: form.querySelector('#f-email'),
    message: form.querySelector('#f-message')
  };

  setFormStatus(form, '', '');
  Object.values(fields).forEach(field => setFieldError(field, false));

  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const message = fields.message.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = [];

  if (!name) {
    errors.push(fields.name);
    setFieldError(fields.name, true);
  }
  if (!email) {
    errors.push(fields.email);
    setFieldError(fields.email, true);
  } else if (!emailRegex.test(email)) {
    errors.push(fields.email);
    setFieldError(fields.email, true);
  }
  if (!message) {
    errors.push(fields.message);
    setFieldError(fields.message, true);
  }

  if (errors.length) {
    setFormStatus(form, 'Please complete the highlighted fields before sending.', 'error');
    errors[0].focus();
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Sending...';
  setFormStatus(form, 'Sending your message...', 'loading');

  window.setTimeout(() => {
    btn.disabled = false;
    btn.textContent = originalText;
    setFormStatus(form, 'Message sent successfully. Thank you for reaching out!', 'success');
    form.reset();
  }, 1200);
}

/* ─── TECHIE BACKGROUND ────────────────────────────────────── */
function initTechBackground() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const gridSize = 50;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)';
  const dataColor = isDark ? 'rgba(16, 185, 129, 0.8)' : 'rgba(99, 102, 241, 0.7)';

  // Data flow particles
  const dataFlows = Array(30).fill().map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    speed: Math.random() * 1.5 + 0.5,
    char: Math.random() > 0.5 ? '1' : '0',
    size: Math.random() * 4 + 10
  }));

  function drawGrid() {
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    drawGrid();
    
    dataFlows.forEach(flow => {
      ctx.fillStyle = dataColor;
      ctx.font = `${flow.size}px monospace`;
      ctx.fillText(flow.char, flow.x, flow.y);
      flow.x += flow.speed;
      if (flow.x > width) {
        flow.x = 0;
        flow.y = Math.random() * height;
      }
    });
    
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
}

/* ─── ROLE CAROUSEL ─────────────────────────────────────────── */
const roles = [
  "Full-Stack Developer",
  "Data Scientist",
  "AI Engineer"
];

function initRoleCarousel() {
  const carousel = document.getElementById('role-carousel');
  if (!carousel) return;
  
  let currentRole = 0;
  
  function typeWriter(text, i = 0) {
    if (i < text.length) {
      carousel.textContent = text.substring(0, i + 1);
      setTimeout(() => typeWriter(text, i + 1), 100);
    } else {
      setTimeout(eraseText, 2000);
    }
  }
  
  function eraseText() {
    const text = carousel.textContent;
    if (text.length > 0) {
      carousel.textContent = text.substring(0, text.length - 1);
      setTimeout(eraseText, 50);
    } else {
      currentRole = (currentRole + 1) % roles.length;
      setTimeout(() => typeWriter(roles[currentRole]), 500);
    }
  }
  
  typeWriter(roles[0]);
}

/* ─── ACTIVE NAV LINK ON SCROLL ──────────────────────────── */
const sectionEls = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-list a');

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      navLinkEls.forEach(a => {
        a.removeAttribute('aria-current');
        if (a.getAttribute('href') === '#' + en.target.id) {
          a.setAttribute('aria-current', 'page');
        }
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sectionEls.forEach(s => activeObserver.observe(s));

/* ─── THEME TOGGLE ─────────────────────────────────────────── */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  const icon = document.querySelector('.theme-icon');
  if (icon) {
    icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  }
}

// Load saved theme
(function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = document.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    }
  }
})();

/* ─── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTechBackground();
  initRoleCarousel();

  // Dynamic copyright year
  const yearEl = document.getElementById('ft-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const themeToggle = document.querySelector('.theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNavLinks = document.querySelectorAll('#nav-mobile a');
  const skillTabs = document.querySelectorAll('.skill-tab');
  const contactForm = document.querySelector('.contact-form');
  const splashSkip = document.querySelector('.splash-skip');

  themeToggle?.addEventListener('click', toggleTheme);

  navToggle?.addEventListener('click', () => {
    toggleMobileNav(navToggle);
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      showSkills(tab.dataset.category);
    });
  });

  contactForm?.addEventListener('submit', handleContactForm);

  // Splash skip button
  splashSkip?.addEventListener('click', dismissSplash);
});
