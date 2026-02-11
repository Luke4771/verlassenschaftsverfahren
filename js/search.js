document.addEventListener('DOMContentLoaded', function () {
    var isArticle = window.location.pathname.indexOf('/articles/') !== -1;
    var prefix = isArticle ? '../' : '';

    var items = [
        { t: 'Überblick zur gesetzlichen Erbfolge', u: 'articles/gesetzliche-erbfolge.html', k: 'Parentelensystem Erbklassen Anwachsung Ehegattenerbrecht Testament Nachkommen Verwandtschaft' },
        { t: 'Überblick über das Pflichtteilsrecht', u: 'articles/pflichtteilsrecht.html', k: 'Mindestanteil Kinder Ehegatte Erbrecht Pflichtteilsbegünstigte' },
        { t: 'Wann ist eine Halbierung des Pflichtteils zulässig?', u: 'articles/halbierung-pflichtteil.html', k: 'Pflichtteilsminderung Naheverhältnis Kontakt Entfremdung ErbRÄG 2015 Beweislast' },
        { t: 'Die Sicherstellung von Pflichtteilsansprüchen', u: 'articles/sicherstellung-pflichtteilsansprueche.html', k: 'Nachlassseparation Sicherheitsleistung Ratenzahlung Stundung Pflichtteilsgläubiger' },
        { t: 'Erbunwürdigkeit und Enterbung', u: 'articles/erbunwuerdigkeit-enterbung.html', k: 'Enterbungsgründe Erbunfähigkeit Verwirkung Testament' },
        { t: 'Das gesetzliche Vorausvermächtnis von Ehegatten und Lebensgefährten', u: 'articles/vorausvermaechtnis.html', k: 'Wohnrecht Haushalt Lebensgefährte Mietrecht Gebrauchsvermögen Scheidung' },
        { t: 'Die finanzielle Abgeltung von Pflegeleistungen', u: 'articles/abgeltung-pflegeleistungen.html', k: 'Pflegevermächtnis Angehörigenpflege Stundensatz Pflegegeld Bereicherungsrecht' },
        { t: 'Die Ungültigkeit von letztwilligen Verfügungen', u: 'articles/ungueltigkeit-letztwillige-verfuegungen.html', k: 'Testierfähigkeit Testament Demenz Formungültigkeit Eigenhändig Fremdhändig Zeuge Unterschrift Drohung Zwang' },
        { t: 'Erbverzicht und Pflichtteilsverzicht', u: 'articles/erbverzicht-pflichtteilsverzicht.html', k: 'Notarakt Abfindung Unternehmensübergabe Verzicht Vertrag Gegenleistung' },
        { t: 'Der Ablauf eines Verlassenschaftsverfahrens', u: 'articles/ablauf-verlassenschaftsverfahren.html', k: 'Gerichtskommissär Notar Erbantrittserklärung Inventar Todesfallaufnahme Einantwortung Miteigentum' },
        { t: 'Erbschaft annehmen oder ausschlagen?', u: 'articles/erbschaft-annehmen-ausschlagen.html', k: 'bedingte Erbantrittserklärung Schulden Unternehmensfortführung Inventar Haftung Ausschlagung' },
        { t: 'Die Kontenöffnung im Verlassenschaftsverfahren', u: 'articles/kontenoeffnung.html', k: 'Bankgeheimnis Kontenregister Bankenrundruf Kontobewegungen Schenkungen Vermögensermittlung' },
        { t: 'Was ist bei der Erbteilung unter mehreren Miterben zu beachten?', u: 'articles/erbteilung-miterben.html', k: 'Erbteilungsübereinkommen Erbquoten Miteigentum Aufteilung Liegenschaftsteilung' },
        { t: 'Kosten und Steuern im Verlassenschaftsverfahren', u: 'articles/kosten-steuern.html', k: 'Gebühren Erbschaftsteuer Notargebühren Gerichtsgebühren Sachverständiger' },
        { t: 'Wann ist eine verlassenschaftsgerichtliche Genehmigung notwendig?', u: 'articles/verlassenschaftsgerichtliche-genehmigung.html', k: 'Veräußerung Verkehrswert Gläubiger Liegenschaftsverkauf Rechtsgeschäft ruhender Nachlass' },
        { t: 'Wann wird ein Verlassenschaftskurator bestellt?', u: 'articles/verlassenschaftskurator.html', k: 'Erbstreit erbenlose Verlassenschaft Heimfallsrecht Staat Insolvenz Kurator Vermögensverteilung' },
        { t: 'Was ist bei Vermögen des Erblassers im Ausland zu beachten?', u: 'articles/vermoegen-ausland.html', k: 'EU-Erbrechtsverordnung Nachlasszeugnis Drittstaaten Aufenthaltsort Erbstatut Liegenschaft Ausland' },
        { t: 'Was passiert mit der Eigentumswohnung im Verlassenschaftsverfahren?', u: 'articles/eigentumswohnung.html', k: 'Wohnungseigentum Mindestanteil Eigentümerpartnerschaft Versteigerung Übernahmspreis Wohnbedürfnis Grundbuch' },
        { t: 'Wie werden Liegenschaften im Verlassenschaftsverfahren bewertet?', u: 'articles/bewertung-liegenschaften.html', k: 'Verkehrswert Vergleichswert Ertragswert Sachwert Gutachten Sachverständiger Schätzung Einheitswert' },
        { t: 'Die Bewertung von Schenkungen im Rahmen der Schenkungsanrechnung', u: 'articles/schenkungsanrechnung.html', k: 'Verbraucherpreisindex Fruchtgenuss Bewertungszeitpunkt Miteigentumsabschlag Pflichtteil Nutzungsrecht' },
        { t: 'Das Einzelunternehmen des Erblassers in der Verlassenschaft', u: 'articles/einzelunternehmen.html', k: 'Unternehmenshaftung Fortführung Haftungsausschluss Gewerberegister Firmenbuch Betriebsstilllegung' },
        { t: 'Das Schicksal von OG- und KG-Anteilen in der Verlassenschaft', u: 'articles/og-kg-anteile.html', k: 'Gesellschafter Auflösung Auseinandersetzungsguthaben Kommanditist Nachfolgeklausel' },
        { t: 'Der GmbH-Anteil in der Verlassenschaft', u: 'articles/gmbh-anteil.html', k: 'Gesellschaftsvertrag Aufgriffsrecht Stammeinlage Firmenbuch Geschäftsführer Generalversammlung' },
        { t: 'Was passiert nach einem Todesfall?', u: 'index.html#faq' },
        { t: 'Wer erbt, wenn kein Testament vorhanden ist?', u: 'index.html#faq' },
        { t: 'Kann ich eine Erbschaft ausschlagen?', u: 'index.html#faq' },
        { t: 'Was kostet ein Verlassenschaftsverfahren?', u: 'index.html#faq' },
        { t: 'Brauche ich einen Rechtsanwalt im Verlassenschaftsverfahren?', u: 'index.html#faq' }
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
        var html = '';
        matches.slice(0, 8).forEach(function (item) {
            var url = prefix + item.u;
            if (!isArticle && item.u === 'index.html#faq') url = '#faq';
            html += '<a href="' + url + '">' + item.t + '</a>';
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
