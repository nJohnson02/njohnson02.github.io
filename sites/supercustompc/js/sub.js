const navbar = document.querySelector('#navbar');
const title = document.querySelector('#logo');
const sticky = navbar.offsetTop;

const snapToTop = () => {
    const yOffset = window.pageYOffset;
    (yOffset >= sticky - 45) ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

const hideTitle = () => {
    const winWidth = window.innerWidth;
    const isWide = (winWidth > 700);
    title.classList.remove((isWide) ? 'hidden' : 'visible');
    title.classList.add((isWide) ? 'visible' : 'hidden');
}

const pda = document.querySelector('#pda');
const pdimg = document.querySelector('#pdimg');
const pdp = document.querySelector('#pdp');
const main = document.querySelector('#main');

const moveGrid = () => {
    const winWidth = window.innerWidth;
    const isNotWide = (winWidth < 1000);
    const mobile = 'mobile';
    if (isNotWide) {
        pda.classList.add(mobile);
        pdimg.classList.add(mobile);
		pdp.classList.add(mobile);
		main.classList.add(mobile);
	} else {
		pda.classList.remove(mobile);
		pdimg.classList.remove(mobile);
		pdp.classList.remove(mobile);
		main.classList.remove(mobile);
	}
}

hideTitle();
moveGrid();

window.onscroll = () => snapToTop();

window.addEventListener('resize', () => {
    hideTitle();
    moveGrid();
}, true);
