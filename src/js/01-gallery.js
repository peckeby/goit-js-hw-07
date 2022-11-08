import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallUrl = [...document.querySelectorAll(".gallery__link")];

const gallImgR = [...document.querySelectorAll(".gallery__image")];

const setAttributes = (el, attrs) => Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));

const getUrl = () =>
    galleryItems.forEach(item =>
        gallImgR.forEach (img => 
            gallImgR.indexOf(img) === galleryItems.indexOf(item) 
            ? setAttributes(img, {"data-source": `${item.original}`, "src": `${item.preview}`, "alt": `${item.description}`}) 
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

const gallery = document.querySelector(".gallery");

const openFullSize = event => {
event.preventDefault();
const {target} = event;
const instance = basicLightbox.create(`<img src="${target.dataset.source}" width="800" height="600">`, {
    closable: false});
    instance.show();
document.addEventListener ("keydown", event => {
        if(event.key === "Escape") {
         instance.close()}});
};

gallery.addEventListener("click", openFullSize);