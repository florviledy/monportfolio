document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const projectCards = document.querySelectorAll(".project-card");
  
    function filterProjects(category) {
      projectCards.forEach(card => {
        if (card.dataset.category === category) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    }
  
    // Afficher par défaut les projets Web
    filterProjects("web");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", function () {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
  
        const category = this.dataset.tab;
        filterProjects(category);
      });
    });
  
    // Gestion de la modale
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");
    const closeModal = document.querySelector(".close-modal");
  
    function openModal(title, image, description, link) {
      modalTitle.textContent = title;
      modalImage.src = image;
      modalDescription.textContent = description;
      modalLink.href = link;
      modal.style.display = "flex";
    }
  
    document.querySelectorAll(".details-btn").forEach(button => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        const card = this.closest(".project-card");
        openModal(card.dataset.title, card.dataset.image, card.dataset.description, card.dataset.link || "#");
      });
    });
  
    closeModal.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
  
