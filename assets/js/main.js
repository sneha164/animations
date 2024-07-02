
const slides = document.getElementsByClassName("sliders");
const navlinks = document.getElementsByClassName("slider_navlink");

let currentSlide = 0;
  
document.getElementById("nav-button-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1)
});
document.getElementById("nav-button-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1)
});

const SLIDE_BG_STYLE = {
  BLUE: "linear-gradient(269.2deg, #14ABF6 18.25%, #B013E7 97.02%)",
  RED: "linear-gradient(89.45deg, #E70F3E -1.08%, #940185 99.56%)"
};
const SLIDE_BG_PAGE = ["BLUE", "RED"];
shoeSection.style.background = SLIDE_BG_STYLE[SLIDE_BG_PAGE[moveTo]];

function changeSlide(moveTo) {
  if (moveTo >= slides.length) { moveTo = 0; }
  if (moveTo < 0) { moveTo = slides.length - 1; }

  slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("active");

  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("active");
  shoeSection.style.background = SLIDE_BG_STYLE[SLIDE_BG_PAGE[moveTo]];
  currentSlide = moveTo;
}

document.querySelectorAll('.slider_navlink').forEach((bullet, bulletIndex) => {
  bullet.addEventListener('click', () => {
    if (currentSlide !== bulletIndex) {
      changeSlide(bulletIndex);
    }
  })
});


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






