# Gideon Tetteh Luotey — Portfolio Website

A professional, interactive, and fully responsive personal portfolio website built with
pure **HTML5**, **CSS3**, and **vanilla JavaScript**. No frameworks, no build tools, no
dependencies. Dark & elegant luxury aesthetic with a crimson-gold colour palette.

> **Status:** Production-ready · v1.3.0 · © 2026 Gideon Tetteh Luotey

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
- Auto-dismisses after **4 seconds** with an animated gold progress bar countdown
- Clicking anywhere or pressing any key also dismisses it immediately

### Navigation
- Fixed top bar with scroll-triggered **frosted-glass effect**
- Active section auto-highlighted via `aria-current` as the user scrolls
- Fully responsive — collapses into a full-screen animated mobile overlay on
  screens ≤ 960px wide
- `Escape` key closes the mobile menu; body scroll is locked while it is open

### Hero Section
- Your photo renders as a **full-bleed cinematic background layer** —
  atmospheric, blended with dual gradient vignettes, not a passport/headshot style
- Crimson atmospheric glow adds depth on the right side of the screen
- Role descriptor line: *Engineer · Designer · Data Scientist · AI Engineer · Storyteller*

### Sections

| Section    | Description |
|------------|-------------|
| About      | Two-column biography, pull-quote, and personal detail cards |
| Skills     | Three-column grid with scroll-triggered animated progress bars |
| Projects   | Filterable 3-column grid — All / Development / AI & Data / Design |
| Experience | Tabbed timeline — click or use ↑ ↓ arrow keys to navigate |
| Services   | Four service cards with full deliverable lists |
| Articles   | Editorial blog layout — one featured card plus side articles |
| Contact    | Channel links + fully accessible contact form with submit feedback |

### Design Details
- Custom animated cursor — gold dot + lagging ring, expands on hover over interactives
- Subtle film-grain texture overlay across the entire site
- Cormorant Garamond for editorial headings, Syne for labels, DM Sans for body copy
- Diamond **GTL monogram** logo with double-border inner detail
- Scroll-reveal animations (`IntersectionObserver`) on all major elements
- Crimson-to-gold gradient on skill bars and project card hover lines
- Footer: centred column layout — GTL gem → socials → rule → copyright → back-to-top
- Dynamic copyright year — never needs manual updating

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
<div class="hero-photo-layer" aria-hidden="true">
  <div class="ph-img">
    <!-- SVG silhouette placeholder -->
  </div>
</div>
```

Replace the inner `<div class="ph-img">…</div>` with your actual image:

```html
<div class="hero-photo-layer" aria-hidden="true">
  <img src="your-photo.jpg" alt="" />
</div>
```

For best results with WebP (recommended format):

```html
<div class="hero-photo-layer" aria-hidden="true">
  <picture>
    <source srcset="your-photo.webp" type="image/webp" />
    <img src="your-photo.jpg" alt="" />
  </picture>
</div>
```

**Photo tips:**
- Use a **full-body or three-quarter editorial/lifestyle shot** — not a headshot
- Portrait orientation (taller than wide) fills the hero best
- Minimum resolution: **1200px tall**
- Target file size: **under 300 KB** after compression
- The CSS automatically applies `opacity: 0.18`, `grayscale(60%)`, `contrast(1.1)`,
  and two gradient vignettes — so the image blends cinematically into the background
- A lighter, more colourful photo will look more dramatic; a dark photo may be
  too subtle — adjust `opacity` in `style.css` under `.hero-photo-layer img` if needed

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

Each project is an `<article class="proj-card">` inside `#proj-grid` in `index.html`.

```html
<article class="proj-card" data-cat="ai">          <!-- filter category -->
  <p class="proj-num" aria-hidden="true">01</p>    <!-- display number -->
  <p class="proj-type">AI Engineering</p>          <!-- category label -->
  <h3 class="proj-title">Project Name Here</h3>
  <p class="proj-desc">Short description of the project.</p>
  <ul class="proj-pills" aria-label="Technologies used">
    <li class="proj-pill">React</li>
    <li class="proj-pill">Python</li>
  </ul>
  <a href="https://your-project-url.com" class="proj-link"
     aria-label="View Project Name project">View Project →</a>
</article>
```

