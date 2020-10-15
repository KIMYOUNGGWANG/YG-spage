'use strict';

// navbar 스크롤내리면 색변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll', () => {
    
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
    navbarMenu.classList.remove('open');
    scroll(link);
});

// navbar togglebtn
const navbarToggleBtn = document.querySelector('.navber__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
});


// contact me 클릭하면 contact section으로 이동

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scroll('#contact')
})

function scroll(selector) {
    const scroll = document.querySelector(selector);
    scroll.scrollIntoView({behavior : "smooth", block: "end"});
}

//스크롤 내리면 투명해지는

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1-window.scrollY / homeHeight; 
});
