document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    function setMenuState(isOpen) {
        toggle.classList.toggle('active', isOpen);
        menu.classList.toggle('open', isOpen);
        document.body.classList.toggle('nav-open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    setMenuState(false);

    toggle.addEventListener('click', function() {
        setMenuState(!menu.classList.contains('open'));
    });

    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        link.addEventListener('click', function() {
            setMenuState(false);
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            setMenuState(false);
        }
    });
});
