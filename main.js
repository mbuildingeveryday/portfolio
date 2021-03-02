'use strict'


// Make navbar transparent when it is on the top
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

    scrollIntoView(link);
})


// Handle click on "contact me" button on home
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (event)=>{
    scrollIntoView('#contact');
});


// Handle transparent home section
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
console.log("home height: " + homeHeight);
document.addEventListener('scroll', () => {
    let ratio = (homeHeight - window.scrollY) / homeHeight;
    home.style.opacity = ratio;
});


// Show 'arrow up' button when scrolling down
const arrowupBtn = document.querySelector('.arrowup__btn');
document.addEventListener('scroll', ()=>{
    arrowupBtn.style.opacity = window.scrollY / homeHeight;
})

arrowupBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});


// Filter projects by its category
let categoriesContainer = document.querySelector('.work__categories');
let projectsContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
categoriesContainer.addEventListener('click', (event) => {
    const target = event.target;
    const filter = target.dataset.filter || target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    // Remove selection from the previous item and select new one
    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('active');


    projectsContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === "*" || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectsContainer.classList.remove('anim-out');
    }, 300);
});




// Utility
function scrollIntoView(selector){
    const target = document.querySelector(selector);
    target.scrollIntoView({behavior: 'smooth'});
}


