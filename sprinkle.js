
document.addEventListener('DOMContentLoaded', () => {
  const rupeeColors = ['#00ff00', '#ffcc00', '#00ffff', '#ff66ff', '#66ff66'];
  const rupeeSymbols = ['₹', '₹', '₹', '₹', '₹'];
  const count = 30;

  for (let i = 0; i < count; i++) {
    const rupee = document.createElement('div');
    rupee.classList.add('rupee');
    rupee.style.left = Math.random() * 100 + 'vw';
    rupee.style.animationDuration = (2 + Math.random() * 3) + 's';
    rupee.style.fontSize = (16 + Math.random() * 20) + 'px';
    rupee.style.color = rupeeColors[Math.floor(Math.random() * rupeeColors.length)];
    rupee.textContent = rupeeSymbols[Math.floor(Math.random() * rupeeSymbols.length)];
    document.body.appendChild(rupee);
  }
});
