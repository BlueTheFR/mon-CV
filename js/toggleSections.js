document.addEventListener("DOMContentLoaded", function () {
    function closeSection(content) {
        content.classList.remove('open');
        content.style.maxHeight = "0";
    }

    function openSection(content) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
    }

    function toggleSection(content) {
        if (!content) return;
        if (content.classList.contains('open')) {
            closeSection(content);
        } else {
            document.querySelectorAll('.main-collapsible-content.open, .sub-collapsible-content.open').forEach(function (openSection) {
                if (openSection !== content) {
                    closeSection(openSection);
                }
            });
            openSection(content);
        }
    }

    document.querySelectorAll('.main-collapsible, .sub-collapsible').forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            if (content && (content.classList.contains('main-collapsible-content') || content.classList.contains('sub-collapsible-content'))) {
                toggleSection(content);
            }
        });
    });
});
