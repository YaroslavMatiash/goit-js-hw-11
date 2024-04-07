import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchCards } from './js/pixabay-api';
import { renderCards } from './js/render-functions';

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

function toggleLoader() {
  loader.classList.toggle('is-hidden');
}
