document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.main-collapsible, .sub-collapsible').forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            if (!content) return;
            if (!content.classList.contains('main-collapsible-content') && !content.classList.contains('sub-collapsible-content')) return;

            var wasClosed = !content.classList.contains('open');
            content.classList.toggle('open');

            if (wasClosed) {
                setTimeout(function () {
                    header.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 400);
            }
        });
    });
});
