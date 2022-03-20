const TIME_BETWEEN_SLIDES = 5000; // ms
const TIME_FOR_FADE = 500;

const slidesElement = document.getElementById("slideshow");
const currentSlide = document.getElementById("current");
const fadingSlide = document.getElementById("fading");

// map img path => alt text
const slideImages = {
  "crc_pictures/webuildrobots.jpg": "the team building robots",
  "crc_pictures/webuildrobots2.jpg": "the team building robots again",
  "crc_pictures/mostbuiltrobot.jpg": "a team member intimidating a robot",
};

// current index in slideImages' keys
let currentSlideIdx = 0;

const imgKeys = Object.keys(slideImages);

const nextSlide = () => {
  fadingSlide.setAttribute("src", imgKeys[currentSlideIdx]);
  currentSlideIdx = (currentSlideIdx >= imgKeys.length - 1) ? 0 : currentSlideIdx + 1;
  console.log(currentSlideIdx)
  currentSlide.setAttribute("src", imgKeys[currentSlideIdx]);
  currentSlide.setAttribute("alt", slideImages[imgKeys[currentSlide]]);
  fadingSlide.className = "fading";
  setTimeout(() => fadingSlide.className = "", TIME_FOR_FADE); // reset anim
  // set timeout for next slide
  setTimeout(() => nextSlide(), TIME_BETWEEN_SLIDES);
}

const beginSlides = () => {
  currentSlide.setAttribute("src", imgKeys[0]);
  setTimeout(() => {
    nextSlide();
  }, TIME_BETWEEN_SLIDES)
}

beginSlides()