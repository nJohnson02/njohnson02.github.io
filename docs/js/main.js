// Main Javascript

//Navbar
const title = document.querySelector('#logo');
const navbar = document.querySelector('#navbar');
var sticky = window.innerHeight - 45;

const snapToTop = () => {
	(window.pageYOffset >= sticky - 45) ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

const height = () => {
	sticky = window.innerHeight - 45;
	document.querySelector('#banner').style.height = `${sticky}px`;
}

const hideTitle = () => {
	const winWidth = window.innerWidth;
	const isWide = winWidth > 855;
	title.classList.remove((isWide) ? 'hide': 'show');
	title.classList.add((isWide) ? 'show' : 'hide');
}

const respond = () => {
	height();
	hideTitle();
}

window.onscroll = () => snapToTop();
window.addEventListener('resize', () => respond(), true);

respond();
