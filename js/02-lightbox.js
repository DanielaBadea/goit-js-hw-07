import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsSelect = document.querySelector('.gallery');
console.log(galleryItemsSelect);
// am afisat tagul ul din documentul html
// cream lista cu imaginile din obiectul 'gallary-items'

const createGallaryItems = galleryItems 
    .map((galleryItems) => 
    `<li class="gallery__item">

    <a class="gallery__link" href="${galleryItems.original}">
    <img class="gallery__image" src="${galleryItems.preview}" data-src="${galleryItems.original}" alt="${galleryItems.description}" />
    </a>

    </li>`
    ).join(" ");
    // pune spatiu intre tagurile li din lista 
    console.log(createGallaryItems);
galleryItemsSelect.insertAdjacentHTML('beforeend', createGallaryItems );

const lightbox = new SimpleLightbox( '.gallery a' , {
    navText: ['prev','next'],
    captionPosition : 'bottom'
});
console.log(lightbox);