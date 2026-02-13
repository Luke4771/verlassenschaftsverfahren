(function () {
    var letters = document.querySelectorAll('.glossary-letter');
    var links = document.querySelectorAll('.glossary-alphabet a');
    if (!letters.length || !links.length) return;

    // Build a map from letter id to alphabet link
    var linkMap = {};
    links.forEach(function (link) {
        var hash = link.getAttribute('href');
        if (hash) linkMap[hash.replace('#', '')] = link;
    });

    var currentActive = null;

    function setActive(id) {
        if (currentActive === id) return;
        links.forEach(function (l) { l.classList.remove('is-active'); });
        if (linkMap[id]) linkMap[id].classList.add('is-active');
        currentActive = id;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, {
        rootMargin: '-150px 0px -60% 0px',
        threshold: 0
    });

    letters.forEach(function (letter) {
        observer.observe(letter);
    });
})();
