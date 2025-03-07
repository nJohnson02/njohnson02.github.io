const navbar = document.querySelector('#navbar');
const sticky = navbar.offsetTop;
const title = document.querySelector('#logo');

const snapToTop = () => {
    const yOffset = window.pageYOffset;
    (yOffset >= sticky) ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

const hideTitle = () => {
    const winWidth = window.innerWidth;
    const isWide = (winWidth > 700);
    title.classList.remove((isWide) ? 'hidden' : 'visible');
    title.classList.add((isWide) ? 'visible' : 'hidden');
}

hideTitle();

window.onscroll = () => snapToTop();

window.addEventListener('resize', () => hideTitle(), true);
