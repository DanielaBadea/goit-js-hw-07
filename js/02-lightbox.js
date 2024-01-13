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
    // text sau html pentru săgețile de navigare
    navText: ['←','→'],
    // poziția legendei. Opțiunile sunt: sus, jos sau în afara (rețineți că exteriorul poate fi în afara razei de vizualizare vizibile!).
    captionPosition : 'bottom',
    overlay: true,
    // opacitatea suprapunerii este de tip float
    overlayOpacity : 0.9,
    // cat dureaza animatia si este de tip int
    animationSpeed : 350,
    // mesajul afișat în cazul în care imaginea nu a fost găsită
    alertErrorMessage: 'Image not found, next image will be loaded',
    //  activează afișarea descrierilor
    captions: true,
    // specifică că atributul `alt` al elementului `<img>` va fi folosit pentru a furniza descrierea imaginii.
    captionsData: 'alt'

});



console.log(lightbox);