const carouselSlide = document.querySelector('.carousel_slide')
const carouselImages = document.querySelectorAll('.carousel_slide > div')

//buttons
const prevButton = document.querySelector('#prev_button')
const nextButton = document.querySelector('#next_button')

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

//Button listeners
nextButton.addEventListener('click', () => {
    moveFoward();
})

setInterval(moveFoward, 10000);

prevButton.addEventListener('click', () => {
    if(counter<=0) return
    carouselSlide.style.transition = "transform 0.9s ease-in-out";
    counter--
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    
})

function moveFoward(){
    if(counter>= carouselImages.length -1) return
    carouselSlide.style.transition = "transform 0.9s ease-in-out";
    counter++
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
}




carouselSlide.addEventListener('transitionend', () => {

    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    
})

