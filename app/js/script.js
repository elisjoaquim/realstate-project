var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZWxpc2pvYXF1aW0iLCJhIjoiY2t1NW1jdGNnMXB1bTJvbzFsMzR0bHFkMyJ9.TQAfzfgyr1FikwdJ5X1QFQ',
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoiZWxpc2pvYXF1aW0iLCJhIjoiY2t1NW1jdGNnMXB1bTJvbzFsMzR0bHFkMyJ9.TQAfzfgyr1FikwdJ5X1QFQ',
  }
).addTo(map);

////////////////////////////////////////////////////
/////////////////TESTEMONIAL SLIDER ////////////////
////////////////////////////////////////////////////
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
