document.addEventListener("DOMContentLoaded", function () {
    // Gestion des sections principales
    const mainHeaders = document.querySelectorAll('.main-collapsible');

    mainHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content) {
                content.classList.toggle('open');

                // Si le contenu est ouvert, on définit la hauteur pour qu'il s'agrandisse
                if (content.classList.contains('open')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    // Si le contenu est fermé, on remet maxHeight à 0
                    content.style.maxHeight = "0";
                }
            }
        });
    });

    // Gestion des sous-sections
    const subHeaders = document.querySelectorAll('.sub-collapsible');

    subHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content) {
                content.classList.toggle('open');

                // Définir la hauteur dynamique pour ouvrir ou fermer la sous-section
                if (content.classList.contains('open')) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = "0";
                }
            }
        });
    });
});
