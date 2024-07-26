// Change header bg color
window.addEventListener('scroll', function () {
  const headerEl = document.querySelector('[data-header]');
  const scrollUpBtn = document.querySelector('.scrollUp-btn');
  headerEl.classList[window.scrollY > 150 ? 'add' : 'remove']('active');
  scrollUpBtn.classList[window.scrollY > 600 ? 'add' : 'remove']('active');
})

// Swiper js

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// Nav open close

const navbarTogglers = document.querySelectorAll('[data-nav-toggler]');
const navItems = document.querySelector('.menu-content');
const overlay = document.querySelector('[data-overlay]'); 

navbarTogglers.forEach(navToggler => {
    navToggler.addEventListener('click', () => {
        overlay.classList.toggle('active');
        navItems.classList.toggle('active')
    })
})

// Nav link indicator
const sectionEl = document.querySelectorAll('section[id]');
sectionEl.forEach(section => {
  const sectionHeight = section.offsetHeight,
  sectionTop = section.offsetTop - 150;

  let navID =  document.querySelector(`.menu-content a[href = '#${section.id}']`);

  if(navID !== null){
    if(scrollY > sectionTop && scrollY <= sectionHeight + sectionTop){
      navID.classList.add('active');
    }
    else{
      navID.classList.remove('active');
    }
  }
})



  
// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1000,
  delay: 400
})

sr.reveal(`.section-text i, .section-text h1, .section-text p, .section-text, 
           .brand-logos, .home-details, .home-details p, .home-details h1,
           .home-details button, .testimonial, .newsletter .section-details` ,{interval:100})

sr.reveal(`.about .image-holder, .menu .menu-items`,{origin: 'left'})
sr.reveal(`.about .text-wrapper, .menu .schedule`,{origin: 'right'})
