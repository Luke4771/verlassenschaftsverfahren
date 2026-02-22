# Scraping-Notiz

Diese Datei dokumentiert die Methode, mit der die Artikeltexte und Fachgrafiken erfolgreich von der Referenzseite auf lokale Artikeldateien uebertragen wurden.

## Ziel

- Quelltexte von `https://www.verlassenschaftsverfahren.at/` uebernehmen.
- Mit lokalen Artikeldateien unter `articles/` per Titel matchen.
- Ueberschriften, Fettungen und Bilder korrekt uebertragen.

## Vorgehen

### 1) Quellseite laden und relevanten Inhaltsbereich identifizieren

Beispiel-Check (wie in der erfolgreichen Session genutzt):

```bash
curl -L https://www.verlassenschaftsverfahren.at/erbrecht > /tmp/erbrecht.html
xmllint --html --xpath "normalize-space((//main//h1)[1])" /tmp/erbrecht.html 2>/dev/null
xmllint --html --xpath "count(//main//section[.//a[contains(.,'Zurück zur Themenübersicht')]]//p | //main//section[.//a[contains(.,'Zurück zur Themenübersicht')]]//h2 | //main//section[.//a[contains(.,'Zurück zur Themenübersicht')]]//img)" /tmp/erbrecht.html 2>/dev/null
xmllint --html --xpath "//main//section[.//a[contains(.,'Zurück zur Themenübersicht')]]//h2" /tmp/erbrecht.html 2>/dev/null
```

Kerngedanke: Der Hauptartikel liegt in der Section, die den Linktext `Zurück zur Themenübersicht` enthaelt.

### 2) Titelbasiertes Matching auf lokale Datei

- Quell-`<h1>` extrahieren.
- Lokales `articles/*.html` mit demselben Titel suchen.
- Falls mehrere Kandidaten moeglich sind, mit `index.html` Themenliste und `js/search.js` URL-Mapping gegenpruefen.

### 3) Strukturuebernahme in den Zielartikel

Inhalt zwischen lokalem `<h1>` und `<section class="article-cta">` ersetzen.

Regeln:

- Abschnittstitel aus der Quelle als `<h2>` uebernehmen.
- Wichtige Hervorhebungen als `<strong>` erhalten.
- Bilder mit `class="article-image"` und `loading="lazy"` setzen.
- Bildpfad lokal auf `../images/article_images/<dateiname>` abbilden.

### 4) Ueberschriften-Sonderfall

Wenn in der Quelle eine Passage als Abschnittstitel fungiert, muss sie als `<h2>` formatiert werden.
Nicht als normales `<p>` einfuegen.

Praxisbeispiel:

- `articles/einzelunternehmen.html`
- `Haftungsregelungen bei Übernahme eines Unternehmens im Erbweg` ist eine Zwischenueberschrift (`<h2>`).

### 5) Bildzuordnung

- Grundlage war semantisches Matching (Titel/Thema der Grafik und Kontext im Artikel).
- Lokale Bilder befinden sich in `images/article_images/`.
- Pro Artikel wurden ein oder mehrere passende Fachbilder gesetzt.

### 6) Abschlusschecks

```bash
rg -n "article-placeholder" articles/*.html
rg -n "<h2>" articles/*.html
rg -n "<strong>" articles/*.html
rg -n "images/article_images" articles/*.html
```

Manuelle Endpruefung:

- Sind Abschnittstitel als `<h2>` gesetzt?
- Sind Fettungen (`<strong>`) inhaltlich sinnvoll erhalten?
- Ist das Bild thematisch korrekt und nicht nur technisch eingebunden?

## Ergebnisstatus (Stand im Repo)

- 19 Artikel sind mit Inhalt und Bildern befuellt.
- 4 Artikel haben weiterhin den Platzhalter `Artikelinhalt folgt.`
