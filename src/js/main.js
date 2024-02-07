'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const btn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onFormSubmit);

const searchParams = new URLSearchParams({
    key: 42256594-6,
    q: `"${image.tags}"`,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    // likes: Total number of likes,
    // views: Total number of views,
    // comments: Total number of comments,
    // downloads: 	Total number of downloads,
});

function onFormSubmit() {
    fetch(`https://pixabay.com/api/images?${searchParams}`)
    .then((response) => {
        if (!response.ok) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
        return response.json();
    })
    .then((images) => {
        const markup = images.map((image) => {
            return `<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img 
                    class="gallery-image"
                    src="${image.webformatURL}" 
                    alt="${image.tags}"
                />
            </a>
            </li>`;
        })
        .join("");
        gallery.insertAdjacentHTML('beforeend', markup);
    })
}
const lightbox = new SimpleLightbox('.gallery a', {
    // likes: Total number of likes,
    // views: Total number of views,
    // comments: Total number of comments,
    // downloads: 	Total number of downloads,
});