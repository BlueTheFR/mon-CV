document.addEventListener("DOMContentLoaded", function () {
    // Gestion des sections principales
    const mainHeaders = document.querySelectorAll('.main-collapsible');

    mainHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content) {
                content.classList.toggle('open'); // Ajout/suppression de la classe 'open'
            }
        });
    });

    // Gestion des sous-sections
    const subHeaders = document.querySelectorAll('.sub-collapsible');

    subHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content) {
                content.classList.toggle('open'); // Ajout/suppression de la classe 'open'
            }
        });
    });
});
