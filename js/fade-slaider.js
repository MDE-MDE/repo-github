const slides = document.querySelectorAll('.fade-slider__item');
let index = 0;
console.log(slides);

setInterval(function(){
    index++;
    console.log(index);
}, 1000);