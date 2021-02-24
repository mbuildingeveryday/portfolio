'use strict'


//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
let height = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(height);
    if(window.scrollY > height){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})