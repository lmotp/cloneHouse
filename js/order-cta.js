const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;
const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

orderCtaBookmarkButton.addEventListener('click', function () {});

orderCtaBuyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
});

orderModalOverlay.addEventListener('click', function () {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
});

orderCtaBookmarkButton.addEventListener('click', function () {
  const [icon, countSpan] = this.children;
  const count = Number(countSpan.innerHTML.replaceAll(',', ''));

  let newCount = count;
  if (this.classList.contains('is-active')) {
    icon.setAttribute('class', 'ic-bookmark');
    newCount = newCount - 1;
  } else {
    icon.setAttribute('class', 'ic-bookmark-filled');
    newCount = newCount + 1;
  }

  countSpan.innerHTML = newCount.toLocaleString();
  countSpan.setAttribute('arai-label', `북마크 ${newCount.toLocaleString()}회 `);
  this.classList.toggle('is-active');
});
