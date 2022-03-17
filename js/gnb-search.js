const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const deleteAllbutton = gnbSearchHistory.querySelector('.search-history-header button');

gnbSearchInput.addEventListener('focus', function () {
  if (gnbSearchHistoryList.children.length) {
    gnbSearchHistory.classList.add('is-active');
  }
});

const deleteButton = gnbSearchHistoryList.querySelectorAll('.delete-button');

deleteAllbutton.addEventListener('mousedown', function (e) {
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active');
});

deleteButton.forEach((button) => {
  button.addEventListener('mousedown', function (e) {
    e.preventDefault();
    gnbSearchHistoryList.removeChild(this.parentNode);

    if (!gnbSearchHistoryList.children.length) {
      gnbSearchHistory.classList.remove('is-active');
    }
  });
});

gnbSearchInput.addEventListener('blur', function (e) {
  gnbSearchHistory.classList.remove('is-active');
});
