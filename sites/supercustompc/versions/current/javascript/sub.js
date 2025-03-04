var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function snapToTop() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	};
};
var title= document.getElementById("logo");
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
window.onscroll = function() {
	snapToTop();
};
window.addEventListener('resize', function(){
	hideTitle();
}, true);