const slides = document.querySelectorAll('.testemonial__slide');
const dotsContainer = document.querySelector('.testemonial__dots-container');
let currentSlide = 0;

//Active dot
const activeDot = function (currentDot) {
  const dots = document.querySelectorAll('.testemonial__dots');
  dots.forEach((el) => {
    el.classList.remove('active');
  });
  const activeDot = document.querySelector(
    `.testemonial__dots[data-slide="${currentDot}"]`
  );
  activeDot.classList.add('active');
};

//Create slides
const slider = function (currentSlide) {
  slides.forEach(function (slide, index) {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
  activeDot(currentSlide);
};

slides.forEach(function (_, index) {
  dotsContainer.insertAdjacentHTML(
    'beforeend',
    `<span class="testemonial__dots" data-slide="${index}"></span>`
  );
});

slider(currentSlide);

//Handle dot click
const dotClick = function (e) {
  if (!e.target.classList.contains('testemonial__dots')) return;
  const { slide } = e.target.dataset;
  slider(slide);
};

dotsContainer.addEventListener('click', dotClick.bind());
