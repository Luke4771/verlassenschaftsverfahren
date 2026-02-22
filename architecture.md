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
├── glossary.html                — Glossar (Begriffsdefinitionen Erbrecht)
├── styles.css                  — Zentrale Styles (CSS Custom Properties in :root)
├── js/
│   ├── nav-toggle.js           — Hamburger-Menü Script (shared)
│   ├── faq-toggle.js           — FAQ-Akkordeon (Toggle open/close)
│   ├── scroll-animations.js    — Scroll-basierte Fade-in Animationen
│   └── search.js               — Client-side Suche (Artikel + Glossar, kategorisiert)
├── articles/                   — 23 Artikel-Unterseiten
├── images/
│   ├── logo.png
│   ├── hero.jpg
│   ├── martin.webp
│   ├── icons/                 — UI-SVG-Icons (Top-Bar, Artikel-CTA)
│   └── article_images/         — Diagramme/Grafiken für Artikel
├── layout reference/           — Design-Referenzmaterial (nicht produktiv)
├── docs/                      — Kontextspezifische Doku fuer Agenten
│   ├── index.md                — Einstiegspunkt fuer Doku
│   └── *.md                    — Architektur, Workflows, Scraping, Betrieb
├── about.md                    — Projektbeschreibung
├── design.md                   — Farbdefinitionen
├── update-nav.sh               — Synchronisiert Top-Bar, Navbar und Footer in allen Seiten
├── architecture.md             — Diese Datei
└── CLAUDE.md                   — Agent-Hinweise
```

## Seitenaufbau (Startseite)
1. Top-Bar (`.top-bar`) mit Kontaktinfos
2. Navbar (`.navbar`) mit Logo-Block (`CVIKL`, `RECHTSANWALT`, `Verlassenschaftsverfahren.at`), Links, Mobile-Toggle
3. Hero (`.hero`) mit Intro-Text und dekorativem Hintergrund
4. Ablauf (`.process`) als Stepper-Übersicht (5 Schritte) + Link zum Detailartikel
5. Themenübersicht (`.topics`) als 2x2-Grid mit Artikellinks
6. FAQ (`.faq`) als Akkordeon-Liste (Fragen als Buttons, Antworten ein-/ausklappbar)
7. Kontakt (`.contact`) mit Karte links (`.contact-map`) und rechtem Kontakt-Panel (`.contact-info > .contact-panel`) inkl. strukturierter Kontaktdaten (`dl.contact-meta`) + Formular
8. Footer (`.footer`)

### Navbar (Mobile Overlay)
- Breakpoint: `@media (max-width: 768px)`
- Das Menü (`.nav-menu`) öffnet als Fullscreen-Overlay.
- Der CTA (`.nav-cta`) wird im geöffneten Mobile-Menü fix am unteren Viewportrand positioniert (`bottom` + `safe-area-inset-bottom`), damit er nicht zu weit oben in der Menüfläche sitzt.
- Die Suchergebnisse (`.nav-search-results a`) erhalten im Mobile-Overlay eigene Link-Styles (dunkler Text auf hellem Hintergrund), damit sie nicht von den allgemeinen Menü-Link-Styles überschrieben werden.

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
  - Wenn nur der Hintergrund-Container eines Icons sichtbar ist, aber nicht das Symbol selbst, zuerst prüfen, ob versehentlich wieder Masken (`mask-image`/`-webkit-mask-image`) verwendet wurden.

## Ablauf-Section (Startseite)
- Komponente in `index.html`: `<section class="process" id="ablauf">`
- Zweck: den typischen Standardablauf kurz vermitteln und als Einstieg in den Detailartikel dienen
- Struktur:
  - Überschrift + Unterzeile
  - `<ol class="process-steps">` mit 5 Schritten
  - Footer mit Hinweistext + CTA-Link zum Artikel `articles/ablauf-verlassenschaftsverfahren.html`
- Kein JavaScript (reines HTML/CSS)

## Kontaktsektion (Startseite)
- Desktop-Layout bleibt zweispaltig: Google-Map links, Kontaktbereich rechts.
- Der rechte Bereich ist als Card aufgebaut (`.contact-panel`) und enthält:
  - Überschrift (`h2`)
  - Strukturierte Kontaktdaten als Definitionsliste (`dl.contact-meta` mit `.contact-meta-row`, `dt`, `dd`)
  - Kontaktformular (`.contact-form`)
- Formularverhalten unverändert: Platzhalter-Submit über `onsubmit="return false;"` (kein Backend-Post).

## Impressum-Seite (impressum.html)
- Aufbau im bekannten Artikel-Container (`.article > .article-content`).
- Zusätzliche Seitenklasse: `.article-impressum` für gezielte Layout-Anpassungen ohne Einfluss auf Artikelseiten.
- Rechtsdaten sind in einer zentrierten Karte strukturiert:
  - `Dr. Cvikl Rechtsanwalts GmbH` (juristische Person)
- Technische Struktur:
  - Grid-Wrapper: `.impressum-grid` mit Einspalten-Variante `.impressum-grid-single`
  - Karten: `.impressum-card`
  - Feldpaare als Definitionsliste: `.impressum-meta` mit `.impressum-meta-row`, `dt`, `dd`
- Lesbarkeitsregel: Auf Desktop nutzt das Impressum einen breiteren Content-Container (`max-width: 1120px`) und ein angepasstes Label/Wert-Verhältnis; unter `1100px` bleibt die Karte einspaltig.
- Stilregel: Die Impressum-Karte ist bewusst schlicht ohne sichtbare Umrandung/Hintergrund; H1/H2 und Fließtexte sind linksbündig innerhalb des Content-Containers ausgerichtet.
- Die abschließenden Metadatenpunkte (Inhaltlich Verantwortlicher, Webdesign) sind über einen zusätzlichen oberen Abstand mit Trennlinie vom oberen Block abgesetzt.
- Noch fehlende GmbH-Angaben werden bewusst mit dem Platzhaltertext `folgt noch` geführt (z. B. Firmenbuchgericht, UID), bis die finalen Daten vorliegen.

## FAQ-Sektion (Startseite)
- Markup: `.faq` mit `.faq-item`-Blöcken; Frage ist ein `<button class="faq-question">`, Antwort liegt in `.faq-answer`.
- Verhalten: `js/faq-toggle.js` toggelt pro Item die Klasse `open` und setzt `aria-expanded` passend.
- Inhalt: Antworten sind als abgeschlossene Texte formuliert (ohne Links in den Antworten).
- Layout: zweispaltig: links Intro (`.faq-aside`) mit Überschrift + kurzem Text, rechts die Fragenliste (`.faq-list`) als Akkordeon; mobil gestapelt.

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
- Responsives Verhalten:
  - Desktop: Text links, Portrait rechts
  - Mobile (`max-width: 768px`): vertikal gestapelt
- Typografische Leitlinien (Stand jetzt):
  - Klare Hierarchie mit moderater Gewichtung statt sehr fetter Schrift.
  - Name (`.article-cta-person-name`) prominent, aber kompakt.
  - Rolle (`.article-cta-person-role`) kleiner, ruhiger und bewusst dünner gesetzt (`font-weight: 400`).
  - Kontaktzeilen (`.article-cta-contact-item`, `.article-cta-address`) leicht über Fließtextgröße mit mittlerem Gewicht für bessere Lesbarkeit.
- Farbkonvention CTA-Card:
  - Primäre CTA-Buttons und CTA-Iconakzente nutzen dieselbe Blaupalette wie andere Hauptbuttons (`--color-nav-cta` / `--color-nav-cta-hover`) für konsistente UI-Führung.

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
- CSS-Klassennamen sind auf Englisch zu halten (z. B. `.process`, `.topics`, `.contact`, `.glossary-*`).
- Wiederverwendete Überschriften-/Beschreibungstypografie für Startseiten-Sektionen (`.process`, `.topics`, `.faq`) wird über gruppierte CSS-Selektoren zentral gepflegt.
- Breakpoint bei `768px`:
  - Navigation wird zu Hamburger-Menü
  - Offenes Mobile-Menü ist als vollflächiges, frosted/glasiges Overlay gestaltet (`.nav-menu` im Media-Block), mit vertikal zentrierten Linkflächen.
  - Hamburger-Icon bleibt borderless (ohne Button-Rahmen), Mobile-Linkflächen und Mobile-CTA sind rechteckig (ohne Rundungen).
  - Mobile-Linkflächen und Mobile-CTA sind visuell um `150px` nach oben versetzt; Border-Effekte an den Linkflächen sind entfernt.
  - Der mobile CTA-Button wird im offenen Menü ebenfalls zentriert im Overlay positioniert.
  - Grid/Spalten werden gestapelt
- Bilder auf Artikelseiten verwenden `loading="lazy"` für Performance

## Subtile UI-Nuancen (Pills & Divider)
- Zusätzliche, dezente UI-Tokens in `:root` von `styles.css`:
  - `--color-pill-bg`
  - `--color-pill-border`
  - `--color-pill-text`
- Wiederverwendbare Kicker-Pill:
  - Klasse: `.section-kicker`
  - Einsatz als kurze Sektionseinleitung in Startseite (`.process-header`, `.topics-header`, `.faq-aside`) und Glossar-Header (`.glossary-hero`)
  - Farbgebung bewusst neutral (`grau/weiß`) statt Akzentblau
- Divider-System:
  - Unterstreichungen bei Sektionstiteln (`.process`, `.topics`, `.faq`, `.contact`) bleiben im ursprünglichen Stil (solide blaue Linien).
- Listen-Nuancen:
  - FAQ-Linien sind harmonisiert über einen etwas weicheren Trennlinienkontrast.
- Formensprache:
  - Global bleibt die überwiegend eckige Designsprache bestehen; Rundungen (`999px`) werden bewusst nur bei Pill-Elementen eingesetzt.

## Zugangsschutz (einfach, clientseitig)
- Für Netlify Free ist ein einfacher Passwort-Schutz direkt im Frontend umgesetzt.
- Neue Dateien:
  - `access/login.html` — Login-Seite mit Passwortprüfung
  - `access/access-guard.js` — Guard-Script für Redirect bei fehlender Session
- Geschützte Seiten:
  - `index.html`
  - `impressum.html`
  - `datenschutz.html`
  - `glossary.html`
  - alle `articles/*.html`
- Mechanik:
  - Bei korrektem Passwort setzt die Login-Seite `sessionStorage["site_access_granted"] = "1"`.
  - Ohne dieses Flag leitet `access/access-guard.js` auf `/access/login.html?next=...` um.
  - Nach erfolgreichem Login erfolgt Redirect auf den ursprünglich angeforderten Pfad (`next`) oder auf `/index.html`.
- Passwort ändern:
  - In `access/login.html` die Konstante `ACCESS_PASSWORD` anpassen.
- Hinweis:
  - Dies ist bewusst ein einfacher Schutz zur Zugriffsbeschränkung, aber kein vollständiger Perimeter-Schutz wie Cloudflare Access oder Netlify Password Protection (Paid).

## Glossar-Seite (glossary.html)
- Root-Level-Seite wie impressum.html und datenschutz.html
- Aufbau: Top-Bar, Navbar, Glossar-Hauptinhalt, Footer
- Headerbereich als zentrierter Glossar-Hero in einem vollbreiten, hellgrauen Band direkt unter der Navbar; mit subtiler, papierartiger Topographic/Contour-Linien-Textur und leicht erhoehter Linienopazitaet im Hintergrund sowie Titel, Introtext, Suchhinweis, Suchfeld mit Lupe und "Häufig gesucht"-Chips
- Alphabetische Auflistung von ~21 erbrechtlichen Fachbegriffen mit Definitionen
- Jeder Begriff hat eine Anchor-ID für Deep-Linking aus Suchergebnissen (z.B. `glossary.html#pflichtteil`)
- Alphabet-Navigation (A-Z Kacheln, nur Buchstaben mit Einträgen)
- Sticky Alphabet-Navigation nutzt einen geschichteten "Liquid Glass"-Wrapper (`.liquidGlass-*`) mit SVG-Filter `#glass-distortion` (in `glossary.html`) und zugehoerigen Styles in `styles.css`
- Inline-Filterfeld zum Durchsuchen der Begriffe (Vanilla JS, ~20 Zeilen am Seitenende)
- Begriffe sind als reine Definitionen ohne zusätzliche "Mehr erfahren"-Links dargestellt
- CSS-Klassen: `.glossary`, `.glossary-content`, `.glossary-filter-input`, `.glossary-alphabet`, `.glossary-letter`, `.glossary-term`
- `update-nav.sh` synchronisiert Top-Bar/Navbar/Footer wie bei anderen Root-Seiten

## Suchfunktion (js/search.js)
- Hardcodierter Datenarray mit Titel (`t`), URL (`u`), Keywords (`k`) und Kategorie (`c`)
- Kategorien: `artikel` (Artikel + FAQ) und `glossar` (Glossar-Begriffe)
- Suchergebnisse werden nach Kategorie gruppiert mit Überschriften ("Artikel", "Glossar")
- Max. 8 Ergebnisse gesamt
- Glossar-Einträge verlinken auf `glossary.html#anchor-id`
- CSS-Klasse für Kategorie-Überschriften: `.search-category-heading`

## Wartung
- Top-Bar/Navbar/Footer ändern: zuerst in `index.html`, dann `bash update-nav.sh`
- Vorschau der Änderungen: `bash update-nav.sh --dry-run`
- Bei Content-Updates auf korrekte Titelzuordnung + passendes Bild in `images/article_images/` achten.
- Bei neuen Artikelseiten CTA-Block analog bestehender Artikel übernehmen und den kontextuellen CTA-Titel an das Thema anpassen.

## Doku-Ordner
- Es gibt einen `docs/`-Ordner mit spezifischem Kontext fuer die Website.
- Einstiegspunkt ist `docs/index.md`.
- Relevante Detaildateien sind insbesondere:
  - `docs/architecture.md`
  - `docs/content-model.md`
  - `docs/workflows.md`
  - `docs/operations.md`
  - `docs/scrap.md`
