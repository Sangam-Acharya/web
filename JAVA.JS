const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > -2) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


document.addEventListener("contextmenu", function (e) {
	e.preventDefault();
  });
  
  document.onkeydown = function (e) {
	if (event.keyCode == 123) {
	  return false;
	}
  
	if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
	  return false;
	}
  
	if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
	  return false;
	}
  
	if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
	  return false;
	}
  };
