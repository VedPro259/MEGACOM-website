const toggleBtn = document.querySelector('.menu-above-tooltip');
const divList = document.querySelector('.each-tooltip-section');
var x = window.matchMedia("(max-width: 1004px)");

if (x.matches) {
  divList.style.display = 'none';
}

toggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'flex') {
    divList.style.display = 'none';
  } else {
    divList.style.display = 'flex';
  }
});

window.addEventListener('resize', () => {
  if (!x.matches) {
    divList.style.display = 'none';
  }
});
