# Architektur – Verlassenschaftsverfahren.at

## Überblick
Statische Informationswebsite zu Erbrecht/Verlassenschaft (reines HTML/CSS/JS).
Es gibt keinen Build-Prozess, keine Abhängigkeiten und kein Backend.

## Dateistruktur
```
/
├── index.html                  — Startseite
├── impressum.html              — Impressum
├── datenschutz.html            — Datenschutzerklärung
├── styles.css                  — Zentrale Styles (CSS Custom Properties in :root)
├── js/
│   └── nav-toggle.js           — Hamburger-Menü Script (shared)
├── articles/                   — 23 Artikel-Unterseiten
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── martin.webp
│   ├── icons/                 — UI-SVG-Icons (Top-Bar, Artikel-CTA)
│   └── article_images/         — Diagramme/Grafiken für Artikel
├── layout reference/           — Design-Referenzmaterial (nicht produktiv)
├── about.md                    — Projektbeschreibung
├── design.md                   — Farbdefinitionen
├── update-nav.sh               — Synchronisiert Top-Bar, Navbar und Footer in allen Seiten
├── architecture.md             — Diese Datei
└── CLAUDE.md                   — Agent-Hinweise
```

## Seitenaufbau (Startseite)
1. Top-Bar (`.top-bar`) mit Kontaktinfos
2. Navbar (`.navbar`) mit Logo, Links, Mobile-Toggle
3. Hero (`.hero`) mit Intro-Text und Bild
4. Überlappende Hero-Glas-CTA (`.hero-overlay` > `.hero-glass-card`) links unter dem Hero-Bereich, mit visueller Überlagerung in die Themen-Sektion
5. Themenübersicht (`.themen`) als 2x2-Grid mit Artikellinks
6. Kontakt (`.kontakt`) mit Karte links (`.kontakt-map`) und rechtem Kontakt-Panel (`.kontakt-info > .kontakt-panel`) inkl. strukturierter Kontaktdaten (`dl.kontakt-meta`) + Formular
7. Footer (`.footer`)

### Icon-Assets (Top-Bar und CTA)
- Quelle: Heroicons (Outline) als lokale SVG-Dateien in `images/icons/`.
- Verwendete Dateien:
  - `images/icons/phone.svg`
  - `images/icons/envelope.svg`
  - `images/icons/map-pin.svg`
  - `images/icons/phone-blue.svg`
  - `images/icons/envelope-blue.svg`
  - `images/icons/map-pin-blue.svg`
- Einbindung:
  - Top-Bar via `span.top-bar-icon` + `background-image` in `styles.css`
  - Artikel-CTA (Mail/Telefon/Adresse inkl. Rückruf-Button) via bestehende Klassen in `styles.css`
- Wichtige Regel:
  - Keine CSS-Masken verwenden; direkte SVG-`background-image`-Einbindung ist robuster über Browser hinweg.

## Hero-Glas-CTA (Startseite)
- Komponente in `index.html` direkt unter `.hero-content`: `.hero-overlay` mit Linkkarte `.hero-glass-card`
- Zweck: prominenter, klickbarer Einstieg zur Kontaktsektion (`href="#kontakt"`)
- Design: transluzenter/glossy Card-Look (Gradient + `backdrop-filter` + weiche Schatten) mit klarer Typografie ohne Icon
- Layout: Desktop überlappt die Grenze zwischen Hero und Themenbereich; mobil wird die Komponente normal im Fluss ohne Überlagerung dargestellt

## Kontaktsektion (Startseite)
- Desktop-Layout bleibt zweispaltig: Google-Map links, Kontaktbereich rechts.
- Der rechte Bereich ist als Card aufgebaut (`.kontakt-panel`) und enthält:
  - Überschrift (`h2`)
  - Strukturierte Kontaktdaten als Definitionsliste (`dl.kontakt-meta` mit `.kontakt-meta-row`, `dt`, `dd`)
  - Kontaktformular (`.kontakt-form`)
- Formularverhalten unverändert: Platzhalter-Submit über `onsubmit="return false;"` (kein Backend-Post).

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
- Für Dateinamen in `images/article_images/` nur ASCII-Slugs (z. B. `vorausvermaechtnis-tabelle.png`) verwenden, um Unicode-Normalisierungsprobleme auf unterschiedlichen Hostings zu vermeiden.
- In den Fließtexten wird Hervorhebung über `<strong>` verwendet.

### Aktueller Inhaltsstatus
- Mit Inhalt befüllt: 19 Artikeldateien
- Weiterhin Platzhalter:  
  `articles/erbteilung-miterben.html`  
  `articles/erbunwuerdigkeit-enterbung.html`  
  `articles/kosten-steuern.html`  
  `articles/pflichtteilsrecht.html`

## Styling und Responsivität
- Alle Farben und Layout-Werte als CSS Custom Properties in `:root` (Beginn von `styles.css`)
- Zentrale Variablen: `--color-primary`, `--color-dark-navy`, `--color-bg-light`, `--color-text` etc.
- Breakpoint bei `768px`:
  - Navigation wird zu Hamburger-Menü
  - Grid/Spalten werden gestapelt
- Bilder auf Artikelseiten verwenden `loading="lazy"` für Performance

## Zugangsschutz (einfach, clientseitig)
- Für Netlify Free ist ein einfacher Passwort-Schutz direkt im Frontend umgesetzt.
- Neue Dateien:
  - `access/login.html` — Login-Seite mit Passwortprüfung
  - `access/access-guard.js` — Guard-Script für Redirect bei fehlender Session
- Geschützte Seiten:
  - `index.html`
  - `impressum.html`
  - `datenschutz.html`
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
- Top-Bar/Navbar/Footer ändern: zuerst in `index.html`, dann `bash update-nav.sh`
- Vorschau der Änderungen: `bash update-nav.sh --dry-run`
- Bei Content-Updates auf korrekte Titelzuordnung + passendes Bild in `images/article_images/` achten.
- Bei neuen Artikelseiten CTA-Block analog bestehender Artikel übernehmen und den kontextuellen CTA-Titel an das Thema anpassen.
