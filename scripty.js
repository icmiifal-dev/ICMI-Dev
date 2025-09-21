 <script>
  // Permite arrastar com o mouse ou toque para rolar o carrossel
  const carousel = document.getElementById('participants-carousel');
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
  });
  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade de rolagem
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Suporte para toque em dispositivos móveis
  let touchStartX = 0;
  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener('touchmove', (e) => {
    const touchX = e.touches[0].clientX;
    const walk = (touchX - touchStartX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });
</script>