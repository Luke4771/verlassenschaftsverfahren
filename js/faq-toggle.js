document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.parentElement;
            var answer = item.querySelector('.faq-answer');
            var isOpen = item.classList.contains('open');

            item.classList.toggle('open');
            btn.setAttribute('aria-expanded', !isOpen);
            answer.style.maxHeight = isOpen ? '0' : answer.scrollHeight + 'px';
        });
    });
});
