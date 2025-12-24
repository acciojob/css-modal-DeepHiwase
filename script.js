document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-modal');

  // Open modal
  openBtn.addEventListener('click', function() {
    modal.style.display = 'flex'; // ✅ Set to flex when opening
  });

  // Close modal - close button
  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation(); // ✅ Prevent modal click
    modal.style.display = 'none'; // ✅ Cypress expects 'none'
  });

  // Close modal - click outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) { // ✅ Only outside content
      modal.style.display = 'none';
    }
  });
});