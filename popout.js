  document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const honeycombLinks = document.querySelectorAll('.honeycomb-link');
    const popupOverlay = document.getElementById('popup-overlay');
    const popups = document.querySelectorAll('.popup');
    const closeBtns = document.querySelectorAll('.close-btn');
    
    // Open popup when honeycomb cell is clicked
    honeycombLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const popup = document.getElementById(targetId);
        
        if (popup) {
          popupOverlay.style.display = 'block';
          popup.style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      });
    });
    
    // Close popup when close button is clicked
    closeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
        popups.forEach(popup => popup.style.display = 'none');
        document.body.style.overflow = 'auto';
      });
    });
    
    // Close popup when clicking outside content
    popupOverlay.addEventListener('click', function() {
      this.style.display = 'none';
      popups.forEach(popup => popup.style.display = 'none');
      document.body.style.overflow = 'auto';
    });
  });