**Filter categories** — set `data-cat` to one of:

| Value | Filter button |
|---|---|
| `ai` | AI & Data |
| `dev` | Development |
| `design` | Design |

To add a new project, duplicate any `<article class="proj-card">` block and update
the content. To remove one, delete the entire `<article>` block.

---

### 4.4 Editing Experience

Each role consists of two parts — a **tab** in `.exp-nav` and a **panel** in `.exp-panels`.
They are linked by matching `aria-controls` / `id` attributes.

**Tab (left column):**
```html
<div class="exp-tab" role="tab" aria-selected="false"
     aria-controls="ep1" tabindex="-1"
     onclick="showExp(1, this)" onkeydown="expKey(event, 1)">
  <p class="exp-tab-co">Company Name</p>
  <p class="exp-tab-role">Job Title · 2021–2022</p>
</div>
```

**Panel (right column):**
```html
<div id="ep1" class="exp-panel" role="tabpanel" aria-hidden="true">
  <p class="exp-date">2021 — 2022</p>
  <h3 class="exp-title">Job Title</h3>
  <p class="exp-co">Company Name</p>
  <ul class="exp-list">
    <li>What you achieved here.</li>
    <li>Another accomplishment.</li>
  </ul>
</div>
```

To add a new role, increment the index number throughout (e.g. `ep4` → `ep5`) and
add both a tab and a panel. The first tab/panel (index `0`) should always have
`aria-selected="true"` and `aria-hidden="false"` as the default active state.

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

### `index.html` — 761 lines

The single HTML document for the entire site. Structured as follows:

```
<head>
  charset, viewport, SEO meta, font imports, stylesheet link

<body>
  .skip-link             Keyboard accessibility — jumps to #main
  #c-dot / #c-ring       Custom cursor elements
  #splash                Quote overlay (text populated by script.js)
  <header>
    #nav                 Primary navigation bar
    #nav-mobile          Full-screen mobile menu overlay
  <main id="main">
    #hero                Name, descriptor, CTAs, cinematic photo layer
    #about               Biography + pull-quote + detail cards
    #skills              Three skill columns with animated bars
    #projects            Filterable project grid (6 cards)
    #experience          Tabbed career timeline (4 roles)
    #services            Four service cards with deliverable lists
    #blog                Editorial article grid (4 cards)
    #contact             Channel links + accessible contact form
  <footer>               Centred: GTL gem, socials, rule, copyright, back-to-top
  <script src="script.js" defer>
```

---

### `style.css` — 1,124 lines

All visual styling, organised in labelled sections:

| Section | Approx. Lines | What It Covers |
|---|---|---|
| Design Tokens | 1–22 | All CSS custom properties (colours, easing curve) |
| Reset | 23–52 | Box-sizing, margin reset, base element defaults |
| Skip Link | 53–63 | Keyboard nav accessibility link |
| Film Grain | 64–73 | `body::after` noise texture overlay |
| Custom Cursor | 74–103 | Dot + ring cursor with hover state expansion |
| Quote Splash | 104–148 | Full-screen overlay, progress bar, fade animation |
| Navigation | 149–272 | Fixed nav, logo gem, links, hamburger, mobile menu |
| Hero | 273–412 | Photo layer, vignettes, glow, name, descriptor, buttons, scroll cue |
| Section Shell | 413–462 | Shared section padding, eyebrow, headings, rule, reveal classes |
| About | 463–512 | Two-column grid, pull-quote, detail cards |
| Skills | 513–562 | Three-column grid, progress bars, tag cloud |
| Projects | 563–632 | Filter bar, project grid, card hover effects |
| Experience | 633–702 | Tab nav, panels, bullet list items |
| Services | 703–762 | Service cards, ghost background numbers |
| Blog | 763–812 | Editorial grid, featured spanning card |
| Contact | 813–912 | Channel links, form inputs, labels — all WCAG AA contrast |
| Footer | 913–982 | Centred column, GTL gem emblem, social links |
| Animations | 983–992 | `@keyframes fadeUp` |
| Responsive | 993–1124 | Media queries for ≤960px and ≤560px breakpoints |

