# Content Model

## Standardstruktur einer Artikelseite

Jede Artikelseite folgt derselben Grundstruktur:

```html
<main class="article">
  <div class="article-content">
    <a class="article-back" ...>...</a>
    <span class="article-updated">Aktualisiert 2026</span>

    <h1>...</h1>

    <!-- Inhalt -->
    <h2>...</h2>
    <p>... <strong>...</strong> ...</p>
    <img class="article-image" loading="lazy" src="../images/article_images/..." alt="...">

    <section class="article-cta" ...>...</section>
  </div>
</main>
```

## Inhaltsregeln

- Pro Seite genau ein fachlicher `<h1>`.
- Abschnittstitel im Fliesstext werden als `<h2>` umgesetzt.
- Wichtige Hervorhebungen aus der Quelle werden als `<strong>` beibehalten.
- Die CTA-Sektion bleibt am Ende jedes Artikels bestehen.
- Der Inhaltsbereich liegt immer vor `<section class="article-cta">`.

## Ueberschriften-Regel (wichtig)

Wenn ein Satz inhaltlich als Abschnittseinleitung dient, muss er als `<h2>` gesetzt sein und nicht als normales `<p>`.
Beispiel: In `articles/einzelunternehmen.html` ist `Haftungsregelungen bei Übernahme eines Unternehmens im Erbweg` eine Zwischenueberschrift.

## Bildregeln

- Fachgrafiken liegen unter `images/article_images/`.
- Einbindung in Artikeln mit relativem Pfad `../images/article_images/<datei>`.
- Fuer Artikelbilder immer `class="article-image"` und `loading="lazy"` setzen.
- Logo und Portraitbild gehoeren nicht zur Fachgrafik-Zuordnung.

## Aktuelle Bildzuordnung (Stand im Repo)

- `articles/abgeltung-pflegeleistungen.html` -> `pflegevermaechtnis-tabelle-1.png`
- `articles/ablauf-verlassenschaftsverfahren.html` -> `Verlassenschaftsverfahren Ablauf.png`
- `articles/bewertung-liegenschaften.html` -> `Errichtung Inventar und Bewertung.png`
- `articles/eigentumswohnung.html` -> `Die Eigentumswohnung im Verlassenschaftsverfahren.png`
- `articles/einzelunternehmen.html` -> `Haftung Einzelunternehmen.png`
- `articles/erbschaft-annehmen-ausschlagen.html` -> `erbantrittserklaerung-ausschlaungserklaerung.png`
- `articles/erbverzicht-pflichtteilsverzicht.html` -> `Erbverzicht und Pflichtteilsverzicht.png`
- `articles/gesetzliche-erbfolge.html` -> `erste Parentel.png`, `zweite Parentel.png`, `dritte Parentel.png`
- `articles/gmbh-anteil.html` -> `GmbH-Anteil.png`
- `articles/halbierung-pflichtteil.html` -> `Pflichtteilsminderung Grafik.png`
- `articles/kontenoeffnung.html` -> `kontenoeffnung-verlassenschaftsverfahren.png`
- `articles/og-kg-anteile.html` -> `Personengesellschaftsanteil.png`
- `articles/schenkungsanrechnung.html` -> `Vergleich VPI Immobilienmarkt.png`, `Schenkungsanrechnung Entscheidungsbaum.png`
- `articles/sicherstellung-pflichtteilsansprueche.html` -> `Nachlassseparation.png`
- `articles/ungueltigkeit-letztwillige-verfuegungen.html` -> `ungueltigkeit-testamente-beweislast-1.png`
- `articles/verlassenschaftsgerichtliche-genehmigung.html` -> `Verlassenschaftsgerichtliche Genehmigung.png`
- `articles/verlassenschaftskurator.html` -> `gruende-bestellung-verlassenschaftskurator.png`
- `articles/vermoegen-ausland.html` -> `vermoegen-im-ausland.png`
- `articles/vorausvermaechtnis.html` -> `vorausvermaechtnis-tabelle.png`

## Platzhalterstatus

Noch nicht befuellt (Stand jetzt):

- `articles/erbteilung-miterben.html`
- `articles/erbunwuerdigkeit-enterbung.html`
- `articles/kosten-steuern.html`
- `articles/pflichtteilsrecht.html`
