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


// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
})