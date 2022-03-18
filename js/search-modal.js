const searchModal = document.querySelector('.search-modal');
const searchOverlay = document.querySelector('.overlay');
const searchButton = document.querySelector('.gnb-icon-button.is-search');
const searchModalCloseButton = searchModal.querySelector('.search-modal-form .btn-40');

searchButton.addEventListener('click', () => {
  searchModal.classList.add('is-active');
  searchOverlay.classList.add('is-open');
});

searchModalCloseButton.addEventListener('click', () => {
  searchModal.classList.remove('is-active');
  searchOverlay.classList.remove('is-active');
});