---

### `script.js` — 225 lines

All JavaScript behaviour in clearly labelled sections:

| Section / Function | What It Does |
|---|---|
| `QUOTES` array | 16 hard-hitting inspirational quotes |
| `pickQuote()` | Random selection, avoids last shown via `localStorage` key `gtl_q` |
| `initSplash()` (IIFE) | Populates splash text, starts 4s auto-dismiss, binds click & keydown |
| `dismissSplash()` | Adds `.out` class (CSS fade), removes element from DOM after 1s |
| Cursor RAF loop | `requestAnimationFrame` tick — dot snaps to mouse; ring lags behind |
| Hover listeners | Adds/removes `.hovering` on `<body>` → CSS expands cursor ring |
| Nav scroll handler | Toggles `.solid` class on `#nav` when `scrollY > 60` |
| `toggleMobileNav()` | Opens/closes mobile menu; locks body scroll while open |
| `closeMobileNav()` | Resets menu + scroll lock; bound to `Escape` key |
| Reveal observer | `IntersectionObserver` — adds `.vis` to `.reveal` elements as they enter viewport |
| Bar observer | `IntersectionObserver` — animates `.bar-fill` width when skill columns scroll in |
| `showExp(idx)` | Sets `aria-selected` on tabs, `aria-hidden` on panels |
| `expKey(e, idx)` | ↑ ↓ arrow key navigation across experience tabs |
| `filterProj(cat)` | Sets `aria-pressed` on filter buttons; shows/hides cards by `data-cat` |
| `handleForm(e)` | Prevents default submit, shows "Sent ✓" state, resets form after 3.5s |
| Active nav observer | `IntersectionObserver` — applies `aria-current="page"` to nav links on scroll |
| `#ft-year` | Inserts `new Date().getFullYear()` into the footer copyright span |

---

## 6. Customisation Reference

### 6.1 Colours

All colours are CSS custom properties at the top of `style.css`. Change any value
and it cascades through the entire site instantly.

