let navbar = document .querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
	searchform.classList.remove('active');
		cartItem.classList.remove('active');
}


let searchform = document .querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
	navbar.classList.remove('active');
	searchform.classList.toggle('active');
		cartItem.classList.remove('active');
}


let cartItem = document .querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
	navbar.classList.remove('active');
	searchform.classList.remove('active');
		cartItem.classList.toggle('active');
}

window.onscroll = () =>{
	    navbar.classList.remove('active');
	    searchform.classList.remove('active');
		cartItem.classList.remove('active');
}

