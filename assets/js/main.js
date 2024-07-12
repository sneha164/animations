const slides = document.getElementsByClassName("slider");
const navlinks = document.getElementsByClassName("slider_navlink");
const shoeSection = document.getElementById("nike");

let currentSlide = 0;

document.getElementById("nav-button-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});
document.getElementById("nav-button-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

const SLIDE_BG_STYLE = {
  BLUE: "linear-gradient(269.2deg, #14ABF6 18.25%, #B013E7 97.02%)",
  RED: "linear-gradient(89.45deg, #E70F3E -1.08%, #940185 99.56%)"
};
const SLIDE_BG_PAGE = ["BLUE", "RED"];

function changeSlide(moveTo) {
  if (moveTo >= slides.length) { moveTo = 1; }
  if (moveTo < 0) { moveTo = slides.length - 1 ; }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");
  shoeSection.classList.add('transitioning');

  setTimeout(() => {
    shoeSection.style.background = SLIDE_BG_STYLE[SLIDE_BG_PAGE[moveTo]];
    shoeSection.classList.remove('transitioning');
  }, 500); 

  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");
  currentSlide = moveTo;
}

document.querySelectorAll('.slider_navlink').forEach((bullet, bulletIndex) => {
  bullet.addEventListener('click', () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  });
});


function slide() {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const transition = document.getElementById('transition-part');
  const grass = document.getElementById('grass');
  const mountains = document.getElementById('mountains');
  const forest1 = document.getElementById('forest1');
  const forest2 = document.getElementById('forest2');
  const button = document.querySelector(".btn");
  const text2Bottom = text2.querySelector('.bottom');  

  text1.style.opacity = '0';
  text1.style.visibility = 'hidden';

  transition.style.opacity = '1';
  transition.style.visibility = 'visible';
  text2.style.opacity = '1';
  text2.style.visibility = 'visible';
  transition.style.transform = 'translateY(-83%)';
  grass.style.transform = 'translateY(0%)';

  mountains.classList.add('scaled-down');
  forest1.classList.add('scaled-down');
  forest2.classList.add('scaled-down');
  text2Bottom.classList.add('animate');

  setTimeout(() => {
      transition.style.opacity = '1';
      transition.style.visibility = 'visible';
  }, 1000);

  button.style.transition = 'margin-left 1s ease ';
  button.style.marginLeft = '143px'; 
}

const button = document.querySelector(".btn");
button.addEventListener("click", slide);



// document.addEventListener('DOMContentLoaded', (event) => {
//   const sectionNike1 = document.getElementById('nike1');
//   const sectionNike2 = document.getElementById('nike2');
//   const nextButton = document.getElementById('nav-button-next');
//   const prevButton = document.getElementById('nav-button-prev');

//   nextButton.addEventListener('click', () => {
//       sectionNike1.style.display = 'none';
//       sectionNike2.style.display = 'block';
      
//   });

//   prevButton.addEventListener('click', () => {
//       sectionNike1.style.display = 'block';
//       sectionNike2.style.display = 'none';
//   });
//  });

// document.addEventListener('DOMContentLoaded', () => {
//   const nextButton = document.getElementById('nav-button-next');
//   const prevButton = document.getElementById('nav-button-prev');
//   const nike1 = document.getElementById('nike1');
//   const nike2 = document.getElementById('nike2');
//   const container = document.getElementById('container');

//   nextButton.addEventListener('click', () => {
//       nike1.classList.remove('active');
//       nike1.classList.add('inactive');
//       nike2.classList.remove('inactive');
//       nike2.classList.add('active');
//   });

//   prevButton.addEventListener('click', () => {
//       nike1.classList.remove('inactive');
//       nike1.classList.add('active');
//       nike2.classList.remove('active');
//       nike2.classList.add('inactive');
//   });
// });






