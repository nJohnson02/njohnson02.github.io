// Super Custom PC

//Navbar
var title = document.getElementById("logo");
var logo = document.getElementById("bannerlogo");
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function snapToTop() {
	if (window.pageYOffset >= sticky-45) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	};
};
function height() {
	var windowHeight = window.innerHeight;
	document.getElementById("banner").style.height = windowHeight-45;
	};
function hideTitle () {
	var windowWidth = window.innerWidth;
	if (windowWidth > 700) {
	   	title.classList.remove("hidden");
		title.classList.add("visible");
	} else {
		title.classList.remove("visible");
		title.classList.add("hidden");
	};
};
function logoSize () {
	var windowWidth = window.innerWidth;
	if (windowWidth > 740) {
	   	logo.style.width = 640;
	} else {
		logo.style.width = windowWidth-100;
	};
};
function hideLogo () {
	var windowHeight = window.innerHeight;
	if (windowHeight < 250) {
		logo.classList.remove("visible");
		logo.classList.add("hidden");
	} else {
		logo.classList.remove("hidden");
		logo.classList.add("visible");	
	};
};

height();
hideTitle();
logoSize();
hideLogo();

window.onscroll = function() {
	snapToTop();
};

window.addEventListener('resize', function(){
	height();
	hideTitle();
	logoSize();
	hideLogo();
}, true);


//Links
document.getElementById("td1").onclick = function() {
	document.getElementById('tda1').click();
};
document.getElementById("td2").onclick = function() {
	document.getElementById('tda2').click();
};
document.getElementById("td3").onclick = function() {
	document.getElementById('tda3').click();
};
document.getElementById("td4").onclick = function() {
	document.getElementById('tda4').click();
};
document.getElementById("td5").onclick = function() {
	document.getElementById('tda5').click();
};