import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchCards } from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');
const cardsList = document.querySelector('.card-list');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearchFormSubmit);

const instance = new SimpleLightbox('.card-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onSearchFormSubmit(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.search.value.trim();
  e.currentTarget.elements.search.value = '';

  cardsList.innerHTML = '';
  toggleLoader();

  fetchCards(searchQuery)
    .then(data => {
      renderCards(data);
    })
    .then(() => toggleLoader());
}

function renderCards({ hits }) {
  if (!hits.length) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }
  const markup = getMarkup(hits);
  cardsList.insertAdjacentHTML('beforeend', markup);
  instance.refresh();
}

function getMarkup(data) {
  return data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="card-item">
  <a href=${largeImageURL}
    ><img src=${webformatURL} alt="${tags}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${likes}</p>
      </li>
      <li>
        Views
        <p>${views}</p>
      </li>
      <li>
        Comments
        <p>${comments}</p>
      </li>
      <li>
        Downloads
        <p>${downloads}</p>
      </li>
    </ul></a
  >
</li>`
    )
    .join('');
}

function toggleLoader() {
  loader.classList.toggle('is-hidden');
}
