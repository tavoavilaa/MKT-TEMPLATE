// Import our custom CSS
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import '../scss/styles.scss'
import 'normalize.css';



// Get the button
let mybutton = document.getElementById("topBtn");
let nav = document.querySelector(".navbar");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    nav.classList.add('navDown');
    
  } else {
    mybutton.style.display = "none";
    nav.classList.remove('navDown');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


mybutton.addEventListener('click',()=> {
  topFunction()
})



// ANIMATIONS

// gsap.from('.avaya-hero__content__logo', {
//     opacity: 0,
//     duration: 2,
//     y: 50,
//     ease: 'back.out(1.7)',
//     delay: .6
// })

// gsap.from('.avaya-hero__content__hero', 
// {
//     opacity: 0, 
//     duration: 1.5,
//     delay: 1,
//     x: 50,
//     ease: 'Power1.easeOut'
// })





