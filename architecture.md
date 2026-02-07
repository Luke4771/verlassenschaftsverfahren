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
- CTA-Card am Ende jedes Artikels (vor `</div>` von `.article-content`)

## CTA-Komponente auf Artikelseiten
- Komponente: `<section class="article-cta">`
- Platzierung: auf allen `articles/*.html` direkt unter dem Artikelinhalt
- Portraitbild: `../images/martin.webp`
- Kontaktdaten in der Karte:
  - `RA Dr. Martin Cvikl`
  - `office@cvikl.law`
  - `+43 (0) 1 290 83 53`
  - `Getreidemarkt 1, 1060 Wien`
- Verwendete CSS-Klassen:
  - `.article-cta`
  - `.article-cta-content`
  - `.article-cta-main`
  - `.article-cta-title`
  - `.article-cta-title-intro`
  - `.article-cta-title-topic`
  - `.article-cta-text`
  - `.article-cta-person`
  - `.article-cta-contact`
  - `.article-cta-actions`
  - `.article-cta-image`
- Linkziele der CTA-Buttons:
  - Primärbutton: `../index.html#kontakt`
  - Sekundärbutton: `tel:+4312908353`
- Responsives Verhalten:
  - Desktop: Text links, Portrait rechts
  - Mobile (`max-width: 768px`): vertikal gestapelt

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

## Zugangsschutz (einfach, clientseitig)
- Für Netlify Free ist ein einfacher Passwort-Schutz direkt im Frontend umgesetzt.
- Neue Dateien:
  - `access/login.html` — Login-Seite mit Passwortprüfung
  - `access/access-guard.js` — Guard-Script für Redirect bei fehlender Session
- Geschützte Seiten:
  - `index.html`
  - `impressum.html`
  - alle `articles/*.html`
- Mechanik:
  - Bei korrektem Passwort setzt die Login-Seite `sessionStorage["site_access_granted"] = "1"`.
  - Ohne dieses Flag leitet `access/access-guard.js` auf `/access/login.html?next=...` um.
  - Nach erfolgreichem Login erfolgt Redirect auf den ursprünglich angeforderten Pfad (`next`) oder auf `/index.html`.
- Passwort ändern:
  - In `access/login.html` die Konstante `ACCESS_PASSWORD` anpassen.
- Hinweis:
  - Dies ist bewusst ein einfacher Schutz zur Zugriffsbeschränkung, aber kein vollständiger Perimeter-Schutz wie Cloudflare Access oder Netlify Password Protection (Paid).

## Wartung
- Navbar-Änderung global auf Artikel anwenden: `bash update-nav.sh`
- Bei Content-Updates auf korrekte Titelzuordnung + passendes Bild in `images/article_images/` achten.
- Bei neuen Artikelseiten CTA-Block analog bestehender Artikel übernehmen und den kontextuellen CTA-Titel an das Thema anpassen.
