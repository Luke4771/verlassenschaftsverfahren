# Workflows

## 1) Shared Layout aendern (Top-Bar, Navbar, Footer)

1. Nur in `index.html` bearbeiten.
2. Vorschau pruefen: `bash update-nav.sh --dry-run`.
3. Sync ausfuehren: `bash update-nav.sh`.
4. Stichprobe in Root-Seiten und 1-2 Artikeln machen.

Warum: `update-nav.sh` ist die einzige verlässliche Stelle fuer korrekte Pfad-Umschreibung zwischen Root und `articles/`.

## 2) Artikeltext aus Referenzseite uebernehmen

1. Referenzartikel per URL laden.
2. Titel (`<h1>`) mit lokalem Artikel abgleichen.
3. Inhalt zwischen `<h1>` und Artikel-CTA ersetzen.
4. Zwischenueberschriften als `<h2>` formatieren.
5. Relevante Textteile mit `<strong>` beibehalten.
6. Passende Grafik aus `images/article_images/` setzen.
7. Abschlusspruefung mit den Checks unten.

Detaillierte Scraping-Methodik steht in `docs/scrap.md`.

## 3) Suche aktualisieren

Wenn neue Inhalte, Titel oder Links geaendert werden:

1. `js/search.js` anpassen (`items`-Array).
2. Titel, URL, Keywords und Kategorie (`artikel` oder `glossar`) eintragen.
3. Bei Glossar-Links korrekte Anchor-ID pruefen (`glossary.html#...`).

## 4) Glossar aktualisieren

1. Begriff in `glossary.html` ergaenzen (`id` fuer Anchor nicht vergessen).
2. Optional Such-Chips / Introtexte anpassen.
3. Entsprechenden Such-Eintrag in `js/search.js` nachziehen.

## 5) Schnelle Validierung nach Content-Aenderungen

- Platzhalter finden: `rg -n "article-placeholder" articles/*.html`
- H2-Vorkommen pruefen: `rg -n "<h2>" articles/*.html`
- Artikelbilder pruefen: `rg -n "images/article_images" articles/*.html`
- CTA auf allen Artikeln: `rg -n "<section class=\"article-cta\"" articles/*.html`
