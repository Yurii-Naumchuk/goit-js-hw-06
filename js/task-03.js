const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для створення галереї 
// зображень на підставі масиву даних. HTML містить список ul.gallery.
const gallery = document.querySelector(".gallery");
const createImg = images.map(
  (image) => `<li><img src ="${image.url}"alt="${image.alt}" </img></li>`
);
gallery.insertAdjacentHTML("beforeend", createImg);



// const gallery = document.querySelector(".gallery");
// const createImg = images.map(({ url, alt }) => {
//   return `<li><img alt='${alt}'; src='${url}';></li>`;
// }).join(" ");
// gallery.insertAdjacentHTML("beforeend", createImg);




