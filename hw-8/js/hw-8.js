"use strict"


const galleryItems = [{
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  }
];

const gallery = document.querySelector('.js-image-gallery');

const fullview = createFullview(galleryItems[0].fullview, galleryItems[0].alt);
const preview = createPreview(galleryItems);

gallery.addEventListener('click', handleGalleryClick);

gallery.append(fullview, preview);




function handleGalleryClick(e) {
  if (e.target.parentNode.nodeName === 'LI') {
    let fullviewImage = document.querySelector('.fullview-image');
    fullviewImage.src = e.target.dataset.fullview;
    fullviewImage.alt = e.target.alt;


    const allPreviewImages = Array.from(document.querySelectorAll('.preview img'));

    allPreviewImages.forEach(element => element.classList.add('in-active-boxshadow'));
    event.target.classList.remove('in-active-boxshadow');
    event.target.classList.add('active-boxshadow');
  }
}

function createFullview(src, alt) {
  const fullview = document.createElement('div');
  fullview.classList = 'fullview';
  const image = document.createElement('img');
  image.classList = 'fullview-image';
  image.setAttribute('src', src);
  image.setAttribute('alt', alt);
  fullview.append(image);
  return fullview;
}

function createPreview(items) {
  let preview = document.createElement('ul');
  preview.classList = 'preview';
  const previewItems = createPreviewItems(items);

  preview.append(...previewItems)
  return preview;
}

function createPreviewItems(items) {
  const elements = items.map(({
    preview,
    fullview,
    alt
  }) => {
    const li = document.createElement("li");
    let img = document.createElement("img");
    img.classList = "preview-image";
    img.setAttribute("src", preview);
    img.setAttribute("alt", alt);
    img.setAttribute("data-fullview", fullview)
    li.append(img);
    return li;
  })
  return elements;
}