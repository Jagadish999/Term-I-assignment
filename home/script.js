function selectbefore(){
	var beforeham1 = document.getElementById('ham-1');
	beforeham1.setAttribute("style", "display:none;");

	var beforenav = document.getElementById('main-nav');
	beforenav.setAttribute("style", "display:block;");

	var beforeham2 = document.getElementById('ham-2');
	beforeham2.setAttribute("style", "display:block;");
}
function selectafter(){
	var afterham2 = document.getElementById('ham-2');
	afterham2.setAttribute("style", "display:none;");

	var afterham = document.getElementById('ham-1');
	afterham.setAttribute("style", "display:block;");

	var afternav = document.getElementById('main-nav');
	afternav.setAttribute("style", "display:none;");
}
function show(){
	var clickonham = document.getElementById('ham-1');
	clickonham.addEventListener('click', selectbefore);

	var clickonham2 = document.getElementById('ham-2');
	clickonham2.addEventListener('click', selectafter);
}



document.addEventListener('DOMContentLoaded', show);