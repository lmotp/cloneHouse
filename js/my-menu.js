const myMenu = document.querySelector('.my-menu');
const myMenuButton = document.querySelector('.my-menu-button');

myMenuButton.addEventListener('click', function () {
  myMenu.classList.toggle('is-active');
});

myMenuButton.addEventListener('blur', function () {
  myMenu.classList.remove('is-active');
});
