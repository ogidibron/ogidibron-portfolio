# Portfolio Redesign Plan (Legacy — Superseded by v2)

> **Status:** This document is archived. The current implementation follows
> [`plans/portfolio-redesign-v2.md`](portfolio-redesign-v2.md), which describes
> the light/vibrant theme, dark mode toggle, particle canvas, card/timeline layouts,
> and modern JavaScript event binding. Do not use this plan for ongoing work.

## Executive Summary (Original Intent)

This document originally outlined a comprehensive redesign of the Gideon Tetteh Luotey portfolio to improve visual aesthetics, color harmony, and responsive behavior across all devices. The v1 redesign focused on a dark luxury crimson-gold palette, refined typography, and enhanced micro-interactions.

---

## 1. Color System Analysis & Redesign

### Current Issues
- `--text-3: #7a7060` has low contrast against dark backgrounds (fails WCAG AA)
- `--text-2: #c2b89e` is good but could be more vibrant
- The crimson-gold palette is strong but could benefit from more nuanced variations
- Some UI elements lack visual distinction in their interactive states

### Proposed New Color System

```css
:root {
  /* Backgrounds — darkest to lightest */
  --void:       #000000;   /* Page base background */
  --deep:       #00111f;   /* Deep section backgrounds */
  --card:       #001427;   /* Card backgrounds */
  --surface:    #03071e;   /* Alternate section backgrounds */
  
  /* Accent colors - refined for better harmony */
  --crimson:    #8a0319;   /* Primary red - more vibrant */
  --fire:       #bb2a2a;   /* Deeper red for errors/alerts */
  --gold:       #c9a84c;   /* Primary gold accent */
  --gold-lite:  #e8c97a;   /* Light gold — hover states */
  --gold-bright: #f9d98d;  /* Brighter gold for emphasis */
  
  /* Text tiers - improved contrast */
  --text-1:     #f0ead6;   /* Primary — headings, values (AAA on dark) */
  --text-2:     #d4c9b0;   /* Secondary — body copy (AA on dark) */
  --text-3:     #a89d8a;   /* Muted — improved contrast (AA on dark) */
  --text-muted: #7a7060;   /* For decorative elements only */
  
  /* Gradients & overlays */
  --gold-dim:   rgba(201, 168, 76, 0.12);
  --gold-mid:   rgba(201, 168, 76, 0.35);
  --gold-glow:  rgba(201, 168, 76, 0.15);
  --crimson-glow: rgba(138, 3, 25, 0.15);
}
```

### Color Contrast Improvements
- All text now meets WCAG AA (4.5:1) or AAA (7:1) standards
- Added `--gold-bright` for important interactive elements
- Improved `--text-3` for better readability in muted contexts

---

## 2. Responsive Breakpoint Strategy

### Current Breakpoints
- 960px: Mobile nav, single column layouts
- 560px: Button stacking, skill cards

### Proposed Enhanced Breakpoints

```css
/* Mobile first approach */
@media (min-width: 560px) { /* Small tablet / large mobile */
  /* Adjust padding, font sizes */
}

@media (min-width: 768px) { /* Tablet portrait */
  /* Two column layouts where appropriate */
}

@media (min-width: 960px) { /* Tablet landscape / small desktop */
  /* Full navigation, multi-column grids */
}

@media (min-width: 1024px) { /* Standard desktop */
  /* Wider grids, more spacing */
}

@media (min-width: 1280px) { /* Large desktop */
  /* Max-width containers, extra breathing room */
}

@media (min-width: 1440px) { /* Ultra-wide */
  /* Constrain max width, center content */
}
```

### Mobile-Specific Improvements
- Better touch targets (minimum 44px)
- Improved scroll behavior on mobile
- Sticky elements reconsidered for mobile
- Font size adjustments for readability

---

## 3. Layout Grid Restructuring

### Current Issues
- Inconsistent grid column counts across sections
- Some sections use 1.5px gaps which are hard to see
- No max-width constraints on large screens

### Proposed Grid System

| Section | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero | Full viewport | Full viewport | Full viewport |
| About | 2 columns (1.2fr 1fr) | 1 column | 1 column |
| Skills | 3 columns | 2 columns | 1 column |
| Projects | 3 columns | 2 columns | 1 column |
| Experience | Tab + Panel (220px 1fr) | 1 column | 1 column |
| Services | 3 columns | 2 columns | 1 column |
| Blog | 5fr 3fr 3fr | 1fr 1fr | 1 column |
| Contact | 1fr 1fr | 1 column | 1 column |

