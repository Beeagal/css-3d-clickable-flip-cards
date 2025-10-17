// Click-to-flip for touch and keyboard accessibility
const cards = document.querySelectorAll('[data-card]');

function toggleCard(card) {
  card.classList.toggle('is-flipped');
}

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    const flipBtn = e.target.closest('[data-flip]');
    if (flipBtn) {
      e.preventDefault();
      toggleCard(card);
    }
  });

  // Keyboard support
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const focusFlipButton = card.querySelector('[data-flip]');
      if (document.activeElement === focusFlipButton) {
        e.preventDefault();
        toggleCard(card);
      }
    }
  });
});
