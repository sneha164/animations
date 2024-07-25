const slides = document.getElementsByClassName("slider");
const navlinks = document.getElementsByClassName("slider_navlink");
const backgroundBlue = document.querySelector('.background-blue');
const backgroundRed = document.querySelector('.background-red');

let currentSlide = 0;

document.getElementById("nav-button-next").addEventListener("click", () => {
    changeSlide(currentSlide + 1, 'next');
});

document.getElementById("nav-button-prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1, 'prev');
});

const SLIDE_BG_STYLE = {
    BLUE: "linear-gradient(269.2deg, #14ABF6 18.25%, #B013E7 97.02%)",
    RED: "linear-gradient(89.45deg, #E70F3E -1.08%, #940185 99.56%)"
};

const SLIDE_BG_PAGE = ["BLUE", "RED"];

function changeSlide(moveTo, direction) {
    if (moveTo >= slides.length) { moveTo = 0; }
    if (moveTo < 0) { moveTo = slides.length - 1; }

    slides[currentSlide].classList.remove("active");
    navlinks[currentSlide].classList.remove("active");

    if (SLIDE_BG_PAGE[moveTo] === "BLUE") {
        backgroundBlue.style.transform = "translateX(0%)";
        backgroundRed.style.transform = "translateX(-100%)";
    } else {
        backgroundRed.style.transform = "translateX(0%)";
        backgroundBlue.style.transform = "translateX(100%)";
    }

    setTimeout(() => {
        backgroundBlue.style.transition = 'transform 1.8s cubic-bezier(1, 0.1, 1, 0.3)';
        backgroundRed.style.transition = 'transform 1.8s cubic-bezier(1, 0.1, 1, 0.3)';

        if (SLIDE_BG_PAGE[moveTo] === "BLUE") {
            backgroundBlue.style.transform = "translateX(0%)";
            backgroundRed.style.transform = "translateX(-100%)";
        } else {
            backgroundRed.style.transform = "translateX(0%)";
            backgroundBlue.style.transform = "translateX(100%)";
        }
    }, 1000);
    const currentContainer = slides[currentSlide].querySelector('.container');
    const nextContainer = slides[moveTo].querySelector('.container');

    if (direction === 'next') {
        nextContainer.style.transform = 'translateX(100%)';
        setTimeout(() => {
            nextContainer.style.transition = 'transform 1.4s cubic-bezier(1, 0, 1, 0.2)';
            nextContainer.style.transform = 'translateX(0%)';
        }, 340);
    } else {
        nextContainer.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            nextContainer.style.transition = 'transform 1.4s cubic-bezier(1, 0, 1, 0.2)';
            nextContainer.style.transform = 'translateX(0%)';
        },340);
    }

    setTimeout(() => {
        slides[currentSlide].classList.remove("active");
        currentContainer.style.transition = '';
        currentContainer.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
        slides[moveTo].classList.add("active");
        navlinks[currentSlide].classList.remove("active");
        navlinks[moveTo].classList.add("active");
        nextContainer.style.transition = '';
        currentSlide = moveTo;
    }, 340);
}

document.querySelectorAll('.slider_navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            const direction = bulletIndex > currentSlide ? 'next' : 'prev';
            changeSlide(bulletIndex, direction);
        }
    });
});






function slide() {
  const title1 = document.getElementById('title1');
  const title2 = document.getElementById('title2');
  const transition = document.getElementById('transition-part');
  const grass = document.getElementById('grass');
  const mountains = document.getElementById('mountains');
  const forest1 = document.getElementById('forest1');
  const forest2 = document.getElementById('forest2');
  const text2Bottom = document.querySelector('.text2 .bottom');
  const button = document.querySelector(".btn");

  title1.style.opacity = '0';
  title1.style.visibility = 'hidden';

  title2.style.opacity = '1';
  title2.style.visibility = 'visible';

  transition.style.opacity = '1';
  transition.style.visibility = 'visible';
  transition.style.transform = 'translateY(-83%)';
  grass.style.transform = 'translateY(0%)';

  mountains.classList.add('scaled-down');
  forest1.classList.add('scaled-down');
  forest2.classList.add('scaled-down');

  button.style.transition = 'margin-left 1s ease, opacity 1s ease 0.5s';
  button.style.marginLeft = '143px';

  setTimeout(() => {
      button.style.opacity = '0';

      setTimeout(() => {
          button.style.visibility = 'hidden';
      }, 1500);
  });

  setTimeout(() => {
      transition.style.opacity = '1';
      transition.style.visibility = 'visible';
  }, 1000);
  text2Bottom.classList.toggle('expanded');
}

const startButton = document.querySelector(".btn");
startButton.addEventListener("click", slide);



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






