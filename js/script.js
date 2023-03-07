let menuButton = document.querySelector('.burger');
let menu = document.querySelector('header');
menuButton.addEventListener('click', () => {
  menu.classList.toggle('open');
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('header').classList.remove('open');
  }
})

document.getElementById('menu').addEventListener('click', (event) =>{
  event._isClickWithInMenu = true;
})

document.getElementsByClassName('burger').addEventListener('click', (event) =>{
  event._isClickWithInMenu = true;
})

document.body.addEventListener('click', (event) =>{
  if (event._isClickWithInMenu) return;
  document.querySelector('header').classList.remove('open');
})