```css
:root {
  /* Backgrounds — darkest to lightest */
  --void:      #000000;   /* Page base background              */
  --deep:      #00111f;   /* Deep section backgrounds          */
  --card:      #001427;   /* Card / grid cell backgrounds      */
  --surface:   #03071e;   /* Alternate section backgrounds     */

  /* Accent colours */
  --crimson:   #6a040f;   /* Crimson red — type labels, bullets */
  --fire:      #9d0208;   /* Deeper red (available for use)    */
  --gold:      #c9a84c;   /* Primary gold accent               */
  --gold-lite: #e8c97a;   /* Light gold — hover states         */
  --gold-dim:  rgba(201, 168, 76, 0.12);  /* Subtle gold borders  */
  --gold-mid:  rgba(201, 168, 76, 0.35);  /* Medium gold borders  */

  /* Text tiers */
  --text-1:    #f0ead6;   /* Primary — headings, values, nav   */
  --text-2:    #c2b89e;   /* Secondary — body copy, subtitles  */
  --text-3:    #7a7060;   /* Muted — decorative / metadata     */

  /* Easing */
  --ease:      cubic-bezier(0.4, 0, 0.2, 1);
}
```

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
.srv-grid { grid-template-columns: repeat(1, 1fr); }  /* stacked */
.srv-grid { grid-template-columns: repeat(3, 1fr); }  /* 3 columns */
```

**Blog grid** (default: 5fr 3fr 3fr — featured + two side):
```css
.blog-grid { grid-template-columns: 1fr 1fr 1fr; }  /* equal columns */
.blog-grid { grid-template-columns: 1fr 1fr; }       /* two columns */
```

---

## 7. Accessibility

This site is built to meet **WCAG 2.1 Level AA** standards throughout.

| Standard | Implementation |
|---|---|
| Semantic HTML5 | `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>` used correctly |
| Section labels | All `<section>` elements have `aria-labelledby` pointing to their `<h2>` |
| Skip link | Visible-on-focus skip-to-content link at the top of the page |
| Tab pattern | Experience section uses full ARIA tab pattern: `role="tab"`, `aria-selected`, `aria-controls`, `role="tabpanel"`, `aria-hidden` |
| Keyboard nav | ↑ ↓ arrow keys navigate between experience tabs |
| Filter buttons | `aria-pressed="true/false"` reflects current active filter |
| Link labels | All ambiguous links (e.g. "View Project →") have descriptive `aria-label` |
| Form labels | All inputs have associated `<label for="…">` and `autocomplete` attributes |
| Focus indicator | `focus-visible` ring styled in gold — visible and distinct |
| Decorative elements | All decorative elements have `aria-hidden="true"` |
| Colour contrast | All body text meets AA ratio (≥ 4.5:1) against background colours |
| Motion | Animations use `transition` and `IntersectionObserver` — no auto-playing video |
| Mobile menu | `aria-expanded` on toggle button reflects open/closed state |

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
- [ ] All six project cards have real titles, descriptions, and working links
- [ ] Experience section reflects your actual career history
- [ ] Blog articles either link to real posts, or placeholder cards are updated
- [ ] Hero year (`Portfolio · 2026`) is current
- [ ] Footer copyright year updates automatically ✓ (handled by JS)

**Technical**
- [ ] All three files (`index.html`, `style.css`, `script.js`) are in the same folder
- [ ] Photo is compressed to under 300 KB and in WebP format if possible
- [ ] SEO meta tags, OG tags, and Twitter Card tags are filled in with your domain
- [ ] Favicon files are in the folder (`favicon-32.png`, `favicon-16.png`, `apple-touch-icon.png`)
- [ ] Canonical URL `<link>` points to your live domain
- [ ] Tested in Chrome, Firefox, and Safari
- [ ] Tested on a real physical mobile device (not just browser DevTools)
- [ ] Lighthouse audit run — Performance, Accessibility, SEO all green
- [ ] All visible text has been spell-checked

**After Launch**
- [ ] URL submitted to [Google Search Console](https://search.google.com/search-console)
- [ ] Portfolio URL added to your LinkedIn profile (Featured or About section)
- [ ] URL in your email signature
- [ ] URL in your social media bios (X, GitHub, Behance)
- [ ] OG preview tested at [opengraph.xyz](https://www.opengraph.xyz) or
      [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

---

## 13. FAQ

**Q: Why isn't the custom cursor visible on mobile?**

The cursor is driven by `mousemove` events, which don't fire on touchscreens.
The `cursor: none` on `body` is intentional for desktop only — on touch devices,
the native tap interaction takes over automatically. This is correct behaviour.

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

- **[Formspree](https://formspree.io)** — add `method="POST" action="https://formspree.io/f/YOUR_ID"` to the `<form>` tag and remove the `onsubmit` handler
- **[Web3Forms](https://web3forms.com)** — free, no server, works with a hidden `access_key` input
- **[EmailJS](https://emailjs.com)** — sends emails directly from JavaScript, no server needed

---

**Q: How do I add a Testimonials section?**

1. In `index.html`, duplicate any `<section>` block and give it a unique `id` (e.g. `id="testimonials"`)
2. Add a nav link: `<li><a href="#testimonials">Testimonials</a></li>` in `.nav-list` and `#nav-mobile`
3. Style the section in `style.css` using `.section-alt` or `.section-deep` as the background class
4. Use a grid or flex layout for the testimonial cards, following the same card patterns as Services or Projects

---

**Q: Can I remove the skill percentage numbers?**

Yes. In `index.html`, find each `.bar-meta` div and remove the second `<span>` (the one with the percentage). You can also remove the `.bar-track` and `.bar-fill` entirely and use only the `.tag-cloud` if you prefer a tag-only approach.

---

**Q: The hero photo is too dark / too light. How do I adjust it?**

