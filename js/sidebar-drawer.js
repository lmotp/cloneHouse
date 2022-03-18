const drawerMenuButton = document.querySelectorAll('.sidebar-nav .drawer-menu-button');

drawerMenuButton.forEach((button) =>
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('is-open');
  }),
);
