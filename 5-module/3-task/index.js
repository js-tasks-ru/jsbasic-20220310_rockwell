function initCarousel() {
  let elem = document.querySelector('[data-carousel-holder]');
  let slideNumber = 0;
  let slideAmount = 4;
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');

  function right() {
    slideNumber++;
    update();
  }

  function left() {
    slideNumber--;
    update();
  }

  function update() {
    let offset = carouselInner.offsetWidth * slideNumber;
    carouselInner.style.transform = `translateX(-${offset}px)`;

    if (slideNumber == slideAmount - 1){
      carouselArrowRight.style.display = 'none';
    } else{
      carouselArrowRight.style.display ='';
    }

    if (slideNumber == 0){
      carouselArrowLeft.style.display = 'none';
    } else{
      carouselArrowLeft.style.display = '';
    }
  }

  update();

  elem.onclick = ({target}) =>{
    if (target.closest('.carousel__arrow_right')){
      right();
    }
    if (target.closest('.carousel__arrow_left')){
      left();
    }
  }
}
