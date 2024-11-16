<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Fonction pour ajuster dynamiquement la hauteur de la page
        function adjustPageHeight() {
            document.body.style.height = "auto";
            document.documentElement.style.height = "auto";
        }

        // Fonction pour gérer l'ouverture et la fermeture des sections (y compris les sous-sections)
        function toggleSection(content) {
            if (content) {
        content.classList.toggle('open');

    if (content.classList.contains('open')) {
        // Définir la hauteur du contenu sur son scrollHeight pour l'ouvrir
        content.style.maxHeight = content.scrollHeight + "px";
                } else {
        // Fermer la section
        content.style.maxHeight = "0";
                }

    // Réajuster la hauteur globale après chaque clic
    setTimeout(adjustPageHeight, 500); // Délai pour respecter la transition
            }
        }

    // Gestion des sections principales (main collapsibles)
    const mainHeaders = document.querySelectorAll('.main-collapsible');
        mainHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            toggleSection(content);
        });
        });

    // Gestion des sous-sections (sub collapsibles)
    const subHeaders = document.querySelectorAll('.sub-collapsible');
        subHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.nextElementSibling;
            toggleSection(content);
        });
        });

    // Fermer tous les autres sous-menus ouverts lorsqu'on clique sur une nouvelle section
    const collapsibleSections = document.querySelectorAll('.main-collapsible, .sub-collapsible');

    collapsibleSections.forEach(function(section) {
        section.addEventListener('click', function () {
            const content = section.nextElementSibling;
            if (content && (content.classList.contains('main-collapsible-content') || content.classList.contains('sub-collapsible-content'))) {
                // Fermer tous les autres sous-menus ouverts
                document.querySelectorAll('.main-collapsible-content.open, .sub-collapsible-content.open').forEach(function (openSection) {
                    if (openSection !== content) {
                        openSection.classList.remove('open');
                        openSection.style.maxHeight = "0"; // Fermer les autres sections
                    }
                });
                // Ouvrir le sous-menu cliqué
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + "px"; // Ouvrir la section avec animation
            }
        });
        });
    });
</script>
