'use strict';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const btn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.span');

const searchParams = new URLSearchParams({
    key: "42127236-8bfdbbfbeed8a2dadaca720e8",
    q: `${encodeURIComponent(input.value)}`,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    loader.classList.add("loader");
    gallery.innerHTML = "";
    fetchImages(searchParams)
    .then((data) => renderImages(data))
    .catch((error) => console.log(error))
    .finally(() => loader.remove());
    form.reset();
});

function fetchImages(searchParams) {
    const url = `https://pixabay.com/api/?${searchParams}`;
    return fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then((data) => {
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            })
        } else {
            renderImages(data);
        }
    })
}
function renderImages(data) {
    const markup = data.hits.map(data => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${data.largeImageURL}">
            <img 
                class="gallery-image"
                src="${data.webformatURL}" 
                alt="${data.tags}"
            />
        </a>
        <div class="description">
        <p><b>Likes: </b>${data.likes}</p>
        <p><b>Views: </b>${data.views}</p>
        <p><b>Comments: </b>${data.comments}</p>
        <p><b>Downloads: </b>${data.downloads}</p>
        </div>
        </li>`;
    })
    .join("");
    gallery.innerHTML = markup;
    let lightbox = new SimpleLightbox('.gallery a', options);
    lightbox.on('show.simplelightbox');
	lightbox.refresh();
}
const options = {
    captionDelay: 250,
};