### Spacing Scale (CSS Custom Properties)

```css
:root {
  --space-3xs: 0.25rem;
  --space-2xs: 0.5rem;
  --space-xs: 0.75rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 5rem;
}
```

---

## 4. Typography Improvements

### Current Issues
- Some font sizes are too small on mobile
- Line heights could be more consistent
- No fluid typography for intermediate viewports

### Proposed Typography Scale

```css
:root {
  --font-xs: clamp(0.68rem, 1.5vw, 0.75rem);
  --font-sm: clamp(0.82rem, 1.8vw, 0.95rem);
  --font-md: clamp(0.95rem, 2vw, 1.1rem);
  --font-lg: clamp(1.1rem, 2.5vw, 1.3rem);
  --font-xl: clamp(1.5rem, 3vw, 2rem);
  --font-2xl: clamp(2rem, 4vw, 3rem);
  --font-3xl: clamp(2.5rem, 5vw, 4rem);
}
```

### Font Pairing Refinements
- **Cormorant Garamond**: Headings, names, pullquotes
- **Syne**: Navigation, labels, UI elements
- **DM Sans**: Body copy, forms, metadata

---

## 5. Section-by-Section Improvements

### Hero Section
- Add subtle parallax effect on scroll
- Improve text contrast against background image
- Add scroll indicator animation
- Better mobile padding

### About Section
- Improve the two-column layout balance
- Add subtle hover effects on detail cards
- Better pullquote styling

### Skills Section
- Add progress bar animations
- Improve skill card hover states
- Better icon integration

### Projects Section
- Add project category badges
- Improve filter button design
- Add project preview on hover
- Better empty state for filtered results

### Experience Section
- Convert to accordion on mobile
- Add timeline visualization
- Better date formatting

### Services Section
- Add service icons
- Improve list styling
- Add "Learn More" links

### Blog Section
- Add featured image support
- Better category styling
- Reading time indicator

### Contact Section
- Add form validation feedback
- Improve input focus states
- Add success/error toasts

### Footer
- Better social icon design
- Improved back-to-top button
- Copyright year animation

---

## 6. Micro-interactions & Animations

### New Animations
- Button hover states with scale and shadow
- Card hover with subtle lift effect
- Navigation link underline animation
- Form input focus glow
- Scroll progress indicator

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Accessibility Enhancements

- Ensure all interactive elements have visible focus states
- Add `aria-live` regions for dynamic content
- Improve color contrast ratios
- Add skip link improvements
- Better form error messaging

---

## 8. Implementation Priority (Original)

1. **Phase 1**: Color system and typography (foundation)
2. **Phase 2**: Responsive breakpoints and grid layouts
3. **Phase 3**: Section-specific improvements
4. **Phase 4**: Micro-interactions and animations
5. **Phase 5**: Accessibility and testing

---

## 9. Optional Enhancements (Original)

- Dark/light mode toggle
- Custom cursor improvements
- Loading state animations
- Print styles for resume

---

## 10. Testing Checklist (Original)

- [ ] Color contrast meets WCAG AA standards
- [ ] All interactive elements keyboard accessible
- [ ] Mobile navigation works on all devices
- [ ] Forms validate properly
- [ ] Page loads under 3 seconds
- [ ] No horizontal scroll on mobile
- [ ] Text readable without zoom on mobile

---

## 11. Migration Note

This plan was written for a v1 redesign that retained the dark luxury aesthetic.
The actual v2 implementation diverged significantly:

| v1 Plan (this doc) | v2 Implementation |
|---|---|
| Dark luxury crimson-gold palette | Light vibrant indigo/violet/cyan palette |
| Custom animated cursor | Native cursor restored |
| Film-grain SVG overlay | Particle canvas background |
| `.hero-photo-layer` full-bleed image | `.hero-photo` circular profile photo |
| `.proj-card` filter grid | `.project-card` card grid |
| `.exp-tab` / `.exp-panel` ARIA tabs | `.timeline-item` vertical timeline |
| `.bar-fill` animated progress bars | `.skill-card` filterable category cards |
| `.reveal` / `.vis` scroll classes | `.visible` scroll class |
| `showExp()` / `expKey()` JS | Static timeline, no tab JS |
| `filterProj()` JS | `showSkills()` JS with `data-category` |
| Old form IDs (`#f-name` etc.) | Same IDs retained but validation updated |

For the current direction, see [`plans/portfolio-redesign-v2.md`](portfolio-redesign-v2.md).