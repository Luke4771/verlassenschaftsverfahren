# Architektur – Verlassenschaftsverfahren.at

## Überblick
Statische Informationswebsite zu Erbrecht/Verlassenschaft (reines HTML/CSS/kleines Inline-JS).  
Es gibt keinen Build-Prozess, keine Abhängigkeiten und kein Backend.

## Dateistruktur
```
/
├── index.html                  — Startseite
├── impressum.html              — Impressum
├── styles.css                  — Zentrale Styles für alle Seiten
├── articles/                   — 23 Artikel-Unterseiten
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── martin.webp
│   └── article_images/         — Diagramme/Grafiken für Artikel
├── layout reference/           — Design-Referenzmaterial (nicht produktiv)
├── about.md                    — Projektbeschreibung
├── design.md                   — Farbdefinitionen
├── update-nav.sh               — Synchronisiert Navbar in allen Artikeln
├── architecture.md             — Diese Datei
└── CLAUDE.md                   — Agent-Hinweise
```

## Seitenaufbau (Startseite)
1. Top-Bar (`.top-bar`) mit Kontaktinfos
2. Navbar (`.navbar`) mit Logo, Links, Mobile-Toggle
3. Hero (`.hero`) mit Intro-Text und Bild
4. Themenübersicht (`.themen`) als 2x2-Grid mit Artikellinks
5. Kontakt (`.kontakt`) mit Karte + Formular
6. Footer (`.footer`)

## Artikelaufbau (articles/*.html)
- Gemeinsamer Header/Footer wie Startseite
- Gemeinsame Styles aus `../styles.css`
- Inhaltscontainer: `<main class="article"><div class="article-content">...`
- Inhaltsblöcke: primär `<h1>`, `<h2>`, `<p>`, `<img class="article-image">`
- Zurück-Link am Beginn (`.article-back`)

## Artikelinhalte und Bilder
- Text- und Bildinhalte wurden für 19 Seiten von `https://www.verlassenschaftsverfahren.at/` titelbasiert zugeordnet.
- Bildquellen liegen lokal in `images/article_images/` und werden über relative Pfade in den Artikeln eingebunden.
- In den Fließtexten wird Hervorhebung über `<strong>` verwendet.

### Aktueller Inhaltsstatus
- Mit Inhalt befüllt: 19 Artikeldateien
- Weiterhin Platzhalter:  
  `articles/erbteilung-miterben.html`  
  `articles/erbunwuerdigkeit-enterbung.html`  
  `articles/kosten-steuern.html`  
  `articles/pflichtteilsrecht.html`

## Styling und Responsivität
- Zentrale Farbwerte:
  - Hero/Navbar/Footer: `#36373b`
  - Top-Bar/Buttons: `#5A84D8`
  - Themenboxen: `#8ea7d8`
  - Sektion-Hintergrund: `#f0f0f0`
- Breakpoint bei `768px`:
  - Navigation wird zu Hamburger-Menü
  - Grid/Spalten werden gestapelt

## Wartung
- Navbar-Änderung global auf Artikel anwenden: `bash update-nav.sh`
- Bei Content-Updates auf korrekte Titelzuordnung + passendes Bild in `images/article_images/` achten.
