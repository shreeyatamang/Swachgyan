

const images = ['../../assests/photo1.png', '../../assests/photo2.png', '../../assests/kids.png', 'img4.jpg']; // Add more images if needed
let currentIndex = 0;

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function updateImages() {
    image1.src = images[currentIndex];
    image2.src = images[currentIndex + 1];
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 2;
        updateImages();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 2) {
        currentIndex += 2;
        updateImages();
    }
});

// Initially load the images
updateImages();
