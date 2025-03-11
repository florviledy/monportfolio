document.addEventListener("DOMContentLoaded", function () {
    let tabButtons = document.querySelectorAll(".tab-btn");
    let projectCards = document.querySelectorAll(".project-card");

    function filterProjects(category) {
        projectCards.forEach(card => {
            if (card.dataset.category === category) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    // Activer par défaut "Projets Web"
    filterProjects("web");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.dataset.tab;

            // Mettre à jour les boutons actifs
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Filtrer les projets
            filterProjects(category);
        });
    });

    // Gestion de la modale
    let modal = document.getElementById("project-modal");
    let modalTitle = document.getElementById("modal-title");
    let modalImage = document.getElementById("modal-image");
    let modalDescription = document.getElementById("modal-description");
    let modalLink = document.getElementById("modal-link");
    let closeModal = document.querySelector(".close-modal");

    function openModal(title, image, description, link) {
        modalTitle.textContent = title;
        modalImage.src = image;
        modalDescription.textContent = description;
        modalLink.href = link;
        modalLink.style.display = link ? "inline-block" : "none"; 
        modal.style.display = "flex";
    }

    // Ouvrir la modale au clic sur "Détails"
    document.querySelectorAll(".details-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); 
            let projectCard = this.closest(".project-card");
            let title = projectCard.dataset.title;
            let image = projectCard.dataset.image;
            let description = projectCard.dataset.description;
            let link = projectCard.dataset.link || "#"; 
            openModal(title, image, description, link);
        });
    });

    // Fermer la modale
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
