document.addEventListener('DOMContentLoaded', function() {
  // Hex Menu Toggle
  var j = 0;
  var menuItems = document.getElementById("menu").childNodes;
  
  function expand() {
    if (j == 0) {
      document.getElementById("add").style.transform = 'rotate(45deg)';
      document.getElementById("menu").style.transform = 'scale(1)';
      menuItems[1].style.transform = 'translateY(-160px)';
      menuItems[3].style.transform = 'translate(140px,-80px)';
      menuItems[5].style.transform = 'translate(140px,80px)';
      menuItems[7].style.transform = 'translateY(160px)';
      menuItems[9].style.transform = 'translate(-140px,80px)';
      menuItems[11].style.transform = 'translate(-140px,-80px)';
      j = 1;
    } else {
      document.getElementById("add").style.transform = 'rotate(0deg)';
      document.getElementById("menu").style.transform = 'scale(0.9)';
      menuItems[1].style.transform = 'translateY(0)';
      menuItems[3].style.transform = 'translate(0)';
      menuItems[5].style.transform = 'translate(0)';
      menuItems[7].style.transform = 'translateY(0)';
      menuItems[9].style.transform = 'translate(0)';
      menuItems[11].style.transform = 'translate(0)';
      j = 0;
    }
  }

  // Content Section Toggle
  function initContentSections() {
    const contentSections = document.querySelectorAll('#item1, #item2');
    const closeButtons = document.querySelectorAll('.button');
    
    function closeAllSections() {
      contentSections.forEach(section => {
        section.style.display = 'none';
      });
      history.pushState(null, null, ' ');
    }
    
    window.addEventListener('hashchange', function() {
      const id = window.location.hash.substring(1);
      closeAllSections();
      
      if (id) {
        const section = document.getElementById(id);
        if (section) section.style.display = 'block';
      }
    });
    
    closeButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        closeAllSections();
      });
    });
    
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const section = document.getElementById(id);
      if (section) section.style.display = 'block';
    }
  }

  // Initialize
  window.expand = expand;
  initContentSections();
});