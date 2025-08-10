document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('mnav-btn');
  const drawer = document.getElementById('mnav-drawer');
  const backdrop = document.getElementById('mnav-backdrop');

  if (!btn || !drawer || !backdrop) {
    console.error('Mobile nav elements not found!');
    return;
  }

  function openDrawer() {
    drawer.hidden = false;
    backdrop.hidden = false;
    setTimeout(() => {
      drawer.classList.add('is-open');
      backdrop.classList.add('is-open');
    }, 10);
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      drawer.hidden = true;
      backdrop.hidden = true;
    }, 300);
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
  });

  backdrop.addEventListener('click', closeDrawer);
  
  drawer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') closeDrawer();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
});
