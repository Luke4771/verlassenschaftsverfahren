# Sticky TOC – Anleitung für Artikelseiten

## Übersicht

Sticky Table of Contents (Inhaltsverzeichnis) als linke Sidebar auf Desktop, inline-Box auf Mobile.

## 1. HTML-Struktur

### a) `article-layout` Wrapper hinzufügen

Die bestehende `<div class="article-content">` muss in einen neuen Wrapper `<div class="article-layout">` eingebettet werden. Davor kommt die TOC-Navigation.

```html
<main class="article">
    <div class="article-layout">

    <!-- TOC hier einfügen (siehe Schritt b) -->

    <div class="article-content">
        <!-- bestehender Artikelinhalt bleibt unverändert -->
    </div>

    </div>
</main>
```

### b) TOC-Navigation einfügen

Direkt nach `<div class="article-layout">`, VOR `<div class="article-content">`:

```html
<nav class="article-toc" aria-label="Inhaltsverzeichnis">
    <span class="article-toc-title">Inhalt</span>
    <ol class="article-toc-list">
        <li><a href="#abschnitt-id-1">Kurzfassung der Überschrift 1</a></li>
        <li><a href="#abschnitt-id-2">Kurzfassung der Überschrift 2</a></li>
        <!-- weitere Einträge -->
    </ol>
</nav>
```

### c) IDs auf h2-Überschriften setzen

Jede h2-Überschrift im Artikel braucht ein `id`-Attribut, das zum TOC-Link passt:

```html
<h2 id="abschnitt-id-1">Voller Titel der Überschrift 1</h2>
```

ID-Konvention: Kleinbuchstaben, Bindestriche statt Leerzeichen, keine Umlaute (ae/oe/ue).

### d) IntersectionObserver-Script einfügen

Nach `</main>`, vor dem Footer:

```html
<script>
(function() {
    var sections = document.querySelectorAll('.article-content h2[id]');
    var links = document.querySelectorAll('.article-toc-list a');
    if (!sections.length) return;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                links.forEach(function(l) { l.classList.remove('active'); });
                var a = document.querySelector('.article-toc-list a[href="#' + entry.target.id + '"]');
                if (a) a.classList.add('active');
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(function(s) { observer.observe(s); });
})();
</script>
```

## 2. CSS (bereits in styles.css vorhanden)

Alle Styles stehen unter dem Kommentar `/* === Artikel-TOC (Sticky Sidebar) === */` in `styles.css`. Keine zusätzlichen CSS-Änderungen nötig.

Kurzübersicht der Klassen:

| Klasse | Funktion |
|---|---|
| `.article-layout` | Flex-Container (TOC + Content nebeneinander) |
| `.article-toc` | Sidebar, `position: sticky`, `top: 90px` |
| `.article-toc-title` | "INHALT" Label |
| `.article-toc-list` | Linkliste (ol ohne Nummerierung) |
| `.article-toc-list li a.active` | Aktiver Abschnitt (blau, fett) |

Responsive: Unter 1100px wird die TOC eine statische Inline-Box über dem Artikel.

## 3. Checkliste pro Artikel

- [ ] `<div class="article-layout">` um `<div class="article-content">` wrappen
- [ ] Schließendes `</div>` für `article-layout` vor `</main>` nicht vergessen
- [ ] `<nav class="article-toc">` vor `<div class="article-content">` einfügen
- [ ] Jede h2 im Artikel bekommt ein passendes `id`-Attribut
- [ ] TOC-Links (`href="#..."`) müssen exakt den h2-IDs entsprechen
- [ ] TOC-Linktexte müssen immer die vollständige h2-Überschrift übernehmen (nicht kürzen)
- [ ] IntersectionObserver-Script nach `</main>` einfügen

## 4. Referenz-Implementierung

Siehe `articles/halbierung-pflichtteil.html` als funktionierendes Beispiel.
