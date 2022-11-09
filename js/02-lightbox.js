import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsElements = [...document.querySelectorAll(".gallery__item")];

const setAttributes = (el, attrs) => Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));

galleryItemsElements.forEach((item, index) => {
  setAttributes(item.firstElementChild, { src: `${galleryItems[index].preview}`, alt: `${galleryItems[index].description}`});
  item.setAttribute('href', `${galleryItems[index].original}`) 
});

const gallery = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250ms',
});
