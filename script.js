/* ═══════════════════════════════════════════════════════════
   Gideon Tetteh Luotey — Portfolio Script
   Refactored for readability and maintainability.
   ═══════════════════════════════════════════════════════════ */

/* ─── HELPERS ─────────────────────────────────────────────── */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const THEME_KEY = 'theme';
const QUOTE_KEY = 'gtl_q';
const SPLASH_REMOVE_DELAY = 1050;
const SPLASH_AUTO_DISMISS_DELAY = 4000;
const CONTACT_SUCCESS_DELAY = 1200;

/* ─── QUOTES ──────────────────────────────────────────────── */
const QUOTES = [
  { text: "The greatest tragedy in this world is never trying.", attr: "— Unknown" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", attr: "— Ralph Waldo Emerson" },
  { text: "Talent is a pursued interest. Anything that you're willing to practice, you can do.", attr: "— Bob Ross" },
  { text: "A person who never made a mistake never tried anything new.", attr: "— Albert Einstein" },
  { text: "The only way to do great work is to love what you do.", attr: "— Steve Jobs" },
  { text: "It does not matter how slowly you go as long as you do not stop.", attr: "— Confucius" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", attr: "— Winston Churchill" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", attr: "— Eleanor Roosevelt" },
  { text: "In the middle of every difficulty lies opportunity.", attr: "— Albert Einstein" },
  { text: "You miss 100% of the shots you don't take.", attr: "— Wayne Gretzky" },
  { text: "The secret of getting ahead is getting started.", attr: "— Mark Twain" },
  { text: "Don't watch the clock; do what it does. Keep going.", attr: "— Sam Levenson" },
  { text: "Whether you think you can or you think you can't, you're right.", attr: "— Henry Ford" },
  { text: "Build your dreams, or someone else will hire you to build theirs.", attr: "— Farrah Gray" },
  { text: "Hard work beats talent when talent doesn't work hard.", attr: "— Tim Notke" },
  { text: "The difference between ordinary and extraordinary is that little extra.", attr: "— Jimmy Johnson" },
];

function pickQuote() {
  const lastQuoteIndex = parseInt(localStorage.getItem(QUOTE_KEY) ?? '-1', 10);
  let quoteIndex;

  do {
    quoteIndex = Math.floor(Math.random() * QUOTES.length);
  } while (quoteIndex === lastQuoteIndex && QUOTES.length > 1);

  localStorage.setItem(QUOTE_KEY, String(quoteIndex));
  return QUOTES[quoteIndex];
}

/* ─── SPLASH SCREEN ───────────────────────────────────────── */
function dismissSplash() {
  const splash = $('#splash');
  if (!splash || splash.classList.contains('out')) return;

  splash.classList.add('out');
  window.setTimeout(() => splash.remove(), SPLASH_REMOVE_DELAY);
}

function initSplash() {
  const splash = $('#splash');
  if (!splash) return;

  const quote = pickQuote();
  $('#splash-text').textContent = quote.text;
  $('#splash-attr').textContent = quote.attr;

  window.setTimeout(dismissSplash, SPLASH_AUTO_DISMISS_DELAY);
  document.addEventListener('keydown', dismissSplash, { once: true });
  splash.addEventListener('click', dismissSplash);
}

/* ─── NAVIGATION ──────────────────────────────────────────── */
function updateSolidNav() {
  const nav = $('#nav');
  nav?.classList.toggle('solid', window.scrollY > 60);
}

function toggleMobileNav(button) {
  const mobileNav = $('#nav-mobile');
  if (!button || !mobileNav) return;

  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileNav() {
  const navToggle = $('.nav-toggle');
  const mobileNav = $('#nav-mobile');
  if (!navToggle || !mobileNav) return;

  navToggle.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

function getLinkedSectionIds() {
  return $$('.nav-list a')
    .map(link => link.getAttribute('href'))
    .filter(href => href?.startsWith('#'))
    .map(href => href.slice(1));
}

function clearActiveNav() {
  $$('.nav-list a').forEach(link => {
    link.removeAttribute('aria-current');
  });
}

function setActiveNav(sectionId) {
  clearActiveNav();

  $$('.nav-list a').forEach(link => {
    if (link.getAttribute('href') === `#${sectionId}`) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initActiveNavObserver() {
  const linkedSectionIds = getLinkedSectionIds();

  const activeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  $$('section[id]').forEach(section => {
    if (linkedSectionIds.includes(section.id)) activeObserver.observe(section);
  });
}

function initNavigation() {
  window.addEventListener('scroll', updateSolidNav, { passive: true });

  const navToggle = $('.nav-toggle');
  navToggle?.addEventListener('click', () => toggleMobileNav(navToggle));

  $$('#nav-mobile a').forEach(link => link.addEventListener('click', closeMobileNav));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileNav();
  });

  initActiveNavObserver();
}

/* ─── SCROLL REVEAL ───────────────────────────────────────── */
function initScrollReveal() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  $$('.skill-card, .project-card, .service-card, .blog-card, .timeline-item').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ─── SKILLS FILTER ───────────────────────────────────────── */
function showSkills(category) {
  $$('.skill-tab').forEach(tab => {
    const isActive = tab.dataset.category === category;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });

  $$('.skill-card').forEach(card => {
    const shouldShow = category === 'all' || card.dataset.category === category;
    card.style.display = shouldShow ? 'block' : 'none';
  });
}

function initSkillsFilter() {
  $$('.skill-tab').forEach(tab => {
    tab.addEventListener('click', () => showSkills(tab.dataset.category));
  });
}

/* ─── CONTACT FORM ────────────────────────────────────────── */
function setFormStatus(form, message, type) {
  const status = $('.form-status', form);
  if (!status) return;

  status.textContent = message;
  status.dataset.state = type;
}

function setFieldError(field, hasError) {
  field?.setAttribute('aria-invalid', String(hasError));
}

function validateContactForm(form) {
  const fields = {
    name: $('#f-name', form),
    email: $('#f-email', form),
    message: $('#f-message', form),
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errors = [];

  Object.entries(fields).forEach(([key, field]) => {
    const value = field.value.trim();
    const hasError = !value || (key === 'email' && !emailRegex.test(value));

    setFieldError(field, hasError);
    if (hasError) errors.push(field);
  });

  return errors;
}

function handleContactForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = $('button[type="submit"]', form);
  const originalText = submitButton.textContent;

  setFormStatus(form, '', '');
  const errors = validateContactForm(form);

  if (errors.length) {
    setFormStatus(form, 'Please complete the highlighted fields before sending.', 'error');
    errors[0].focus();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  setFormStatus(form, 'Sending your message...', 'loading');

  window.setTimeout(() => {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
    setFormStatus(form, 'Message sent successfully. Thank you for reaching out!', 'success');
    form.reset();
  }, CONTACT_SUCCESS_DELAY);
}

function initContactForm() {
  $('.contact-form')?.addEventListener('submit', handleContactForm);
}

/* ─── TECH BACKGROUND ─────────────────────────────────────── */
function initTechBackground() {
  const canvas = $('#particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const gridSize = 50;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const gridColor = isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)';
  const dataColor = isDark ? 'rgba(16, 185, 129, 0.8)' : 'rgba(99, 102, 241, 0.7)';
  const dataFlows = Array(30).fill().map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    speed: Math.random() * 1.5 + 0.5,
    char: Math.random() > 0.5 ? '1' : '0',
    size: Math.random() * 4 + 10,
  }));

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function drawGrid() {
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;

    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  function drawDataFlows() {
    ctx.fillStyle = dataColor;

    dataFlows.forEach(flow => {
      ctx.font = `${flow.size}px monospace`;
      ctx.fillText(flow.char, flow.x, flow.y);

      flow.x += flow.speed;
      if (flow.x > canvas.width) {
        flow.x = 0;
        flow.y = Math.random() * canvas.height;
      }
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawDataFlows();
    window.requestAnimationFrame(animate);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animate();
}

/* ─── ROLE CAROUSEL ───────────────────────────────────────── */
const ROLES = [
  'Full-Stack Developer',
  'Data Scientist',
  'AI Engineer',
];

function initRoleCarousel() {
  const carousel = $('#role-carousel');
  if (!carousel) return;

  let currentRole = 0;

  function typeWriter(text, index = 0) {
    if (index < text.length) {
      carousel.textContent = text.substring(0, index + 1);
      window.setTimeout(() => typeWriter(text, index + 1), 100);
      return;
    }

    window.setTimeout(eraseText, 2000);
  }

  function eraseText() {
    const text = carousel.textContent;

    if (text.length > 0) {
      carousel.textContent = text.substring(0, text.length - 1);
      window.setTimeout(eraseText, 50);
      return;
    }

    currentRole = (currentRole + 1) % ROLES.length;
    window.setTimeout(() => typeWriter(ROLES[currentRole]), 500);
  }

  typeWriter(ROLES[0]);
}

/* ─── THEME TOGGLE ────────────────────────────────────────── */
function getThemeIcon(theme) {
  return theme === 'dark' ? '☀️' : '🌙';
}

function updateThemeIcon(theme) {
  const themeIcon = $('.theme-icon');
  if (themeIcon) themeIcon.textContent = getThemeIcon(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
  updateThemeIcon(nextTheme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (!savedTheme) return;

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

/* ─── INIT ────────────────────────────────────────────────── */
function setCurrentYear() {
  const yearElement = $('#ft-year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

function initThemeToggle() {
  loadTheme();
  $('.theme-toggle')?.addEventListener('click', toggleTheme);
}

function init() {
  initSplash();
  initNavigation();
  initScrollReveal();
  initSkillsFilter();
  initContactForm();
  initTechBackground();
  initRoleCarousel();
  initThemeToggle();
  setCurrentYear();
}

document.addEventListener('DOMContentLoaded', init);
