const left = document.getElementById('left-side');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX / window.innerWidth;
  left.style.width = x * 100 + '%';
});
