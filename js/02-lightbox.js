import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGallaryMarkup(items) {
  return items
    .map(
      (item) => `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}"/>
                </a>`
    )
    .join("");
}
const addGallaryMarkup = createGallaryMarkup(galleryItems);
divRef.innerHTML = addGallaryMarkup;
divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandarAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    new SimpleLightbox(".gallery a", {
      /* options */
    });
  }
}

function blockStandarAction(evt) {
  evt.preventDefault();
}
