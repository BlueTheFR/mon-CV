document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.main-collapsible, .sub-collapsible').forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            if (!content) return;
            if (!content.classList.contains('main-collapsible-content') && !content.classList.contains('sub-collapsible-content')) return;

            content.classList.toggle('open');
            if (content.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "";
            }
        });
    });
});
