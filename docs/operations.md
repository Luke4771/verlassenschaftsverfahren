# Operations

## Grundsaetze

- Kein Build-Step: Dateien werden direkt editiert.
- Deploy-Modell ist statisch, daher sind relative Pfade kritisch.
- Vor groesseren Inhaltsupdates erst Dateiduplikate vermeiden und bestehende Struktur weiterverwenden.

## Lokale Vorschau

Im Projektroot starten:

```bash
python3 -m http.server 8080
```

Dann im Browser z. B.:

- `/index.html`
- `/glossary.html`
- `/articles/einzelunternehmen.html`
- `/access/login.html`

## Smoke-Checkliste

1. Login-Guard: Ohne Session sollte Redirect auf Login erfolgen.
2. Navbar mobil: Menue oeffnet/schliesst, Body scrollt im Overlay nicht.
3. Suche: Treffer fuer Artikel und Glossar erscheinen gruppiert.
4. Artikelseite: H1, H2, `<strong>`, Bild und CTA sind korrekt.
5. Footer-/Nav-Links: Keine kaputten relativen Pfade.

## Typische Wartungsaufgaben

- Shared Header/Footer aktualisieren: `update-nav.sh`.
- Neue oder geaenderte Inhalte in `js/search.js` nachziehen.
- Nach Artikelupdates immer Platzhalter-Status kontrollieren.

## Risikozonen

- Manuell kopierte Navbar/Footer-Bloecke ohne `update-nav.sh`.
- Nicht aktualisierte Suche nach URL- oder Titel-Aenderungen.
- Abschnittsueberschriften als normale Paragraphen statt `<h2>`.
- Bilder mit falschem Pfad (Root vs `articles/` relativ).
