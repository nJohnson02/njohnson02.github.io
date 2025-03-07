// Main Javascript

//Navbar
let sticky = window.innerHeight - 45;
const title = document.getElementById("logo");
const navbar = document.getElementById("navbar");
const logo = document.getElementById("bannerlogo")

const snapToTop = () => {
	const isSticky = (window.pageYOffset >= sticky - 22.5);
	document.querySelector('.sudo-navbar').style.display = isSticky ? 'block' : 'none';

	return (isSticky) 
		? navbar.classList.add('sticky') 
		: navbar.classList.remove('sticky');
}

const height = () => {
	sticky = window.innerHeight - 22.5;
	document.querySelector('#banner').style.height = `${sticky}px`;
}

const hideTitle = () => {
	const winIsWide = (window.innerWidth > 1000);

	if (winIsWide) {
		title.classList.remove('hide');
		title.classList.add('show');
	} else {
		title.classList.remove('show');
		title.classList.remove('hide');
	}
}

const logoSize = () => {
	const winWidth = window.innerWidth;
	const winIsWide = (winWidth > 740);

	logo.style.width = winIsWide ? '640px' : `${winWidth - 100}px`;
}

const hideLogo = () => {
	const winHeight = window.innerHeight;
	const winIsShort = (winHeight < 250);

	if (winIsShort) {
		logo.classList.remove('hide');
		logo.classList.add('show');
	} else {
		logo.classList.remove('show');
		logo.classList.remove('hide');
	}
}

const respond = () => {
	height();
	hideTitle();
	logoSize();
	hideLogo();
}

window.onscroll = () => snapToTop();
window.addEventListener('resize', respond(), true);

respond();
