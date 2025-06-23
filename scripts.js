// Seleciona os elementos
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.list .item');
const dots = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.indicators .number');
const list = document.querySelector('.list');

let active = 0;
const lastPosition = items.length - 1;

// Função para atualizar o slider
function setSlider() {
    // Remove todas as classes active
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Adiciona active no item atual
    items[active].classList.add('active');
    dots[active].classList.add('active');
    number.textContent = `0${active + 1}`;
}

// Eventos de clique
nextButton.addEventListener('click', () => {
    list.style.setProperty('--calculation', 1);
    active = active === lastPosition ? 0 : active + 1;
    setSlider();
});

prevButton.addEventListener('click', () => {
    list.style.setProperty('--calculation', -1);
    active = active === 0 ? lastPosition : active - 1;
    setSlider();
});

// Touch events para mobile
let touchStartX = 0;
let touchEndX = 0;

list.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

list.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, {passive: true});

function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - próximo
        nextButton.click();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - anterior
        prevButton.click();
    }
}

// Inicializa o slider
setSlider();