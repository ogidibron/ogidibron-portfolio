# Gideon Tetteh Luotey — Portfolio Website

A professional, interactive, and fully responsive personal portfolio website built with
pure **HTML5**, **CSS3**, and **vanilla JavaScript**. No frameworks, no build tools, no
dependencies. Light, vibrant aesthetic with a modern indigo-violet-cyan palette and dark mode toggle.

> **Status:** Production-ready · v2.0.0 · © 2026 Gideon Tetteh Luotey

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Features](#2-features)
3. [Getting Started](#3-getting-started)
4. [How to Personalise](#4-how-to-personalise)
   - [Adding Your Photo](#41-adding-your-photo)
   - [Updating Your Details](#42-updating-your-details)
   - [Editing Projects](#43-editing-projects)
   - [Editing Experience](#44-editing-experience)
   - [Adding Quotes](#45-adding-quotes)
5. [File Reference](#5-file-reference)
6. [Customisation Reference](#6-customisation-reference)
   - [Colours](#61-colours)
   - [Fonts](#62-fonts)
   - [Layout Columns](#63-layout-columns)
7. [Accessibility](#7-accessibility)
8. [SEO & Meta Tags](#8-seo--meta-tags)
9. [Performance](#9-performance)
10. [Browser Support](#10-browser-support)
11. [Deployment](#11-deployment)
12. [Deployment Checklist](#12-deployment-checklist)
13. [FAQ](#13-faq)
14. [Changelog](#14-changelog)
15. [Author](#15-author)
16. [License](#16-license)

---

## 1. Project Structure

```
portfolio/
├── index.html   →  Semantic HTML5 structure & all page content
├── style.css    →  Design tokens, styling, animations & responsive rules
├── script.js    →  All interactivity, observers & behaviour
└── README.md    →  This file
```

> **Important:** Keep all four files in the **same folder**. The HTML links to
> `style.css` and `script.js` by relative path — moving them to subfolders will
> break those links unless you update the `href` and `src` attributes accordingly.

---

## 2. Features

### Opening Experience
- Full-screen quote splash displays on every page load
- A pool of **16 hard-hitting inspirational quotes** — a different one appears
  each visit, guaranteed by `localStorage` (no back-to-back repeats)
- Auto-dismisses after **4 seconds** with an animated progress bar countdown
- Clicking anywhere or pressing any key also dismisses it immediately

### Navigation
- Fixed top bar with scroll-triggered background change
- Active section auto-highlighted via `aria-current` as the user scrolls
- Fully responsive — collapses into a full-screen animated mobile overlay on
  screens ≤ 960px wide
- `Escape` key closes the mobile menu; body scroll is locked while it is open
- **Dark mode toggle** (🌙/☀️) with localStorage persistence

### Hero Section
- **Large circular profile photo** with animated gradient ring
- **Subtle gradient background** with soft red/blue glows
- **Particle animation** with colorful dots floating in the background via `<canvas>`
- Role descriptor line: *Full-Stack Developer · Data Scientist · AI Engineer · Designer*

### Sections

| Section    | Description |
|------------|-------------|
| About      | Two-column biography and call-to-action |
| Skills     | Filterable skill cards with category tabs (All / Development / AI & Data / Design) |
| Projects   | Card grid — 6 project cards with category tags and hover effects |
| Experience | Vertical timeline — 4 career entries with dates, titles, and achievements |
| Services   | Four service cards with icon animations and hover lift effects |
| Articles   | Editorial blog grid — featured card plus side articles |
| Contact    | Channel links + fully accessible contact form with validation and submit feedback |

### Design Details
- **Light, vibrant color palette** with indigo, violet, cyan, and amber accents
- **Large circular profile photo** with animated gradient ring
- **Vibrant geometric background** with floating shapes and particle animation
- Inter font family for clean, modern typography
- **GTL monogram** logo in header and footer
- Scroll-reveal animations (`IntersectionObserver`) on all major elements
- **Interactive skills section** with category filtering via JavaScript event binding
- Responsive design for all screen sizes
- Dynamic copyright year — never needs manual updating

> **v2 Redesign Note:** This portfolio was rebuilt from the ground up in v2 with a light/vibrant theme, dark mode toggle, particle canvas background, modern card and timeline layouts, and clean JavaScript event binding. The old dark luxury crimson-gold palette, custom cursor, tabbed experience panels, and animated skill progress bars have been replaced with a fresh, energetic design system.

---

## 3. Getting Started

### Open locally
No server, no install, no build step required. Simply open `index.html` in any
modern browser.

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Using VS Code with Live Server
If you use VS Code, install the
[Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer),
right-click `index.html`, and select **Open with Live Server**. This gives you
auto-refresh on save.

### Using a local HTTP server (Python)
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

---

## 4. How to Personalise

### 4.1 Adding Your Photo

Find this block in `index.html` inside the `#hero` section:

```html
<div class="hero-photo">
  <div class="hero-photo-ring" aria-hidden="true"></div>
  <img src="your-photo.jpg" alt="Your name" />
</div>
```

Replace the `src` with your actual image path:

```html
<div class="hero-photo">
  <div class="hero-photo-ring" aria-hidden="true"></div>
  <img src="your-photo.jpg" alt="Your name" />
</div>
```

For best results with WebP (recommended format):

```html
<div class="hero-photo">
  <div class="hero-photo-ring" aria-hidden="true"></div>
  <picture>
    <source srcset="your-photo.webp" type="image/webp" />
    <img src="your-photo.jpg" alt="Your name" />
  </picture>
</div>
```

**Photo tips:**
- Use a **circular or portrait-oriented photo** — the CSS applies a circular clip
- Minimum resolution: **400px** square
- Target file size: **under 300 KB** after compression
- The CSS automatically applies a gradient ring around the photo and subtle shadow
- A lighter, more colourful photo will look more vibrant against the light background

---

### 4.2 Updating Your Details

Search `index.html` for each placeholder and replace it:

| Placeholder | Location | Replace with |
|---|---|---|
| `gideon@example.com` | Contact section email link + form | Your real email address |
| `linkedin.com/in/gideon-luotey` | Contact channel + footer | Your LinkedIn profile URL |
| `github.com/gideon-luotey` | Contact channel + footer | Your GitHub profile URL |
| `@gideon_luotey` | Contact channel | Your X / Twitter handle |
| `behance.net/gideon-luotey` | Footer social link | Your Behance profile URL |
| `Portfolio · 2026` | Hero eyebrow label | Update year as needed |
| Hero `<p class="hero-lead">` | Hero section | Rewrite your personal tagline |

---

### 4.3 Editing Projects

Each project is an `<article class="project-card">` inside `.projects-grid` in `index.html`.

```html
<article class="project-card">
  <div class="project-card-image">🤖</div>
  <div class="project-card-content">
    <p class="project-card-category">AI Engineering</p>
    <h3 class="project-card-title">Project Name Here</h3>
    <p class="project-card-desc">Short description of the project.</p>
    <a href="https://your-project-url.com" class="project-card-link"
       aria-label="View Project Name project">View Project →</a>
  </div>
</article>
```

To add a new project, duplicate any `<article class="project-card">` block and update
the content. To remove one, delete the entire `<article>` block.

---

### 4.4 Editing Experience

Each role is a `.timeline-item` inside `.timeline` in `index.html`.

```html
<div class="timeline-item">
  <div class="timeline-date">2021 — 2022</div>
  <h3 class="timeline-title">Job Title</h3>
  <p class="timeline-company">Company Name</p>
  <ul class="timeline-list">
    <li>What you achieved here.</li>
    <li>Another accomplishment.</li>
  </ul>
</div>
```

To add a new role, duplicate any `.timeline-item` block and update the content.
To remove one, delete the entire `.timeline-item` block.

---

### 4.5 Adding Quotes

Open `script.js` and find the `QUOTES` array at the top of the file.
Add as many entries as you like in this format:

```js
{ text: "Your quote text here.", attr: "— Author Name" },
```

The more quotes you add, the more variety visitors experience across visits.
The `localStorage` key `gtl_q` remembers the last shown quote index so
consecutive visits never show the same one twice.

---

## 5. File Reference

### `index.html` — 539 lines

The single HTML document for the entire site. Structured as follows:

```
<head>
  charset, viewport, SEO meta, font imports, stylesheet link

<body>
  .skip-link             Keyboard accessibility — jumps to #main
  #splash                Quote overlay (text populated by script.js)
  <header>
    #nav                 Primary navigation bar
    #nav-mobile          Full-screen mobile menu overlay
  <main id="main">
    #animated-bg         Particle canvas background
    #hero                Name, descriptor, CTAs, circular profile photo
    #about               Biography + call-to-action
    #skills              Filterable skill cards with category tabs
    #projects            Project card grid (6 cards)
    #experience          Vertical timeline (4 career entries)
    #services            Four service cards with icon animations
    #blog                Editorial article grid (3 cards)
    #contact             Channel links + accessible contact form
  <footer>               Centred: GTL logo, socials, copyright, back-to-top
  <script src="script.js" defer>
```

---

### `style.css` — 1,150+ lines

All visual styling, organised in labelled sections:

| Section | Approx. Lines | What It Covers |
|---|---|---|
| Design Tokens | 1–62 | All CSS custom properties (colours, spacing, typography scale, radii) |
| Dark Mode | 64–84 | `[data-theme="dark"]` overrides for backgrounds and text |
| Reset | 86–100 | Box-sizing, margin reset, base element defaults |
| Skip Link | 101–110 | Keyboard nav accessibility link |
| Quote Splash | 111–188 | Full-screen overlay, progress bar, fade animation |
| Navigation | 189–312 | Fixed nav, logo, links, hamburger, mobile menu, theme toggle |
| Hero | 313–380 | Photo ring, gradient background, particle canvas, name, descriptor, buttons |
| Section Shell | 381–430 | Shared section padding, eyebrow, headings, rule |
| About | 431–490 | Two-column grid, call-to-action |
| Skills | 491–550 | Category tabs, skill card grid with filter transitions |
| Projects | 551–610 | Project card grid, hover effects |
| Experience | 611–670 | Vertical timeline, timeline items |
| Services | 671–730 | Service cards with icon animations and hover lift |
| Blog | 731–780 | Editorial grid, featured and side cards |
| Contact | 781–880 | Channel links, form inputs, labels, validation states |
| Footer | 881–950 | Centred column, GTL logo, social links, back-to-top |
| Animations | 951–1000 | `@keyframes fadeUp`, `pulseGlow`, `float` |
| Responsive | 1001–1150+ | Media queries for all breakpoints + reduced motion support |

---

### `script.js` — 312 lines

All JavaScript behaviour in clearly labelled sections:

| Section / Function | What It Does |
|---|---|
| `QUOTES` array | 16 hard-hitting inspirational quotes |
| `pickQuote()` | Random selection, avoids last shown via `localStorage` key `gtl_q` |
| `initSplash()` (IIFE) | Populates splash text, starts 4s auto-dismiss, binds click & keydown |
| `dismissSplash()` | Adds `.out` class (CSS fade), removes element from DOM after 1s |
| Nav scroll handler | Toggles `.solid` class on `#nav` when `scrollY > 60` |
| `toggleMobileNav()` | Opens/closes mobile menu; locks body scroll while open |
| `closeMobileNav()` | Resets menu + scroll lock; bound to `Escape` key |
| Reveal observer | `IntersectionObserver` — adds `.visible` to cards as they enter viewport |
| `showSkills(category)` | Filters skill cards by `data-category`; toggles `.active` on tabs |
| `handleContactForm(e)` | Validates fields, shows loading/success/error states, resets form |
| `setFormStatus()` | Updates `.form-status` text and `data-state` attribute |
| `setFieldError()` | Sets `aria-invalid` on invalid fields |
| Particle init | `initParticles()` — sets up `<canvas>` with 50 colourful floating dots |
| Active nav observer | `IntersectionObserver` — applies `aria-current="page"` to nav links on scroll |
| `toggleTheme()` | Switches `data-theme` between `light`/`dark`, persists to `localStorage` |
| `loadTheme()` (IIFE) | Restores saved theme on page load |
| `#ft-year` | Inserts `new Date().getFullYear()` into the footer copyright span |

---

## 6. Customisation Reference

### 6.1 Colours

All colours are CSS custom properties at the top of `style.css`. Change any value
and it cascades through the entire site instantly.

```css
:root {
  /* Light, vibrant backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --bg-tertiary: #e9ecef;
  --bg-card: #ffffff;
  --bg-card-hover: #f1f5f9;
  
  /* Accent colors - modern and vibrant */
  --accent-primary: #6366f1;    /* Indigo - primary action */
  --accent-secondary: #8b5cf6;  /* Violet - secondary */
  --accent-tertiary: #06b6d4;   /* Cyan - accent */
  --accent-warm: #f59e0b;       /* Amber - warm accent */
  --accent-success: #10b981;    /* Emerald - success */
  --accent-danger: #ef4444;     /* Red - danger */
  
  /* Vibrant hero colors */
  --hero-red: #ff4757;
  --hero-blue: #1e90ff;
  --hero-orange: #ffa502;
  
  /* Text colors */
  --text-primary: #1e293b;      /* Dark slate for headings */
  --text-secondary: #475569;    /* Slate for body */
  --text-muted: #94a3b8;        /* Light slate for muted */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  --gradient-secondary: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  --gradient-warm: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
  
  /* Spacing scale */
  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 5rem;
  
  /* Typography scale */
  --font-xs: clamp(0.75rem, 1.5vw, 0.875rem);
  --font-sm: clamp(0.875rem, 1.8vw, 1rem);
  --font-md: clamp(1rem, 2vw, 1.125rem);
  --font-lg: clamp(1.125rem, 2.5vw, 1.25rem);
  --font-xl: clamp(1.5rem, 3vw, 2rem);
  --font-2xl: clamp(2rem, 4vw, 2.5rem);
  --font-3xl: clamp(2.5rem, 5vw, 3rem);
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Easing */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

> **Note:** The site features a vibrant light palette with indigo, violet, cyan, and amber accents. Dark mode is available via the theme toggle button in the header.

---

### 6.2 Fonts

Fonts are loaded from Google Fonts in the `<head>` of `index.html`.

| Typeface | Role | Weights Loaded |
|---|---|---|
| **Cormorant Garamond** | Display headings, hero name, pull-quotes, article titles | 300, 400, 400 italic |
| **Syne** | Section labels, card titles, nav links, logo, skill titles | 400, 500, 600, 700 |
| **DM Sans** | Body copy, descriptions, form fields, metadata | 300, 400, 500 |

To swap a font: update the Google Fonts `<link>` URL in `index.html`
and find-replace the `font-family` value in `style.css`.

---

### 6.3 Layout Columns

Grid column counts can be changed directly in `style.css`:

**Projects grid** (default: 3 columns):
```css
.projects-grid { grid-template-columns: repeat(2, 1fr); }  /* 2 columns */
.projects-grid { grid-template-columns: repeat(4, 1fr); }  /* 4 columns */
```

**Skills grid** (default: 3 columns):
```css
.skills-grid { grid-template-columns: repeat(2, 1fr); }  /* 2 columns */
```

**Services grid** (default: 2 columns):
```css
.services-grid { grid-template-columns: repeat(1, 1fr); }  /* stacked */
.services-grid { grid-template-columns: repeat(3, 1fr); }  /* 3 columns */
```

**Blog grid** (default: featured + two side):
```css
.blog-grid { grid-template-columns: 1fr 1fr 1fr; }  /* equal columns */
.blog-grid { grid-template-columns: 1fr 1fr; }       /* two columns */
```

### 6.4 Responsive Breakpoints

The site uses a mobile-first approach with the following breakpoints:

| Breakpoint | Min Width | Max Width | Behavior |
|------------|---------|-----------|----------|
| Small Mobile | - | 560px | Single column, stacked elements, reduced padding |
| Tablet Portrait | 561px | 960px | Two column grids where appropriate |
| Small Desktop | 961px | 1024px | Full navigation, 2-3 column grids |
| Standard Desktop | 1025px | 1279px | Full 3-column layouts |
| Large Desktop | 1280px | - | Max-width constraints, centered content |

```css
/* Example: Two column on tablet */
@media (min-width: 561px) and (max-width: 960px) {
  .skills-grid,
  .projects-grid,
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.01ms !important; }
}
```

---

## 7. Accessibility

This site is built to meet **WCAG 2.1 Level AA** standards throughout.

| Standard | Implementation |
|---|---|
| Semantic HTML5 | `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>` used correctly |
| Section labels | All `<section>` elements have `aria-labelledby` pointing to their `<h2>` |
| Skip link | Visible-on-focus skip-to-content link at the top of the page |
| Keyboard nav | `Escape` closes mobile menu; all interactive elements are focusable |
| Filter buttons | `aria-pressed="true/false"` reflects current active filter on skill tabs |
| Link labels | All ambiguous links (e.g. "View Project →") have descriptive `aria-label` |
| Form labels | All inputs have associated `<label for="…">` and `autocomplete` attributes |
| Form validation | `aria-invalid` set on invalid fields; `aria-live="polite"` status region |
| Focus indicator | `focus-visible` ring styled with accent colour — visible and distinct |
| Decorative elements | All decorative elements have `aria-hidden="true"` |
| Colour contrast | All body text meets AA ratio (≥ 4.5:1) against background colours |
| Motion | Animations use `transition` and `IntersectionObserver` — no auto-playing video |
| Mobile menu | `aria-expanded` on toggle button reflects open/closed state |
| Theme toggle | `aria-label` describes current action (toggle dark mode) |

---

## 8. SEO & Meta Tags

The `<head>` in `index.html` includes a basic description and author. Before going
live, expand it with the following for better search engine visibility and social
sharing previews:

```html
<!-- Primary SEO -->
<meta name="keywords" content="Gideon Luotey, web developer Ghana, AI engineer,
  data scientist, graphic designer, portfolio" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://gideonluotey.com/" />

<!-- Open Graph — Facebook, LinkedIn, WhatsApp previews -->
<meta property="og:type"        content="website" />
<meta property="og:url"         content="https://gideonluotey.com/" />
<meta property="og:title"       content="Gideon Tetteh Luotey — Portfolio" />
<meta property="og:description" content="Web Developer · AI Engineer · Data Scientist · Designer based in Ghana." />
<meta property="og:image"       content="https://gideonluotey.com/og-preview.jpg" />

<!-- Twitter / X Card -->
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:site"        content="@gideon_luotey" />
<meta name="twitter:title"       content="Gideon Tetteh Luotey — Portfolio" />
<meta name="twitter:description" content="Web Developer · AI Engineer · Designer based in Ghana." />
<meta name="twitter:image"       content="https://gideonluotey.com/og-preview.jpg" />

<!-- Favicon -->
<link rel="icon"             type="image/png" sizes="32x32" href="favicon-32.png" />
<link rel="icon"             type="image/png" sizes="16x16" href="favicon-16.png" />
<link rel="apple-touch-icon" sizes="180x180"                href="apple-touch-icon.png" />
```

**OG image tip:** Create a 1200×630px image showing your name, the GTL monogram,
and your role against the dark background — this is the thumbnail shown when your
URL is shared on LinkedIn, WhatsApp, Facebook, or X.

---

## 9. Performance

The site is intentionally lightweight — no frameworks, no runtime, no bundler.
These practices keep it fast:

### Compress your photo before adding it
- **Target:** under 300 KB
- **Format:** WebP with JPEG fallback (see [§4.1](#41-adding-your-photo))
- **Tools:** [Squoosh](https://squoosh.app) (free, browser-based), ImageOptim (macOS),
  or `cwebp` on the command line

### Font loading
The Google Fonts `<link>` already uses `rel="preconnect"` to reduce DNS lookup
time. For maximum performance, download the font files and serve them locally
as `@font-face` declarations to eliminate the third-party network request.

### Lazy loading
When adding project screenshots or any other images below the fold, use the
native `loading="lazy"` attribute:

```html
<img src="screenshot.jpg" alt="Project name" loading="lazy" />
```

### Expected Lighthouse scores

| Category | Expected Baseline |
|---|---|
| Performance | 90 – 98 |
| Accessibility | 95 – 100 |
| Best Practices | 95 – 100 |
| SEO | 90 – 100 |

Run an audit via Chrome DevTools → **Lighthouse** tab, or at
[pagespeed.web.dev](https://pagespeed.web.dev).

---

## 10. Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| Opera 76+ | ✅ Full |
| Samsung Internet 14+ | ✅ Full |
| IE 11 | ❌ Not supported |

Features used that require modern browsers: CSS custom properties, CSS Grid,
`IntersectionObserver`, `100svh`, `backdrop-filter`, `focus-visible`,
`writing-mode`, and `localStorage`.

---

## 11. Deployment

The site is a **fully static website** — no server, no backend, no build process.
Any static host will work. The following are free and recommended:

| Host | How to Deploy |
|---|---|
| **GitHub Pages** | Push the folder to a GitHub repo → Settings → Pages → select `main` branch |
| **Netlify** | Drag and drop the folder at [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel` in the folder, or connect your GitHub repo at vercel.com |
| **Cloudflare Pages** | Connect GitHub repo or upload directly at pages.cloudflare.com |
| **Render** | Connect GitHub repo, set publish directory to `/` |

### Custom domain
After deploying, add your custom domain (e.g. `gideonluotey.com`) in your
host's dashboard, then create a `CNAME` DNS record pointing to your host's
provided address. HTTPS is provided automatically by all hosts listed above.

---

## 12. Deployment Checklist

Run through this before publishing:

**Content**
- [ ] Real email address in the contact section and email link
- [ ] All social media links point to your actual profiles
- [ ] Your photo has been added and displays correctly on desktop and mobile
- [ ] All project cards have real titles, descriptions, and working links
- [ ] Experience timeline reflects your actual career history
- [ ] Blog articles either link to real posts, or placeholder cards are updated
- [ ] Hero year (`Portfolio · 2026`) is current
- [ ] Footer copyright year updates automatically ✓ (handled by JS)

**Technical**
- [ ] All three files (`index.html`, `style.css`, `script.js`) are in the same folder
- [ ] Photo is compressed to under 300 KB and in WebP format if possible
- [ ] SEO meta tags, OG tags, and Twitter Card tags are filled in with your domain
- [ ] Favicon files are in the folder (`favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`)
- [ ] Canonical URL `<link>` points to your live domain
- [ ] Tested in Chrome, Firefox, and Safari
- [ ] Tested on a real physical mobile device (not just browser DevTools)
- [ ] Lighthouse audit run — Performance, Accessibility, SEO all green
- [ ] All visible text has been spell-checked
- [ ] Dark mode toggle works and persists across page reloads
- [ ] Particle canvas animation runs smoothly on target devices

**After Launch**
- [ ] URL submitted to [Google Search Console](https://search.google.com/search-console)
- [ ] Portfolio URL added to your LinkedIn profile (Featured or About section)
- [ ] URL in your email signature
- [ ] URL in your social media bios (X, GitHub, Behance)
- [ ] OG preview tested at [opengraph.xyz](https://www.opengraph.xyz) or
      [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

---

## 13. FAQ

**Q: Why doesn't the particle animation show on my device?**

The particle canvas uses `requestAnimationFrame` and `<canvas>` API, which are
supported in all modern browsers. If you see a blank hero background, check the
browser console for errors — a common cause is an ad blocker or privacy extension
that blocks canvas context creation. The site degrades gracefully: the gradient
background remains visible even without particles.

---

**Q: The splash quote didn't change from last time.**

The `localStorage` key `gtl_q` stores the index of the last shown quote.
If `localStorage` is cleared, blocked, or you're in a private/incognito window,
the randomisation still works but can't track the previous quote, so a repeat
is possible. Adding more quotes to the `QUOTES` array in `script.js` increases variety.

---

**Q: The contact form doesn't actually send me emails. How do I fix that?**

The form is front-end only — it shows a confirmation state but has no backend.
To receive real emails, the easiest no-server solutions are:

- **[Formspree](https://formspree.io)** — add `method="POST" action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag and remove the `submit` event listener in `script.js`
- **[Web3Forms](https://web3forms.com)** — free, no server, works with a hidden `access_key` input
- **[EmailJS](https://emailjs.com)** — sends emails directly from JavaScript, no server needed

---

**Q: How do I add a Testimonials section?**

1. In `index.html`, duplicate any `<section>` block and give it a unique `id` (e.g. `id="testimonials"`)
2. Add a nav link: `<li><a href="#testimonials">Testimonials</a></li>` in `.nav-list` and `#nav-mobile`
3. Style the section in `style.css` using `.section` or `.section-alt` as the background class
4. Use a grid or flex layout for the testimonial cards, following the same card patterns as Services or Projects

---

**Q: Can I change the particle colours?**

Yes. In `script.js`, find the `colors` array inside `initParticles()` and replace
the RGBA values with your preferred hues. The current palette uses red (`#ff4757`),
blue (`#1e90ff`), and orange (`#ffa502`).

---

**Q: The hero photo is too dark / too light. How do I adjust it?**

The photo is displayed inside `.hero-photo` with a circular clip and gradient ring.
To adjust the ring size, modify `.hero-photo-ring` in `style.css`. To change the
photo size, adjust `.hero-photo img` width/height values.

---

**Q: How do I switch to dark mode permanently?**

The dark mode toggle persists your choice in `localStorage` under the key `theme`.
To force dark mode by default, change the `loadTheme` IIFE in `script.js` to set
`data-theme="dark"` when no saved preference exists. To force light mode, set
`data-theme="light"` as the fallback.

---

**Q: Can I add more experience entries beyond four?**

Yes. In `index.html`, duplicate any `.timeline-item` block inside `.timeline` and
update the content. No JavaScript changes are needed — the timeline is static HTML.

---

## 14. Changelog

All notable changes to this project are documented here,
newest version first.

---

### v1.3.0 — 2026
**Separation of concerns & accessibility polish**
- Separated single-file codebase into `index.html`, `style.css`, `script.js`
- Footer completely redesigned as centred column layout:
  GTL gem emblem → social icons → horizontal rule → copyright → back-to-top
- Copyright year is now dynamic — populated by `new Date().getFullYear()` in
  `script.js`, so it will never need manual updating
- Contact section full accessibility pass:
  - Channel labels changed from `--text-3` to `--gold` for clear distinction
  - Channel values changed from `--text-2` to `--text-1` for maximum legibility
  - Form labels changed from `--text-3` to `--text-2` for readable contrast
- Global `--text-2` lightened: `#a89f8c` → `#c2b89e` (improves WCAG AA compliance
  for all body text site-wide)
- `proj-desc`, `srv-desc`, `srv-items li`, `blog-snip` raised from `--text-3`
  to `--text-2` for readability at smaller font sizes and for users with mild
  visual impairment
- Added `README.md` with full project documentation

---

### v2.0.0 — 2026
**Complete redesign — light/vibrant theme, dark toggle, particle canvas**
- Rebuilt from ground up with light, vibrant colour palette (indigo, violet, cyan, amber)
- Dark mode toggle added with `data-theme` attribute and `localStorage` persistence
- Particle canvas background with colourful floating dots
- Hero section with circular profile photo, gradient ring, and particle animation
- Skills section with filterable category cards (All / Development / AI & Data / Design)
- Experience section with vertical timeline layout
- Projects section with modern card grid and hover effects
- Services section with icon animations and hover lift effects
- Blog section with editorial card grid
- Contact form with field validation, `aria-invalid`, and `aria-live` status
- Native cursor — no custom cursor overlay
- JavaScript event binding via `DOMContentLoaded` and `addEventListener`
- Scroll reveal animations on all major elements
- Removed old dark luxury palette, custom cursor, tabbed experience panels, and animated skill bars

---

### v1.2.0 — 2026
**Quote system overhaul & hero redesign**
- Voice synthesis (`SpeechSynthesisUtterance`) removed — replaced with silent
  visual-only quote display
- Splash auto-dismisses after 4 seconds with animated progress bar
- Clicking anywhere or pressing any key dismisses splash immediately
- 16-quote pool implemented in `script.js`
- `localStorage` key `gtl_q` prevents back-to-back quote repeats across visits
- Hero stats strip (years / projects / clients) removed as requested
- Role descriptor line added beneath hero name
- `aria-current="page"` now applied to active nav link via `IntersectionObserver`
  as sections enter the viewport

---

### v1.1.0 — 2026
**Accessibility & responsive overhaul**
- Semantic HTML5 landmarks added throughout (`<header>`, `<main>`, `<footer>`,
  `<nav>`, `<section>`, `<article>`)
- All sections given `aria-labelledby` attributes
- Skip-to-content link added
- Mobile hamburger menu added with full-screen animated overlay
- `Escape` key closes mobile menu
- Body scroll locked while mobile menu is open
- `focus-visible` ring styled
- All meaningful links given descriptive `aria-label` attributes
- Form inputs given `<label for>` associations and `autocomplete` attributes

---

### v1.0.0 — 2026
**Initial build**
- All eight sections implemented: Hero, About, Skills, Projects, Experience,
  Services, Articles, Contact
- Textured overlay effect
- Diamond GTL monogram logo with double-border inner detail
- Scroll-reveal animations on all major elements via `IntersectionObserver`
- Project filter — All / Development / AI & Data / Design
- Tabbed career timeline with 4 entries
- Contact form with visual submit confirmation (resets after 3.5s)
- Responsive layout — single column below 960px, stacked hero on mobile
- Dark luxury aesthetic with gold accents on near-black backgrounds

---

## 15. Author

**Gideon Tetteh Luotey**
Web Developer · Data Scientist · AI Engineer · Graphic Designer · Video Editor
Accra, Ghana 🇬🇭

| Platform | Handle / URL |
|---|---|
| Email | hello@gideonluotey.com |
| LinkedIn | linkedin.com/in/gideon-tetteh-luotey |
| GitHub | github.com/ogidibron |
| X / Twitter | x.com |

---

## 16. License

This codebase is **personal and proprietary**.

© 2026 Gideon Tetteh Luotey. All rights reserved.

This project and its source files may **not** be copied, reused, redistributed,
resold, or used as a template for other projects without explicit written
permission from the author.

---

*Built from scratch — no templates, no frameworks, no shortcuts.*
