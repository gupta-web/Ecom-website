import "./style.css"
import products from "../public/products.json"
import { showProductsContainer } from "../homeCards"

//call the function to display all the product as card
showProductsContainer(products)







































//This code is for Hamburger
document.getElementById('hamburger').addEventListener('click', function (event) {
    event.stopPropagation(); 
    const menu = document.getElementById('navbar-menu');
    menu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('navbar-menu').classList.remove('active');
    });
});

document.addEventListener('click', function (event) {
    const menu = document.getElementById('navbar-menu');
    const hamburger = document.getElementById('hamburger');

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});

//this code is for slide show
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.animation = 'none';
    progressBar.offsetHeight; // Trigger reflow
    progressBar.style.animation = 'progress 3s linear infinite';
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

window.changeSlide = function(direction) {
    currentSlideIndex = (currentSlideIndex + direction + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
    resetAutoSlide();
};
function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

showSlide(currentSlideIndex);
startAutoSlide();

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    startAutoSlide();
});
