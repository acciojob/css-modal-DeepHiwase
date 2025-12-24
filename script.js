// ✅ EXECUTE IMMEDIATELY - no DOMContentLoaded needed for Cypress
(function() {
  const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-modal');

  // Open modal
  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex'; // ✅ flex for centering
    console.log('Modal opened:', modal.style.display); // ✅ Debug
  });

  // Close modal - close button
  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    modal.style.display = 'none'; // ✅ Cypress expects exactly this
    console.log('Modal closed by button:', modal.style.display); // ✅ Debug
  });

  // Close modal - click outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.classList.contains('modal')) {
      modal.style.display = 'none';
      console.log('Modal closed by outside click:', modal.style.display); // ✅ Debug
    }
  });

  // Prevent clicks inside modal-content from closing modal
  document.querySelector('.modal-content').addEventListener('click', function(e) {
    e.stopPropagation();
  });
})();