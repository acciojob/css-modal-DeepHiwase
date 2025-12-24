document.addEventListener("DOMContentLoaded", function() {
  const openModalBtn = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-modal");

  // Open modal
  openModalBtn.onclick = function() {
    modal.style.display = "flex";
  };

  // Close modal with close button
  closeModalBtn.onclick = function() {
    modal.style.display = "none";
  };

  // Close modal when clicking outside
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});