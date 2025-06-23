
document.addEventListener('DOMContentLoaded', () => {
  const colors = ['#00ff00', '#ffcc00', '#00ffff', '#ff66ff', '#66ff66', '#ff3366', '#3399ff', '#ff9933'];
  const count = 100;

  function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.animationDuration = (2 + Math.random() * 2) + 's';
    dot.style.width = dot.style.height = (4 + Math.random() * 4) + 'px';
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 4000);
  }

  setInterval(createDot, 100);
});