In `style.css`, find `.hero-photo-layer img` and adjust the `opacity` value:

```css
.hero-photo-layer img {
  opacity: 0.18;        /* increase for more visible, decrease for subtler */
  filter: grayscale(60%) contrast(1.1);  /* adjust or remove grayscale as needed */
}
```

You can also modify the gradient vignettes in `.hero-photo-layer::after` to change
how aggressively the edges fade.

---

**Q: How do I make the site's colours lighter or less dark?**

Change `--void`, `--deep`, `--card`, and `--surface` in `style.css` to lighter values.
For example, replacing `--void: #000000` with `--void: #0a0a0a` adds a very subtle
lift. For a fully light theme, swap all background tokens to light greys and all text
tokens to dark values — but you will also need to invert the gradient directions
and adjust border opacities throughout.

---

**Q: Can I add more experience tabs beyond four?**

Yes. In `index.html`:
1. Add a new `.exp-tab` div to `.exp-nav` with the correct index (e.g. `onclick="showExp(4, this)"`, `aria-controls="ep4"`)
2. Add a matching `<div id="ep4" class="exp-panel" role="tabpanel" aria-hidden="true">` to `.exp-panels`
3. No CSS changes are needed — the tab styles are already generic

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

### v1.2.0 — 2026
**Quote system overhaul & hero redesign**
- Voice synthesis (`SpeechSynthesisUtterance`) removed — replaced with silent
  visual-only quote display
- Splash auto-dismisses after 4 seconds with animated gold progress bar
- Clicking anywhere or pressing any key dismisses splash immediately
- 16-quote pool implemented in `script.js`
- `localStorage` key `gtl_q` prevents back-to-back quote repeats across visits
- Hero stats strip (years / projects / clients) removed as requested
- Hero photo changed from rectangular portrait frame to full-bleed cinematic
  background layer with dual gradient vignettes and `grayscale` filter
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
- Experience section upgraded to full ARIA tab pattern with `role="tab"`,
  `aria-selected`, `aria-controls`, `role="tabpanel"`, `aria-hidden`
- ↑ ↓ arrow key navigation added to experience tabs via `expKey()`
- Filter buttons use `aria-pressed="true/false"`
- `focus-visible` ring styled in gold
- All meaningful links given descriptive `aria-label` attributes
- Form inputs given `<label for>` associations and `autocomplete` attributes
- Mobile hamburger menu added with full-screen animated overlay
- `Escape` key closes mobile menu
- Body scroll locked while mobile menu is open

---

### v1.0.0 — 2026
**Initial build**
- All eight sections implemented: Hero, About, Skills, Projects, Experience,
  Services, Articles, Contact
- Custom animated cursor — gold dot + lagging ring with hover expansion
- Film-grain texture overlay via inline SVG `feTurbulence` filter
- Diamond GTL monogram logo with double-border inner detail
- Scroll-reveal animations on all major elements via `IntersectionObserver`
- Animated skill progress bars triggered on scroll entry
- Project filter — All / Development / AI & Data / Design
- Tabbed experience timeline with 4 career entries
- Contact form with visual submit confirmation (resets after 3.5s)
- Responsive layout — single column below 960px, stacked hero on mobile
- Dark & elegant luxury aesthetic — crimson-gold palette on near-black backgrounds

---

## 15. Author

**Gideon Tetteh Luotey**  
Web Developer · Data Scientist · AI Engineer · Graphic Designer · Video Editor  
Accra, Ghana 🇬🇭

| Platform | Handle / URL |
|---|---|
| Email | gideon@example.com |
| LinkedIn | linkedin.com/in/gideon-luotey |
| GitHub | github.com/gideon-luotey |
| X / Twitter | @gideon_luotey |
| Behance | behance.net/gideon-luotey |

---

## 16. License

This codebase is **personal and proprietary**.

© 2026 Gideon Tetteh Luotey. All rights reserved.

This project and its source files may **not** be copied, reused, redistributed,
resold, or used as a template for other projects without explicit written
permission from the author.

---

*Built from scratch — no templates, no frameworks, no shortcuts.*
