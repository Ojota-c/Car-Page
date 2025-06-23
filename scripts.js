let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    items[active].classList.add('active');
    dots[active].classList.add('active');
    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation',1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
}

/* JavaScript para mobile (mesmo código, mas com touch events) */
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let touchStartX = 0;
let touchEndX = 0;

// Touch events para swipe
container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left - next
        nextButton.click();
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe right - prev
        prevButton.click();
    }
}
