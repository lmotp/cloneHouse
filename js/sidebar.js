const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

const sidebarToggle = (funcs) => (e) => {
  if (funcs === 'add') {
    sidebar.classList.add('is-active');
    sidebarOverlay.classList.add('is-active');
  } else {
    sidebar.classList.remove('is-active');
    sidebarOverlay.classList.remove('is-active');
  }
};

sidebarMenuButton.addEventListener('click', sidebarToggle('add'));

sidebarOverlay.addEventListener('click', sidebarToggle('remove'));
