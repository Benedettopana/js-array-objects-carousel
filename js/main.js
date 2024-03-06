const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const myCarouselImages = document.querySelector('.my-carousel-images');
const myThumbnails = document.querySelector('.my-thumbnails');

// CREO IL MIO CONTATORE PER L'INDICE
let c = 0;

// RESET
myCarouselImages.innerHTML = '';
myThumbnails.innerHTML = '';

// CREO LE IMG
images.forEach((elemento, indice) =>{
    console.log(indice);
    myCarouselImages.innerHTML += `
    <div class="my-carousel-item">
        <img class="img-fluid" src="${elemento.url}" alt="${elemento.title} picture">
        <div class="item-description px-3">
            <h2>${elemento.title}</h2>
            <p>${elemento.description}</p>
        </div>
    </div>
    `;
});
// CREO LA THUMBNAIL
// pulsante back
myThumbnails.innerHTML += `
    <div class="my-previous position-absolute">
        <span class="my-prev-hook"></span>
    </div>
`;
// pulsante next
myThumbnails.innerHTML += `
    <div class="my-next position-absolute">
        <span class="my-next-hook"></span>
    </div>
`;

images.forEach((elemento, indice) =>{
    myThumbnails.innerHTML += `
    <div class="my-thumbnail">
        <img class="img-fluid" src="${elemento.url}" alt="Thumbnail of ${elemento.title} picture">
    </div>

    `;
});

// RENDO IL PRIMO ELEMENTO DELL'ARRAY ACTIVE
const myCarouselItem = document.getElementsByClassName('my-carousel-item');
myCarouselItem[c].classList.add('active');
const myThumbnail = document.getElementsByClassName('my-thumbnail');
myThumbnail[c].classList.add('active');



