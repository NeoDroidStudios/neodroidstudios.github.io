const carousel = document.querySelector('.carousel');
const indicators = [...document.querySelectorAll('.carousel__indicator')];

let scrollPosition = 0;
let activeIndicator = 0;

carousel.addEventListener('scroll', () => {
    scrollPosition = carousel.scrollLeft;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('carousel__indicator--active', index === activeIndicator);
    });
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        activeIndicator = index;
        carousel.scrollTo({
            left: activeIndicator * carousel.offsetWidth,
            behavior: 'smooth'
        });
    });
});