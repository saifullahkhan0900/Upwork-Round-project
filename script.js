const body = document.querySelector('body');
const a = document.getElementById('mobile-menu');
function menuBtn(x) {
  if (a.style.display === 'none') {
    a.style.display = 'block';
    body.style.overflowY = 'hidden';

  } else {
    a.style.display = 'none';
    body.style.overflowY = 'scroll';
  }
}