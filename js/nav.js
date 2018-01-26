(function() {
	"use strict";

	var opener = document.querySelector("#opener");
	var closer = document.querySelector('#closer');
	var nav = document.querySelector('#mobileNav');


	function open(){
		nav.style.display = "block";
		opener.style.display = 'none';
	}

	function close(){
		nav.style.display = 'none';
		opener.style.display = 'block';
	}

	opener.addEventListener('click', open, false);
	closer.addEventListener('click', close, false);









})();
