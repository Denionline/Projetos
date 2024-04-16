let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').addEventListener('click', () => {
    carItem.classList.remove('active');
    search.classList.remove('active');
    
    navbar.classList.toggle('active');
})

let search = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener('click', () => {
    carItem.classList.remove('active');
    navbar.classList.remove('active');

    search.classList.toggle('active');
})

let carItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').addEventListener('click', () => {
    navbar.classList.remove('active');
    search.classList.remove('active');

    carItem.classList.toggle('active');
})

window.onscroll = () => {
    navbar.classList.remove('active');
    carItem.classList.remove('active');
    search.classList.remove('active');
}