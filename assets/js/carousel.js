/* Alertas IHCA — carrusel ligero (flechas, teclado, swipe, indicador 01 / N) */
(function () {
  function pad2(n) { return String(n).padStart(2, '0'); }

  function initCarousel(root) {
    const track = root.querySelector('.carousel-track');
    const slides = Array.from(root.querySelectorAll('.carousel-slide'));
    const prevBtn = root.querySelector('[data-dir="prev"]');
    const nextBtn = root.querySelector('[data-dir="next"]');
    const counter = root.querySelector('.carousel-counter');
    if (!track || slides.length === 0) return;

    let index = 0;
    const total = slides.length;

    function update() {
      track.style.transform = `translateX(${-index * 100}%)`;
      if (counter) counter.textContent = `${pad2(index + 1)} / ${pad2(total)}`;
    }

    function go(delta) {
      index = (index + delta + total) % total;
      update();
    }

    prevBtn && prevBtn.addEventListener('click', () => go(-1));
    nextBtn && nextBtn.addEventListener('click', () => go(1));

    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    });

    // Swipe táctil
    let startX = null;
    root.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) startX = e.touches[0].clientX;
    }, { passive: true });
    root.addEventListener('touchend', (e) => {
      if (startX == null) return;
      const endX = (e.changedTouches[0] || {}).clientX;
      if (endX == null) { startX = null; return; }
      const dx = endX - startX;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      startX = null;
    });

    // Click en imagen para abrir modal
    slides.forEach((slide) => {
      const img = slide.querySelector('img');
      if (!img) return;
      slide.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('imgmodal:open', { detail: { src: img.src, alt: img.alt } }));
      });
    });

    update();
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel').forEach(initCarousel);
  });
})();
