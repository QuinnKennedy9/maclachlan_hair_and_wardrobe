(function() {
	"use strict";

	var pics = document.querySelectorAll('.hairImage');
	var hair = ['hair1.jpg','hair2.jpg','hair3.jpg','hair4.jpg','hair5.jpg','hair6.jpg','hair7.jpg','hair8.jpg','hair9.jpg','hair10.jpg'];

	function randomizer(){
		for(var i = 0; i < pics.length; i ++){
			var rand = hair[Math.floor(Math.random() * hair.length)];
			pics[i].src = "img/"+rand;
			if(i>0){
			if (pics[i].src == pics[i-1].src){
				var rand = hair[Math.floor(Math.random() * hair.length)];
				pics[i].src = "img/"+rand;
				console.log('fire');
			}
		}
		}

	}

	window.addEventListener('load',randomizer,false);


})();
