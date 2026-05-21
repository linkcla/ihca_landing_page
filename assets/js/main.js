/* Alertas IHCA — wiring inicial: fade-in, modal de imagen */
(function () {
  // Fade-in con IntersectionObserver
  function initFadeIn() {
    const targets = document.querySelectorAll('.section, .hero, .card, .module');
    targets.forEach((el) => el.classList.add('fade-in'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    targets.forEach((el) => io.observe(el));
  }

  // Modal de imagen ampliada
  function initImgModal() {
    const modal = document.getElementById('imgModal');
    if (!modal) return;
    const img = modal.querySelector('img');
    const closeBtn = modal.querySelector('.img-modal-close');

    function open(src, alt) {
      img.src = src;
      img.alt = alt || '';
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    function close() {
      modal.hidden = true;
      img.src = '';
      document.body.style.overflow = '';
    }

    window.addEventListener('imgmodal:open', (e) => open(e.detail.src, e.detail.alt));
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.hidden) close();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initFadeIn();
    initImgModal();
  });
})();
