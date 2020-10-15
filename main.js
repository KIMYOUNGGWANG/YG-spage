'use strict';

// navbar 스크롤내리면 색변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(navbarHeight);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// navbar메뉴 클릭하면 section변경

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if (link==null) {
        return;
    }
    console.log(event.target.dataset.link);
    const scroll = document.querySelector(link);
    scroll.scrollIntoView({behavior : "smooth", block: "end"});
});