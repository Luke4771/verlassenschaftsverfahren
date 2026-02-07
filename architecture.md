# Architektur – Verlassenschaftsverfahren.at

## Überblick
Statische Landing Page für eine Informationsseite über österreichisches Erbrecht. Keine Frameworks, kein Build-Prozess — reines HTML und CSS.

## Dateistruktur
```
/
├── index.html                  — Haupt-Landing-Page
├── styles.css                  — Alle Styles (eine Datei)
├── images/
│   └── logo.png                — MC-Logo
├── articles/
│   └── sicherstellung-pflichtteilsansprueche.html  — Erster Artikel
├── layout reference/           — Design-Referenzbilder (nicht Teil der Website)
├── about.md                    — Projektbeschreibung
├── design.md                   — Farb-Definitionen
├── update-nav.sh               — Script: aktualisiert die Navbar in allen Artikel-Seiten
├── architecture.md             — Diese Datei
└── CLAUDE.md                   — Anweisungen für Claude
```

## Seitenaufbau (index.html)
1. **Top-Bar** (`.top-bar`) — Blaue Leiste mit Kontaktdaten
2. **Navbar** (`.navbar`) — Logo links, 3 Menüpunkte zentriert (Anker-Links)
3. **Hero** (`.hero`) — Titel, Divider, Tagline + Platzhalter rechts
4. **Themenübersicht** (`.themen`) — 4 Boxen im 2x2-Grid mit Kategorie-Überschriften und Artikel-Links
5. **Kontakt** (`.kontakt`) — Google Maps links, Kontaktinfo + Formular rechts
6. **Footer** (`.footer`) — Impressum, Datenschutz, Copyright

## Artikel-Seiten
- Liegen in `/articles/`
- Verwenden dieselbe `styles.css` (relativer Pfad: `../styles.css`)
- Haben dieselbe Navbar und Footer wie die Landing Page
- Enthalten einen Zurück-Link zur Landing Page
- **Navbar-Änderungen** müssen auch in allen Artikel-Seiten übernommen werden → dafür `update-nav.sh` anpassen und ausführen (`bash update-nav.sh`)

## Farben
| Verwendung | Farbe |
|---|---|
| Hero, Navbar, Footer | `#36373b` |
| Top-Bar, Buttons | `#5A84D8` |
| Themen-Boxen | `#8ea7d8` |
| Themen-Hintergrund | `#f0f0f0` |

## Responsivität
- Breakpoint bei `768px`
- Grid wechselt von 2 Spalten auf 1 Spalte
- Kontakt-Section wechselt von nebeneinander auf untereinander
- Hero-Bild wandert unter den Text
