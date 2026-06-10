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
  nav.classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

/* ─── MOBILE NAV ─────────────────────────────────────────── */
function toggleMobileNav(btn) {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!isOpen));
  document.getElementById('nav-mobile').classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileNav() {
  const btn = document.querySelector('.nav-toggle');
  btn.setAttribute('aria-expanded', 'false');
  document.getElementById('nav-mobile').classList.remove('open');
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
      entry.target.classList.add('vis');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ─── SKILL BARS: ANIMATE ON ENTRY ──────────────────────── */
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.w + '%';
    });
    barObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-col').forEach(col => barObserver.observe(col));

/* ─── EXPERIENCE TABS ────────────────────────────────────── */
function showExp(idx, el) {
  document.querySelectorAll('.exp-tab').forEach((tab, i) => {
    const selected = i === idx;
    tab.setAttribute('aria-selected', String(selected));
    tab.setAttribute('tabindex', selected ? '0' : '-1');
  });
  document.querySelectorAll('.exp-panel').forEach((panel, i) => {
    panel.setAttribute('aria-hidden', String(i !== idx));
  });
}

/* Arrow key navigation for experience tabs */
function expKey(e, idx) {
  const tabs = document.querySelectorAll('.exp-tab');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = (idx + 1) % tabs.length;
    tabs[next].focus();
    showExp(next, tabs[next]);
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = (idx - 1 + tabs.length) % tabs.length;
    tabs[prev].focus();
    showExp(prev, tabs[prev]);
  }
}

/* ─── PROJECT FILTER ─────────────────────────────────────── */
function filterProj(cat, btn) {
  // Update button states
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.setAttribute('aria-pressed', 'false');
  });
  btn.setAttribute('aria-pressed', 'true');

  // Show / hide cards with animation
  const cards = document.querySelectorAll('.proj-card');
  cards.forEach((card, i) => {
    const show = cat === 'all' || card.dataset.cat === cat;
    if (show) {
      card.classList.remove('hidden');
      card.classList.add('entering');
      card.style.animationDelay = (i * 0.06) + 's';
      // Clean up animation class after it completes
      setTimeout(() => card.classList.remove('entering'), 600);
    } else {
      card.classList.add('hidden');
      card.classList.remove('entering');
    }
  });
}

/* ─── CONTACT FORM ───────────────────────────────────────── */
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('fsub-btn');
  const form = e.target;
  const originalText = btn.textContent;

  // Basic validation
  const fname = form.querySelector('#f-fname').value.trim();
  const email = form.querySelector('#f-email').value.trim();
  const msg = form.querySelector('#f-msg').value.trim();

  if (!fname || !email || !msg) {
    // Highlight empty required fields
    ['f-fname', 'f-email', 'f-msg'].forEach(id => {
      const el = form.querySelector('#' + id);
      if (!el.value.trim()) {
        el.style.borderColor = 'var(--fire)';
        setTimeout(() => { el.style.borderColor = ''; }, 2000);
      }
    });
    return;
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    const emailEl = form.querySelector('#f-email');
    emailEl.style.borderColor = 'var(--fire)';
    setTimeout(() => { emailEl.style.borderColor = ''; }, 2000);
    return;
  }

  // Loading state
  btn.textContent = 'Sending...';
  btn.disabled = true;
  btn.classList.add('loading');

  // Simulate network request (replace with real fetch in production)
  setTimeout(() => {
    // Simulate success (90% chance) or error (10% chance)
    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      btn.textContent = 'Message Sent ✓';
      btn.classList.remove('loading');
      btn.classList.add('success');
    } else {
      btn.textContent = 'Failed to send. Try again.';
      btn.classList.remove('loading');
      btn.classList.add('error');
      btn.disabled = false;
      return;
    }

    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('success', 'error');
      btn.disabled = false;
      form.reset();
    }, 3500);
  }, 1500);
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

/* ─── FOOTER: DYNAMIC COPYRIGHT YEAR ────────────────────── */
const yearEl = document.getElementById('ft-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
