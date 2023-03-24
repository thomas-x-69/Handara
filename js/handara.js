let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
  slideIndex++;
  showSlides();
  timer = _timer; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timer = _timer;
}

// Thumbnail image controlls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timer = _timer;
}
function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dots");

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // show one slide base on index number
  slides[slideIndex].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[slideIndex].classList.add("active");
}

// autoplay slides --------
let timer = 7; // sec
const _timer = timer;

// this function runs every 1 second
setInterval(() => {
  timer--;

  if (timer < 1) {
    nextSlide();
    timer = _timer; // reset timer
  }
}, 1000); // 1sec

let btnsubs = document.querySelector(".newsletter button");
console.log(btnsubs.innerHTML);
function onClickBtn() {
  btnsubs.style =
    " width: -webkit-fill-available;   margin-right: 0;   background-color: rgb(76, 175, 80);   ";
  btnsubs.textContent = "تم الاشتراك بنجاح";
}

let lovicon = document.querySelectorAll("fa-heart");
function onLove() {}
//  function (thats){
//   if()
// }

// ------------------------start scroll to top------------------------------
let up = document.querySelector(".up");
let help = document.querySelector(".help");
window.onscroll = function () {
  this.scrollY >= 200 ? up.classList.add("show") : up.classList.remove("show");
  this.scrollY >= 200
    ? help.classList.add("show-2")
    : help.classList.remove("show-2");
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// ------------------------End scroll to top------------------------------
