import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallUrl = [...document.querySelectorAll(".gallery__item")];

const gallImgR = [...document.querySelectorAll(".gallery__image")];

const setAttributes = (el, attrs) => Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));

const getUrl = () =>
    galleryItems.forEach(item =>
        gallImgR.forEach (img => 
            gallImgR.indexOf(img) === galleryItems.indexOf(item) 
            ? setAttributes(img, {"src": `${item.preview}`, "alt": `${item.description}`}) 
            : false            
            ));
    galleryItems.forEach(item =>
        gallUrl.forEach (a => 
            gallUrl.indexOf(a) === galleryItems.indexOf(item) 
            ? a.setAttribute("href", `${item.original}`) 
            : false
        )
    );

getUrl();

let gallery = new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250ms',
});