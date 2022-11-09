import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");
const galleryLink = galleryItems
.map((item) => `<a class="gallery__link" src="${item.original}">
<img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`)
.join("");

gallery.insertAdjacentHTML("afterbegin", galleryLink);


const openFullSize = event => {
event.preventDefault();

const {target} = event;

const instance = basicLightbox.create(`<img src="${target.dataset.source}" width="800" height="600">`, {
    closable: false,

    onShow: (instance) => {
        document.addEventListener("keydown", (event) => {
            if(event.key === "Escape") {
            instance.close()}})
            },

    onClose: () => {
        document.removeEventListener("keydown", event)
            },
        }
    );

    instance.show();
};


gallery.addEventListener("click", openFullSize);