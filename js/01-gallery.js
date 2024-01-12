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

//  // Adăugăm un eveniment de click pe lista
const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
     // Obținem URL-ul imaginii originale din atributul data-src
    const source = e.target.dataset.src;
    console.log(source);
    // Creăm o instanță de fereastră modală utilizând basicLightbox.create
    const lightBoxModal = basicLightbox.create(
    `<img src= "${source}"> `)
    lightBoxModal.show();

};
galleryItemsSelect.addEventListener('click', handleClick);

