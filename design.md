# Design Tokens

Alle Tokens sind als CSS Custom Properties in `:root` von `styles.css` definiert.
Zuletzt aktualisiert: 2026-02-22.

---

## Farben

### Brand / Primary
| Variable                  | Wert                      | Verwendung                           |
|---------------------------|---------------------------|--------------------------------------|
| `--color-primary`         | `#5A84D8`                 | Buttons, Accents, Links, Topic-Boxen |
| `--color-primary-hover`   | `#4a72c4`                 | Button-Hover-States                  |
| `--color-nav-cta`         | `var(--color-primary)`    | Nav CTA-Button (referenziert primary)|
| `--color-nav-cta-hover`   | `var(--color-primary-hover)` | Nav CTA Hover                     |

### Dark Backgrounds
| Variable                  | Wert      | Verwendung                     |
|---------------------------|-----------|--------------------------------|
| `--color-dark-navy`       | `#12254f` | Top-Bar, Footer, Mobile-Menu   |
| `--color-dark-title`      | `#1f2d48` | CTA-Card-Headings, Prozess-Cards |
| `--color-hero-dark-1`     | `#2a2b2f` | Hero Gradient Start            |
| `--color-hero-dark-2`     | `#36373b` | Hero Gradient Mitte            |
| `--color-hero-dark-3`     | `#2e3348` | Hero Gradient Ende             |
| `--color-hero-accent`     | `#7ba3f0` | Hero-Divider Gradient-Ende     |

### Text
| Variable                  | Wert      | Verwendung                     |
|---------------------------|-----------|--------------------------------|
| `--color-text`            | `#333`    | Body-Text, Headings            |
| `--color-text-article`    | `#444`    | Artikel-Fliesstext             |
| `--color-text-muted`      | `#555`    | Labels, Kontaktinfo, Kicker    |
| `--color-text-secondary`  | `#666`    | Descriptions, Kicker-Text, TOC |
| `--color-text-light`      | `#999`    | Placeholder, Datums-Anzeigen   |
| `--color-cta-text`        | `#495b79` | CTA-Card Fliesstext            |
| `--color-cta-role`        | `#6e7f9f` | CTA-Card Berufsbezeichnung     |

### Backgrounds
| Variable                     | Wert      | Verwendung                  |
|------------------------------|-----------|------------------------------|
| `--color-bg-light`           | `#f5f5f5` | Sektionshintergruende        |
| `--color-bg-cta-card`        | `#f3f4f6` | CTA-Card, Glossary-Tags      |
| `--color-bg-secondary-hover` | `#e9edf3` | Hover-States (Tags etc.)     |

### Borders
| Variable                  | Wert      | Verwendung                     |
|---------------------------|-----------|--------------------------------|
| `--color-border`          | `#ccc`    | Standard-Rahmenlinie           |
| `--color-border-secondary`| `#d4d9e3` | Feinere Rahmenlinien           |
| `--color-border-soft`     | `#cfcfcf` | Kicker, Pills, Tags           |
| `--color-border-light`    | `#edf1f7` | Kontakt/Impressum-Zeilen       |

---

## Shadows
| Variable         | Wert                                    | Verwendung              |
|------------------|-----------------------------------------|-------------------------|
| `--shadow-xs`    | `0 1px 3px rgba(0,0,0,0.03)`           | Navbar                  |
| `--shadow-sm`    | `0 2px 12px rgba(0,0,0,0.08)`          | Topics-Boxen, Glossary  |
| `--shadow-md`    | `0 4px 16px rgba(0,0,0,0.1)`           | Search-Results          |
| `--shadow-lg`    | `0 10px 26px rgba(18,37,79,0.06)`      | Cards, CTA              |
| `--shadow-focus` | `0 0 0 3px rgba(90,132,216,0.18)`      | Focus-Ring (Inputs)     |

---

## Line-Heights
| Variable            | Wert   | Verwendung                          |
|---------------------|--------|-------------------------------------|
| `--leading-tight`   | `1.2`  | Headings, kompakte Elemente         |
| `--leading-normal`  | `1.6`  | Body-Text, Standard                 |
| `--leading-relaxed` | `1.75` | Artikel-Text, Descriptions, FAQ     |

Verbleibende Werte: `1.4` (Nav-Menu, TOC, Contact-Meta), `1.45` (CTA-Contact), `1.5` (Footer) bleiben hardcoded — zu spezifisch fuer generische Tokens.

---

## Spacing
| Variable       | Wert   | Typische Verwendung                 |
|----------------|--------|-------------------------------------|
| `--space-xs`   | `4px`  | Pill-Padding, kleine Gaps           |
| `--space-sm`   | `8px`  | Top-Bar-Padding, Icon-Gaps          |
| `--space-md`   | `16px` | Card-Padding, Steps-Gaps            |
| `--space-lg`   | `24px` | Portrait-Row-Gap, CTA-Padding       |
| `--space-xl`   | `40px` | Section-Padding (seitlich)          |
| `--space-2xl`  | `60px` | Section-Gaps, Hero-Padding           |

Spacing-Tokens stehen zur Verfuegung, werden aber noch nicht ueberall eingesetzt (geringes Regressionsrisiko bei Retrofit).

---

## Typografie

### Font-Stack
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
```

### Font-Weights (standardisiert)
| Wert | Verwendung                                    |
|------|-----------------------------------------------|
| 300  | Hero-H1, Contact-H2, leichte Texte           |
| 400  | Section-H2 (uppercase), FAQ, Nav-Menu         |
| 500  | Top-Bar-Name, Hero-Pill, Glossary-Tags        |
| 600  | Kicker, CTA-Buttons, Labels, TOC-Active       |
| 700  | Nav-Logo-Name, Article-Headings, Glossary-Title |
| 800  | Dekorative Sektionsnummern (nur)              |

---

## Layout
| Variable              | Wert     | Verwendung                |
|-----------------------|----------|---------------------------|
| `--max-width`         | `1200px` | Container-Maximalbreite   |
| `--max-width-article` | `720px`  | Artikel-Lesebreite        |

### Breakpoints
| Breakpoint  | Verwendung                                |
|-------------|-------------------------------------------|
| `768px`     | Haupt-Breakpoint (Mobile/Desktop)         |
| `1100px`    | Artikel-TOC, Impressum-Grid               |

### Border-Radius
| Wert     | Verwendung                                   |
|----------|----------------------------------------------|
| `0`      | Buttons, Cards, CTA, Inputs (bewusst eckig)  |
| `2px`    | CTA-Contact-Icon                             |
| `8px`    | Glossary-Filter-Input                        |
| `50px`   | Article-Updated-Pill                         |
| `999px`  | Kicker, Tags (Pill-Form)                     |
