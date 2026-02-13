# Umsetzungsplan: Glossary-Design (Punkt 1, 2, 5)

## Ziel
Diese Planung beschreibt die Umsetzung von drei priorisierten Verbesserungen auf der Glossar-Seite:
1. Sichtbare, klare Hauptüberschrift (`h1`) statt nur dekorativer Schrift.
2. Sticky Alphabet-Navigation mit aktivem Buchstaben.
3. Bessere mobile Bedienbarkeit der Alphabet-Buttons (Touch + Fokus).

## Scope
- Betroffene Dateien:
  - `glossary.html`
  - `styles.css`
- Optional für Punkt 2 (Active-Letter-Logik):
  - kleines Inline-Skript in `glossary.html` oder neue Datei `js/glossary-nav.js`

## Nicht im Scope
- Kein Redesign der gesamten Seite.
- Keine Änderungen an Inhalten der Glossarbegriffe.
- Keine Änderungen an Navbar-Suche oder globaler Suche.

## Ausgangslage (Ist-Stand)
- Der sichtbare Titel im Hero ist aktuell dekorativ (`.glossary-hero-bg`), während der echte `h1` visuell versteckt ist.
- Die Alphabet-Leiste ist statisch und verschwindet beim Scrollen.
- Mobile Alphabet-Buttons sind mit `32x32` knapp für Touch-Bedienung.
- Es gibt aktuell keinen klaren `:focus-visible`-State für die Alphabet-Links.

---

## Punkt 1: Sichtbare Hauptüberschrift (H1) herstellen

### Ziel
Die Seite soll eine sichtbare, starke Hauptüberschrift haben, die visuell und semantisch zusammenfällt.

### Geplante Änderungen
1. In `glossary.html`:
   - `h1` sichtbar machen (Klasse `visually-hidden` entfernen).
2. In `styles.css`:
   - `.glossary-hero-title` als primäre Headline ausarbeiten (Abstand, Gewicht, Kontrast).
   - `.glossary-hero-bg` nur als Hintergrund-Deko zurücknehmen (geringere Opacity/Größe), damit die Leseführung klar auf dem `h1` liegt.
3. Mobile Feinschliff:
   - Headlineskalierung im bestehenden Mobile-Block abstimmen, damit keine Überlagerung mit Deko-Schrift entsteht.

### Akzeptanzkriterien
- Ein sichtbarer `h1` ist im Hero klar lesbar.
- Dekorativer Hintergrundtext bleibt unterstützend, aber nicht dominant.
- Keine Layout-Überlappungen auf Desktop und Mobile.

### Aufwand
- Niedrig (kleine HTML/CSS-Anpassung).

---

## Punkt 2: Sticky Alphabet + aktiver Buchstabe

### Ziel
Navigation durch lange Glossar-Listen verbessern: Alphabet bleibt verfügbar, aktueller Buchstabe wird markiert.

### Geplante Änderungen
1. In `styles.css`:
   - `.glossary-alphabet` auf `position: sticky` setzen.
   - Sinnvollen `top`-Offset unter Berücksichtigung der sticky Navbar definieren.
   - Dezente Hintergrundfläche/Trennlinie für Sticky-Zustand ergänzen, damit die Leiste beim Scrollen lesbar bleibt.
2. Active-State für Buchstaben:
   - Neue Klasse (z. B. `.is-active`) für Alphabet-Links definieren.
   - Visuell klarer Zustand (Farbe + Hintergrund + Border).
3. Logik für aktiven Buchstaben:
   - Mit `IntersectionObserver` jeweils den aktuell sichtbaren `.glossary-letter` bestimmen.
   - Zugehörigen Link in `.glossary-alphabet` mit `.is-active` markieren.
   - Robustheit bei schnellem Scrollen und bei Sprüngen über Ankerlinks sicherstellen.

### Technische Variante (empfohlen)
- Kleine, dedizierte JS-Datei `js/glossary-nav.js` statt zusätzlicher großer Inline-Logik.
- Einbindung mit `defer` in `glossary.html`.

### Akzeptanzkriterien
- Alphabet bleibt beim Scrollen sichtbar.
- Aktiver Buchstabe aktualisiert sich korrekt während des Scrollens.
- Klick auf Buchstabe führt weiterhin zum Abschnitt.
- Kein visuelles Springen/Flackern.

### Aufwand
- Mittel (CSS + kleines JS-Modul).

---

## Punkt 5: Mobile Touch-Ziele und Fokus-States verbessern

### Ziel
Bessere Bedienbarkeit und Accessibility auf Touch-Geräten und per Tastatur.

### Geplante Änderungen
1. In `styles.css` (Mobile-Bereich):
   - `.glossary-alphabet a` auf mindestens `44x44` setzen.
   - Zeilenumbruch und Gap so anpassen, dass die Leiste nicht gequetscht wirkt.
2. Fokus-Sichtbarkeit:
   - `:focus-visible`-Style für `.glossary-alphabet a` definieren (klarer Kontrastrahmen).
3. Optional für Touch-Geräte:
   - `@media (pointer: coarse)` nutzen, um Touch-spezifische Größen/Abstände gezielt zu steuern.

### Akzeptanzkriterien
- Alphabet-Buttons sind auf Mobilgeräten gut tappbar.
- Tastaturfokus ist eindeutig sichtbar.
- Keine Überlappung oder abgeschnittene Buttons bei kleinen Viewports.

### Aufwand
- Niedrig (CSS-only).

---

## Umsetzungsreihenfolge (empfohlen)
1. Punkt 1 (sichtbare Headline) zuerst umsetzen, da dies die visuelle Hierarchie festlegt.
2. Punkt 2 (sticky + active) danach, weil es die zentrale Interaktion auf der Seite verbessert.
3. Punkt 5 (mobile/focus) abschließend als gezieltes Feintuning.

## Testplan (kompakt)
1. Desktop (>=1200px)
   - Hero-Hierarchie prüfen.
   - Sticky Alphabet + Active-Letter beim Scrollen prüfen.
2. Tablet (~768px bis 1024px)
   - Sticky-Verhalten und Abstände prüfen.
3. Mobile (<=480px)
   - Tapbarkeit (44x44), Umbruch, Lesbarkeit prüfen.
4. Tastaturtest
   - Tab-Reihenfolge und `:focus-visible` auf Alphabet-Links prüfen.
5. Regressionscheck
   - Navbar, Footer, Glossareinträge und Anker-Navigation funktionieren unverändert.

## Risiko- und Fallback-Hinweise
- Risiko: Sticky `top` kollidiert mit Navbar-Höhe.
  - Fallback: konservativer `top`-Wert und ggf. mobile-spezifische Korrekturwerte.
- Risiko: Active-State springt an Buchstaben-Grenzen.
  - Fallback: `rootMargin`/`threshold` für den Observer nachjustieren.

## Ergebnisdefinition (Done)
- Alle drei Punkte sind umgesetzt.
- Seite wirkt klarer geführt (sichtbarer `h1`), besser navigierbar (sticky + active), und mobil besser bedienbar (44x44 + Fokus).
