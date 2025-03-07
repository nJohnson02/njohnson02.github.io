const title = document.querySelector('#logo');
const logo = document.querySelector('#bannerlogo');
const navbar = document.querySelector('#navbar');

const snapToTop = () => {
    const yOffset = window.pageYOffset;
    (yOffset >= sticky - 45) ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

const hideTitle = () => {
    const winWidth = window.innerWidth;
    const isWide = (winWidth > 800);
    title.classList.remove((isWide) ? 'hidden' : 'visible');
    title.classList.add((isWide) ? 'visible' : 'hidden');
}

const spacing = () => {
    const winWidth = window.innerWidth;
    const bannerText = document.querySelector('#bannerText');
    bannerText.style.letterSpacing = (winWidth > 1000) ? 50 - (window.scrollY / 2) : 10;
}

hideTitle();
spacing();

window.onscroll = () => {
    snapToTop();
    spacing();
}

window.addEventListener('resize', () => {
    hideTitle();
    spacing();
}, true);
