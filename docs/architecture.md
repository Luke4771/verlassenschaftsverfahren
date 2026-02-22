# Architektur

## Systemprofil

- Reine statische Website: HTML + CSS + Vanilla JavaScript.
- Kein Build-Prozess, kein Package Manager, keine Laufzeit-Dependencies.
- Zentraler Style-Einstieg ist `styles.css`.

## Wichtige Verzeichnisse

- `articles/`: 23 Artikel-Unterseiten mit gemeinsamem Layout.
- `js/`: Verhalten fuer Mobile-Nav, Suche, FAQ und Scroll-Animationen.
- `access/`: Login-Seite und clientseitiger Access-Guard.
- `images/article_images/`: Fachgrafiken fuer Artikel.

## Seitenrollen

- `index.html`: Startseite mit Hero, Ablauf, Themen, FAQ, Kontakt.
- `impressum.html`, `datenschutz.html`, `glossary.html`: Root-Level Unterseiten.
- `articles/*.html`: Inhaltseiten mit gemeinsamer Struktur und Artikel-CTA.
- `access/login.html`: Passwort-Eingabe fuer Session-Flag in `sessionStorage`.

## Laufzeit-Skripte

- `access/access-guard.js`: Redirect auf Login, wenn `site_access_granted != "1"`.
- `js/nav-toggle.js`: Mobile-Menue auf/zu, Body-Scroll-Lock.
- `js/search.js`: Clientseitige Suche mit hart codierten Datensaetzen.
- `js/faq-toggle.js`: FAQ-Akkordeon (`aria-expanded` + `.open`).
- `js/scroll-animations.js`: Scroll-basierte Reveal-Animationen.
- `js/glossary-nav.js`: Aktive Buchstaben-Navigation im Glossar.

## Geteilte Layout-Bloecke

Top-Bar, Navbar und Footer sind in mehreren Seiten dupliziert.
Quelle ist `index.html`.
Sync erfolgt mit `update-nav.sh`.

`update-nav.sh` macht dabei:

- Extraktion von Top-Bar, Navbar, Footer aus `index.html`.
- Pfad-Anpassung fuer `articles/*.html` (`../index.html#...`, `../images/...`).
- Root-Link-Anpassung fuer `impressum.html`, `datenschutz.html`, `glossary.html`.

## Koppelungen

- `js/search.js` enthaelt die Suchquellen als statische Liste. Neue Seiten oder Anker muessen dort manuell eingetragen werden.
- Artikelseiten erwarten Artikelstruktur plus CTA-Markup in derselben Reihenfolge.
- Klasse `article-image` ist fuer responsive Bilddarstellung relevant (`styles.css`).

## Aktueller Inhaltsstand

- Artikel gesamt: 23 Dateien unter `articles/`.
- Mit Platzhalter `Artikelinhalt folgt.`: 4 Dateien
  - `articles/erbteilung-miterben.html`
  - `articles/erbunwuerdigkeit-enterbung.html`
  - `articles/kosten-steuern.html`
  - `articles/pflichtteilsrecht.html`
- Befuellte Artikel: 19 Dateien mit Fliesstext, Zwischenueberschriften und Artikelgrafiken.
