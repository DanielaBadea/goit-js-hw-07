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

// const selectorElem = document.querySelector('.gallery')
// galleryItems.forEach(elem => {
//     const listElem = document.createElement('li')
//     const linkItem = document.createElement('a')
//     listElem.classList.add("gallery__item");
//     linkItem.classList.add("gallery__link");
//     linkItem.href = elem.original;
//     const imgElem = document.createElement('img');
//     imgElem.classList.add("gallery__image");
//     imgElem.src = elem.preview;
//     imgElem.dataset.src = elem.original;
//     imgElem.alt = elem.description;
//     linkItem.appendChild(imgElem);
//     listElem.appendChild(linkItem);
//     selectorElem.appendChild(listElem);
    
// } );


 // Adăugăm un eveniment de click pe lista
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

    const pressKey = (e) => {
        e.preventDefault();
        if(e.key === 'Escape'){
          // Verificăm dacă fereastra modală este deschisă înainte de a o închide
            if(lightBoxModal.visible()){
                lightBoxModal.close();
            // Ștergem evenimentul de apăsare a tastei Escape după închiderea ferestrei modale
                document.removeEventListener('keydown' , pressKey);
            }
        }
    };
    galleryItemsSelect.addEventListener('keydown', pressKey);
};
galleryItemsSelect.addEventListener('click', handleClick );

// acest cod nu a functionat deoarece intervine GlobalScope

// const pressKey = (e) => {
//     e.preventDefault();
//     if(e.key === 'Escape'){
//         lightBoxModal.close();
//         document.removeEventListener('keydown' , pressKey);
//     }
// };

// galleryItemsSelect.addEventListener('keydown', pressKey);