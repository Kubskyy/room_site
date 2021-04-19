const first_title = "Discover innovative ways to decorate";
const second_title = "We are available all across the globe";
const third_title = "Manufactured with the best materials";

const first_text = `We provide unmatched quality, comfort, and style for property owners
across the country. Our experts combine form and function in bringing
your vision to life. Create a room in your own style with our collection
and make your property a reflection of you and what you love.`;

const second_text = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
store locator. Any questions? Don't hesitate to contact us today.`;

const third_text = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
to ensure that every product is made as perfect and as consistent as possible. With three decades of 
experience in this industry, we understand what customers want for their home and office.`;

const texts = [
    [first_title, first_text],
    [second_title, second_text],
    [third_title, third_text],
  ];

const backgroundClasses = ["bg_1", "bg_2", "bg_3"];
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll('.has-fade');
const heroImage = document.querySelector(".hero_image");
const sliderLeft = document.querySelector(".sliders__button__left");
const sliderRight = document.querySelector('.sliders__button__right');
const darkOverlay = document.querySelector('.dark-overlay');
const body=document.querySelector('#body');

const dynamicTitle = document.querySelector(".dynamic-title");
const dynamicText = document.querySelector(".dynamic-text");

btnHamburger.addEventListener('click',()=>{
    if(header.classList.contains('open')){
        header.classList.remove('open');
        darkOverlay.classList.remove('has-fade');
        body.classList.remove('scroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else{
        header.classList.add('open');
        darkOverlay.classList.add('has-fade');
        body.classList.add('scroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});


const switchBackground = (direction) => {
    let currentIndex = 0;
    let index = 0;
  
    backgroundClasses.forEach((element) => {
      if (heroImage.classList.toString().includes(element)) {
        currentIndex = backgroundClasses.indexOf(element);
      }
    });
  
    if (direction === "left") {
      if (currentIndex === 0) {
        index = backgroundClasses.length - 1;
      } else {
        index = currentIndex - 1;
      }
    } else {
      index = (currentIndex + 1) % 3;
    }
    dynamicTitle.innerHTML = texts[index][0];
    dynamicText.innerHTML = texts[index][1];
  
    heroImage.classList.remove(backgroundClasses[currentIndex]);
    heroImage.classList.add(backgroundClasses[index]);
  };




sliderLeft.addEventListener("click", () => {
    switchBackground("left");
  });
  
  sliderRight.addEventListener("click", () => {
    switchBackground("right");
  });


