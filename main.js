var gauche = document.querySelector('.projects .fleche.gauche');
var droite = document.querySelector('.projects .fleche.droite');
var slider = document.querySelector('.slider');
var projects = document.querySelectorAll('.project');

var index = 0;
droite.addEventListener('click', function() {
  console.log('droite');
  index -= 33.333;
  if (index >= -99.999 ) {
    slider.style.transform = 'translateX(' + index + '%)';
    var currentDevant = document.querySelector('.devant');
    currentDevant.classList.remove('devant');
    currentDevant.nextElementSibling.classList.add('devant');
  } else index = -99.999;
});

gauche.addEventListener('click', function() {
  console.log('gauche');
  index += 33.333;
  if (index <= 33.333) {
    slider.style.transform = 'translateX(' + index + '%)';
    var currentDevant = document.querySelector('.devant');
    currentDevant.classList.remove('devant');
    currentDevant.previousElementSibling.classList.add('devant');
  } else index = 33.333;
});
