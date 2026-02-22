# Docs Index

Dieses Verzeichnis ist die schnelle Arbeitsgrundlage fuer KI-Agenten.
Alle Aussagen in diesen Dateien basieren auf den aktuell gelesenen Projektdateien.

## Empfohlene Lesereihenfolge

1. `docs/architecture.md`
2. `docs/content-model.md`
3. `docs/workflows.md`
4. `docs/operations.md`
5. `docs/scrap.md`

## Dateiuebersicht

- `docs/architecture.md`: Technischer Aufbau der App (Seiten, Scripts, Abhaengigkeiten).
- `docs/content-model.md`: Strukturregeln fuer Artikelseiten inkl. Ueberschriften, Fettungen, Bilder.
- `docs/workflows.md`: Standard-Ablaufe fuer Content- und Struktur-Aenderungen.
- `docs/operations.md`: Pruef- und Wartungschecklisten.
- `docs/scrap.md`: Dokumentierte Methode fuer das Artikel-Scraping und Matching.

## Wichtige Quell-Dateien

- `index.html`: Quelle fuer Top-Bar, Navbar, Footer, Startseiten-Sektionen.
- `styles.css`: Zentrale Styles fuer alle Seiten.
- `update-nav.sh`: Synchronisierung von Top-Bar, Navbar, Footer in Unterseiten.
- `js/search.js`: Harte Suchdatenbank fuer Artikel, FAQ und Glossar.
- `access/login.html`, `access/access-guard.js`: Einfacher clientseitiger Zugangsschutz.
- `articles/*.html`: Artikelinhalte und individuelle Artikel-CTA-Titel.
