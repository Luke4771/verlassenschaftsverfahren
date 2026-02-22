# Verlassenschaftsverfahren.at

## What This Is
A static informational website about Austrian inheritance law (Erbrecht), operated by Dr. Martin Cvikl, attorney at law in Vienna. The site serves as a topic portal covering probate procedures, inheritance rights, and related legal matters.

## Tech Stack
- **Pure HTML5, CSS3, vanilla JavaScript** — no frameworks, no build process, no package manager
- Single stylesheet: `styles.css` (~930 lines, includes CSS custom properties)
- JavaScript: `js/nav-toggle.js` (shared hamburger menu) + `access/access-guard.js` (access control)
- All content is in German

## File Structure
```
├── index.html              # Landing page (hero, topic grid, contact form, footer)
├── impressum.html          # Legal imprint page
├── styles.css              # All styles in one file (CSS custom properties at top)
├── js/
│   └── nav-toggle.js       # Shared hamburger menu toggle script
├── articles/               # 23 article pages (same navbar/footer as index)
│   ├── ablauf-verlassenschaftsverfahren.html
│   ├── ...                 # (23 articles total across 4 legal topic categories)
├── access/
│   ├── access-guard.js     # Client-side access control guard
│   └── login.html          # Password login page
├── images/
│   ├── logo.png            # Site logo (MC monogram)
│   ├── hero.jpg            # Hero section image
│   └── article_images/     # Diagrams and infographics for articles (PNG)
├── layout reference/       # Design mockups (not part of deployed site)
├── update-nav.sh           # Syncs top-bar, navbar & footer from index.html to all pages
├── architecture.md         # German-language architecture doc
├── design.md               # Color definitions
└── CLAUDE.md               # AI assistant instructions
```

## Page Architecture (index.html)
1. **Top Bar** (`.top-bar`) — blue bar with three-column layout: name left (`.top-bar-left`), phone/email center (`.top-bar-center`), address right (`.top-bar-right`)
2. **Navbar** (`.navbar` > `.navbar-content`) — sticky, logo + text left (`.nav-logo` with `.nav-logo-text`), 2 centered links (Start, Themenübersicht), CTA button right (`.nav-cta` "Beratungstermin"), hamburger on mobile
3. **Hero** (`.hero`) — title + tagline left, image right; stacks vertically on mobile
4. **Themenübersicht** (`.themen`) — 2x2 grid of topic boxes, each containing article links
5. **Kontakt** (`.kontakt`) — Google Maps embed + contact form side by side
6. **Footer** (`.footer` > `.footer-content`) — brand text (`.footer-brand`), links (Impressum/Datenschutz/Cookies), copyright

## Article Pages (`/articles/`)
- Share the same navbar and footer as the landing page
- Link back to index via "Zurück" button
- Reference `../styles.css` (relative path)
- Many still contain placeholder text ("Artikelinhalt folgt.")
- When the navbar changes, run `bash update-nav.sh` to sync across all pages

## 4 Article Categories (24 articles total)
1. **Allgemeines Erb- und Pflichtteilsrecht** (9 articles) — legal succession, mandatory portions, renunciation, etc.
2. **Verlassenschaftsverfahren** (8 articles) — probate process, costs, court approval, foreign assets, etc.
3. **Erbrecht und Immobilienrecht** (3 articles) — condos, property valuation, gift crediting
4. **Erbrecht und Unternehmensrecht** (3 articles) — sole proprietorships, partnerships, GmbH shares

## Color Palette
All colors are defined as CSS custom properties in the `:root` block of `styles.css`. Key variables:

| Variable                   | Hex       | Role                          |
|----------------------------|-----------|-------------------------------|
| `--color-primary`          | `#5A84D8` | Buttons, accents, links       |
| `--color-nav-cta`          | `#3B6BDE` | Nav CTA button                |
| `--color-dark-navy`        | `#1a2744` | Top bar, footer background    |
| `--color-hero-dark-2`      | `#36373b` | Hero section background       |
| `--color-bg-light`         | `#f0f0f0` | Section backgrounds           |
| `--color-text`             | `#333`    | Body text                     |

## Responsive Design
- Single breakpoint at **768px**
- Grid collapses from 2 columns to 1
- Hero stacks vertically (text above image)
- Contact section stacks vertically
- Hamburger menu replaces horizontal nav links

## Shared Layout Components (Top Bar, Navbar, Footer)
The top bar, navbar, and footer are **duplicated** across three page types. When any of these components change:
1. Edit **`index.html`** — the canonical source of truth
2. Run **`bash update-nav.sh`** — automatically syncs top-bar, navbar, and footer to all `articles/*.html` and `impressum.html`, adjusting paths correctly (`../` for articles, `index.html#` for impressum anchors)
3. Use `bash update-nav.sh --dry-run` to preview changes before applying

## Key Conventions
- No build step — edit files directly and deploy
- Navigation uses anchor links (`#home`, `#wichtige-themen`, `#kontakt`)
- Smooth scrolling via CSS `scroll-behavior: smooth`
- Keep changes minimal and simple (see CLAUDE.md)

## Documentation Context
A dedicated `docs/` folder now exists and provides specific context for this website.
Start with `docs/index.md`, then read the relevant context files for the task (`docs/architecture.md`, `docs/content-model.md`, `docs/workflows.md`, `docs/operations.md`, `docs/scrap.md`).
