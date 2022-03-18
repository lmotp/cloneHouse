const sectionHeaderIconButton = document.querySelector('.product-shipment > .product-section-header .icon-button');

sectionHeaderIconButton.addEventListener('click', (e) => {
  e.target.parentNode.parentNode.classList.add('is-open');
});
