import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItems = [...document.querySelectorAll(".gallery__item")];

const setAttributes = (el, attrs) => Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));

galleryItems.forEach((item, index) => {
  setAttributes(item.firstElementChild, { src: `${item.preview}`, alt: `${item.description}`}));
  item.setAttribute('href', `${item.original}`) 
});

const gallery = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250ms',
});
