document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".page-nav").addEventListener("click", function(e) {
    let target = e.target;
    if (!target.matches("a")) return;
    [...document.querySelectorAll(".page-nav a")].forEach(function(link) {
      link.style.borderColor = "#0070AF";
    });
    target.style.borderColor = "white";
  });

  function Slider() {
    let curentSlider = 0;
    let getImages = document.querySelectorAll(".slider__image-container");

    this.nextSlider = function() {
      if (curentSlider === [...getImages].length - 1) {
        curentSlider = 0;
      } else {
        curentSlider++;
      }
      [...getImages].forEach(function(image) {
        image.classList.remove("showing");
      });
      [...getImages][curentSlider].classList.add("showing");
    };

    this.prevSlider = function() {
      if (curentSlider === 0) {
        curentSlider = [...getImages].length - 1;
      } else {
        curentSlider--;
      }
      [...getImages].forEach(function(image) {
        image.classList.remove("showing");
      });
      [...getImages][curentSlider].classList.add("showing");
    };
  }

  const pageSlider = new Slider();
  let slideInterval = setInterval(pageSlider.nextSlider, 5000);

  document
    .querySelector(".slider-wrapper")
    .addEventListener("mouseover", function() {
      clearInterval(slideInterval);
    });
  document
    .querySelector(".slider-wrapper")
    .addEventListener("mouseout", function() {
      slideInterval = setInterval(pageSlider.nextSlider, 5000);
    });
  document
    .querySelector(".prev")
    .addEventListener("click", pageSlider.prevSlider);
  document
    .querySelector(".next")
    .addEventListener("click", pageSlider.nextSlider);

  document
    .querySelector(".icon-container")
    .addEventListener("click", function() {
      document.querySelector(".page-nav").classList.toggle("visible");
    });
});
