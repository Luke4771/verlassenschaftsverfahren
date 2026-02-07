# Verlassenschaftsverfahren.at

## What This Is
A static informational website about Austrian inheritance law (Erbrecht), operated by Dr. Martin Cvikl, attorney at law in Vienna. The site serves as a topic portal covering probate procedures, inheritance rights, and related legal matters.

## Tech Stack
- **Pure HTML5, CSS3, vanilla JavaScript** — no frameworks, no build process, no package manager
- Single stylesheet: `styles.css` (~520 lines)
- JavaScript is minimal (hamburger menu toggle only)
- All content is in German

## File Structure
```
├── index.html              # Landing page (hero, topic grid, contact form, footer)
├── impressum.html          # Legal imprint page
├── styles.css              # All styles in one file
├── articles/               # 24 article pages (same navbar/footer as index)
│   ├── ablauf-verlassenschaftsverfahren.html
│   ├── ...                 # (24 articles total across 4 legal topic categories)
├── images/
│   ├── logo.png            # Site logo (MC monogram)
│   ├── hero.jpg            # Hero section image
│   └── article_images/     # Diagrams and infographics for articles (PNG)
├── layout reference/       # Design mockups (not part of deployed site)
├── update-nav.sh           # Bash script to sync navbar across all article pages
├── architecture.md         # German-language architecture doc
├── design.md               # Color definitions
└── CLAUDE.md               # AI assistant instructions
```

## Page Architecture (index.html)
1. **Top Bar** (`.top-bar`) — blue bar with contact info (phone, email, address)
2. **Navbar** (`.navbar`) — sticky, logo left, 3 centered links (Home, Themenübersicht, Kontakt), hamburger on mobile
3. **Hero** (`.hero`) — title + tagline left, image right; stacks vertically on mobile
4. **Themenübersicht** (`.themen`) — 2x2 grid of topic boxes, each containing article links
5. **Kontakt** (`.kontakt`) — Google Maps embed + contact form side by side
6. **Footer** (`.footer`) — Impressum/Datenschutz links, copyright

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
| Role                       | Hex       |
|----------------------------|-----------|
| Hero / Navbar / Footer bg  | `#36373b` |
| Top bar / Primary buttons  | `#5A84D8` |
| Topic boxes                | `#8ea7d8` |
| Section backgrounds        | `#f0f0f0` |
| Body text                  | `#333`    |

## Responsive Design
- Single breakpoint at **768px**
- Grid collapses from 2 columns to 1
- Hero stacks vertically (text above image)
- Contact section stacks vertically
- Hamburger menu replaces horizontal nav links

## Key Conventions
- No build step — edit files directly and deploy
- Navigation uses anchor links (`#home`, `#wichtige-themen`, `#kontakt`)
- Smooth scrolling via CSS `scroll-behavior: smooth`
- Keep changes minimal and simple (see CLAUDE.md)
