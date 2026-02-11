document.addEventListener('DOMContentLoaded', function () {
    var isArticle = window.location.pathname.indexOf('/articles/') !== -1;
    var prefix = isArticle ? '../' : '';

    var items = [
        { t: 'Überblick zur gesetzlichen Erbfolge', u: 'articles/gesetzliche-erbfolge.html', k: 'Parentelensystem Erbklassen Anwachsung Ehegattenerbrecht Testament Nachkommen Verwandtschaft', c: 'artikel' },
        { t: 'Überblick über das Pflichtteilsrecht', u: 'articles/pflichtteilsrecht.html', k: 'Mindestanteil Kinder Ehegatte Erbrecht Pflichtteilsbegünstigte', c: 'artikel' },
        { t: 'Wann ist eine Halbierung des Pflichtteils zulässig?', u: 'articles/halbierung-pflichtteil.html', k: 'Pflichtteilsminderung Naheverhältnis Kontakt Entfremdung ErbRÄG 2015 Beweislast', c: 'artikel' },
        { t: 'Die Sicherstellung von Pflichtteilsansprüchen', u: 'articles/sicherstellung-pflichtteilsansprueche.html', k: 'Nachlassseparation Sicherheitsleistung Ratenzahlung Stundung Pflichtteilsgläubiger', c: 'artikel' },
        { t: 'Erbunwürdigkeit und Enterbung', u: 'articles/erbunwuerdigkeit-enterbung.html', k: 'Enterbungsgründe Erbunfähigkeit Verwirkung Testament', c: 'artikel' },
        { t: 'Das gesetzliche Vorausvermächtnis von Ehegatten und Lebensgefährten', u: 'articles/vorausvermaechtnis.html', k: 'Wohnrecht Haushalt Lebensgefährte Mietrecht Gebrauchsvermögen Scheidung', c: 'artikel' },
        { t: 'Die finanzielle Abgeltung von Pflegeleistungen', u: 'articles/abgeltung-pflegeleistungen.html', k: 'Pflegevermächtnis Angehörigenpflege Stundensatz Pflegegeld Bereicherungsrecht', c: 'artikel' },
        { t: 'Die Ungültigkeit von letztwilligen Verfügungen', u: 'articles/ungueltigkeit-letztwillige-verfuegungen.html', k: 'Testierfähigkeit Testament Demenz Formungültigkeit Eigenhändig Fremdhändig Zeuge Unterschrift Drohung Zwang', c: 'artikel' },
        { t: 'Erbverzicht und Pflichtteilsverzicht', u: 'articles/erbverzicht-pflichtteilsverzicht.html', k: 'Notarakt Abfindung Unternehmensübergabe Verzicht Vertrag Gegenleistung', c: 'artikel' },
        { t: 'Der Ablauf eines Verlassenschaftsverfahrens', u: 'articles/ablauf-verlassenschaftsverfahren.html', k: 'Gerichtskommissär Notar Erbantrittserklärung Inventar Todesfallaufnahme Einantwortung Miteigentum', c: 'artikel' },
        { t: 'Erbschaft annehmen oder ausschlagen?', u: 'articles/erbschaft-annehmen-ausschlagen.html', k: 'bedingte Erbantrittserklärung Schulden Unternehmensfortführung Inventar Haftung Ausschlagung', c: 'artikel' },
        { t: 'Die Kontenöffnung im Verlassenschaftsverfahren', u: 'articles/kontenoeffnung.html', k: 'Bankgeheimnis Kontenregister Bankenrundruf Kontobewegungen Schenkungen Vermögensermittlung', c: 'artikel' },
        { t: 'Was ist bei der Erbteilung unter mehreren Miterben zu beachten?', u: 'articles/erbteilung-miterben.html', k: 'Erbteilungsübereinkommen Erbquoten Miteigentum Aufteilung Liegenschaftsteilung', c: 'artikel' },
        { t: 'Kosten und Steuern im Verlassenschaftsverfahren', u: 'articles/kosten-steuern.html', k: 'Gebühren Erbschaftsteuer Notargebühren Gerichtsgebühren Sachverständiger', c: 'artikel' },
        { t: 'Wann ist eine verlassenschaftsgerichtliche Genehmigung notwendig?', u: 'articles/verlassenschaftsgerichtliche-genehmigung.html', k: 'Veräußerung Verkehrswert Gläubiger Liegenschaftsverkauf Rechtsgeschäft ruhender Nachlass', c: 'artikel' },
        { t: 'Wann wird ein Verlassenschaftskurator bestellt?', u: 'articles/verlassenschaftskurator.html', k: 'Erbstreit erbenlose Verlassenschaft Heimfallsrecht Staat Insolvenz Kurator Vermögensverteilung', c: 'artikel' },
        { t: 'Was ist bei Vermögen des Erblassers im Ausland zu beachten?', u: 'articles/vermoegen-ausland.html', k: 'EU-Erbrechtsverordnung Nachlasszeugnis Drittstaaten Aufenthaltsort Erbstatut Liegenschaft Ausland', c: 'artikel' },
        { t: 'Was passiert mit der Eigentumswohnung im Verlassenschaftsverfahren?', u: 'articles/eigentumswohnung.html', k: 'Wohnungseigentum Mindestanteil Eigentümerpartnerschaft Versteigerung Übernahmspreis Wohnbedürfnis Grundbuch', c: 'artikel' },
        { t: 'Wie werden Liegenschaften im Verlassenschaftsverfahren bewertet?', u: 'articles/bewertung-liegenschaften.html', k: 'Verkehrswert Vergleichswert Ertragswert Sachwert Gutachten Sachverständiger Schätzung Einheitswert', c: 'artikel' },
        { t: 'Die Bewertung von Schenkungen im Rahmen der Schenkungsanrechnung', u: 'articles/schenkungsanrechnung.html', k: 'Verbraucherpreisindex Fruchtgenuss Bewertungszeitpunkt Miteigentumsabschlag Pflichtteil Nutzungsrecht', c: 'artikel' },
        { t: 'Das Einzelunternehmen des Erblassers in der Verlassenschaft', u: 'articles/einzelunternehmen.html', k: 'Unternehmenshaftung Fortführung Haftungsausschluss Gewerberegister Firmenbuch Betriebsstilllegung', c: 'artikel' },
        { t: 'Das Schicksal von OG- und KG-Anteilen in der Verlassenschaft', u: 'articles/og-kg-anteile.html', k: 'Gesellschafter Auflösung Auseinandersetzungsguthaben Kommanditist Nachfolgeklausel', c: 'artikel' },
        { t: 'Der GmbH-Anteil in der Verlassenschaft', u: 'articles/gmbh-anteil.html', k: 'Gesellschaftsvertrag Aufgriffsrecht Stammeinlage Firmenbuch Geschäftsführer Generalversammlung', c: 'artikel' },
        { t: 'Was passiert nach einem Todesfall?', u: 'index.html#faq', c: 'artikel' },
        { t: 'Wer erbt, wenn kein Testament vorhanden ist?', u: 'index.html#faq', c: 'artikel' },
        { t: 'Kann ich eine Erbschaft ausschlagen?', u: 'index.html#faq', c: 'artikel' },
        { t: 'Was kostet ein Verlassenschaftsverfahren?', u: 'index.html#faq', c: 'artikel' },
        { t: 'Brauche ich einen Rechtsanwalt im Verlassenschaftsverfahren?', u: 'index.html#faq', c: 'artikel' },
        { t: 'Abhandlung', u: 'glossary.html#abhandlung', k: 'Verlassenschaftsabhandlung Kernverfahren Erbantrittserklärung', c: 'glossar' },
        { t: 'Einantwortung', u: 'glossary.html#einantwortung', k: 'Gerichtsbeschluss Verfahrensende Erbübergang', c: 'glossar' },
        { t: 'Erbantrittserklärung', u: 'glossary.html#erbantrittserklarung', k: 'bedingt unbedingt Haftung Erbantritt', c: 'glossar' },
        { t: 'Erblasser', u: 'glossary.html#erblasser', k: 'Verstorbener Todesfall Nachlass', c: 'glossar' },
        { t: 'Erbquote', u: 'glossary.html#erbquote', k: 'Anteil Bruchzahl Miterben', c: 'glossar' },
        { t: 'Erbteilungsübereinkommen', u: 'glossary.html#erbteilungsuebereinkommen', k: 'Aufteilung Miterben Vereinbarung', c: 'glossar' },
        { t: 'Erbverzicht', u: 'glossary.html#erbverzicht', k: 'Notariatsakt Verzicht Pflichtteilsverzicht', c: 'glossar' },
        { t: 'Gerichtskommissär', u: 'glossary.html#gerichtskommissaer', k: 'Notar Abhandlung Verlassenschaftsgericht', c: 'glossar' },
        { t: 'Gesetzliche Erbfolge', u: 'glossary.html#gesetzliche-erbfolge', k: 'Parentelensystem Verwandte Ehegatte', c: 'glossar' },
        { t: 'Inventar', u: 'glossary.html#inventar', k: 'Vermögensverzeichnis Verbindlichkeiten', c: 'glossar' },
        { t: 'Nachlassseparation', u: 'glossary.html#nachlassseparation', k: 'Sicherungsmaßnahme Gläubigerschutz Absonderung', c: 'glossar' },
        { t: 'Parentelensystem', u: 'glossary.html#parentelensystem', k: 'Erbenklassen Verwandtschaftsgrad Erbordnung', c: 'glossar' },
        { t: 'Pflichtteil', u: 'glossary.html#pflichtteil', k: 'Mindestanspruch Geldanspruch Kinder Ehegatte', c: 'glossar' },
        { t: 'Pflegevermächtnis', u: 'glossary.html#pflegevermaechtnis', k: 'Pflege Abgeltung Angehörige Vermächtnis', c: 'glossar' },
        { t: 'Schenkungsanrechnung', u: 'glossary.html#schenkungsanrechnung', k: 'Hinzurechnung Schenkung Pflichtteil Bewertung', c: 'glossar' },
        { t: 'Testament', u: 'glossary.html#testament', k: 'letztwillige Verfügung eigenhändig fremdhändig', c: 'glossar' },
        { t: 'Todesfallaufnahme', u: 'glossary.html#todesfallaufnahme', k: 'Vorverfahren Erhebung Vermögenswerte', c: 'glossar' },
        { t: 'Verkehrswert', u: 'glossary.html#verkehrswert', k: 'Liegenschaftsbewertung Marktpreis Sachverständiger', c: 'glossar' },
        { t: 'Verlassenschaft', u: 'glossary.html#verlassenschaft', k: 'Nachlass juristische Person Erbmasse', c: 'glossar' },
        { t: 'Verlassenschaftskurator', u: 'glossary.html#verlassenschaftskurator', k: 'Kurator Nachlassverwaltung Erbstreit', c: 'glossar' },
        { t: 'Vorausvermächtnis', u: 'glossary.html#vorausvermaechtnis', k: 'Wohnrecht Ehegatte Lebensgefährte Haushalt', c: 'glossar' }
    ];

    var searchEl = document.querySelector('.nav-search');
    var toggleEl = document.querySelector('.nav-search-toggle');
    var inputEl = document.querySelector('.nav-search-input');
    var resultsEl = document.querySelector('.nav-search-results');
    if (!searchEl || !inputEl || !resultsEl) return;

    if (toggleEl) {
        toggleEl.addEventListener('click', function (e) {
            e.stopPropagation();
            var isActive = searchEl.classList.toggle('active');
            toggleEl.setAttribute('aria-expanded', isActive);
            if (isActive) { inputEl.focus(); }
            else { close(); }
        });
    }

    function close() {
        searchEl.classList.remove('active');
        inputEl.value = '';
        resultsEl.classList.remove('visible');
        resultsEl.innerHTML = '';
    }

    function doSearch(query) {
        query = query.toLowerCase().trim();
        if (query.length < 2) {
            resultsEl.classList.remove('visible');
            resultsEl.innerHTML = '';
            return;
        }
        var matches = items.filter(function (item) {
            return item.t.toLowerCase().indexOf(query) !== -1 || (item.k && item.k.toLowerCase().indexOf(query) !== -1);
        });
        if (matches.length === 0) {
            resultsEl.innerHTML = '<div class="search-no-results">Keine Ergebnisse</div>';
            resultsEl.classList.add('visible');
            return;
        }

        var groups = { artikel: [], glossar: [] };
        matches.forEach(function (item) {
            var cat = item.c || 'artikel';
            if (groups[cat]) groups[cat].push(item);
        });

        var labels = { artikel: 'Artikel', glossar: 'Glossar' };
        var html = '';
        var total = 0;
        var maxResults = 8;

        ['artikel', 'glossar'].forEach(function (cat) {
            if (groups[cat].length === 0 || total >= maxResults) return;
            html += '<div class="search-category-heading">' + labels[cat] + '</div>';
            groups[cat].forEach(function (item) {
                if (total >= maxResults) return;
                var url = prefix + item.u;
                if (!isArticle && item.u === 'index.html#faq') url = '#faq';
                html += '<a href="' + url + '">' + item.t + '</a>';
                total++;
            });
        });

        resultsEl.innerHTML = html;
        resultsEl.classList.add('visible');
    }

    inputEl.addEventListener('input', function () { doSearch(this.value); });

    inputEl.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { close(); inputEl.blur(); }
    });

    document.addEventListener('click', function (e) {
        if (!searchEl.contains(e.target)) close();
    });
});
