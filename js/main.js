(function() {
	"use strict";

	var review = document.getElementById('review');
	var reviewer = document.getElementById('reviewer');
	var opener = document.querySelector("#opener");
	var closer = document.querySelector('#closer');
	var nav = document.querySelector('#mobileNav');

	var reviews = ["Chris has been my stylist for over 10 years, originally at a high end Oakville salon, and for the last few years at her home salon. There are many reasons I've stayed with her: I can always count on a great cut and colour, and she listens to what I want while at the same time introducing me to ideas I might not have considered. She is very up to date with current trends, and can just as easily recommend styles for me as for my twenty-something daughters who also trust Chris for both regular cuts and special event styles. Behind the chair she is both a good listener and a well-dressed representation of the fashion styles she can also expertly assist with!","Over the (ten? Or more??) years that I have been a client, Chris has always been extraordinary.  She has an eye and hand for detail with the ability to make every cut unique.","Chris is very talented. She listens to what I want and is able to translate that into something that works for my features and style. I trust Chris completely!  I have NEVER been disappointed with my cut or colour and receive compliments from friends and strangers all the time.","I would highly recommend Chris for anyone who wants to have great hair. In addition to being a master craftsperson in cutting, colour and highlights, Chris is extremely knowledgeable on the latest trends, styles, products and techniques. She always takes extra care to understand exactly what I want. Because of this, I always leave Chris’s chair feeling and looking fabulous.","I knew I needed help with my wardrobe …I just didn’t know what I needed!  During the consultation with Chris, I found myself thinking I would never have put those pieces together! Or I didn’t think of that combination!  I felt very much at ease as we weeded out items from my closet and as I tried on new outfits by mixing and matching existing pieces.   It is amazing what color, texture and accessories can do! After this experience, I now have a lot more confidence, ideas and knowledge about what looks good on me.  Thank you Chris!","Chris has been my hair stylist for many years and I always leave my appointment feeling refreshed and current! I love that she takes the time to discuss new style options and is meticulous with her cutting and styling. My daughters have also enjoyed wonderful haircuts from Chris, as well as beautiful special occasion styles.","Thanks to Chris, I've had years--more than a decade--of gorgeous hair. She's full of ideas, and she always highlights and cuts my hair to perfection.  Even more importantly, Chris is a joy to be around and I always leave feeling uplifted. My two daughters have been Chris's clients as well throughout their childhood and teenage years. Over the last year, Chris has helped my older daughter transform her style and wardrobe from teenage to young adult, and she feels--and looks--beautiful. I recommend Chris enthusiastically and wholeheartedly.","I have had the pleasure of experiencing Christine's wardrobe makeover magic! She has an ability to match your style with clothes that look fabulous for your figure. I rediscovered some great pieces in my wardrobe and she pointed me in the right direction for additional pieces. She is definitely my go-to person.","Chris has been my hairdresser for four years. I found her by asking my friend with a fabulous haircut who her stylist was and it was Chris! She is creative and versatile at her craft. She has helped me transition from short to long hair painlessly. She now cuts the hair of our whole family including two fussy teenagers. ‎We all look awesome thanks to her. I would recommend Chris without hesitation.","Chris has been my stylist for about 8 years. My first visit she analyzed my style, and my face, listened to what I can live with and not and voila! - she gave me a new look + a great cut. I get compliments regularly and people asking who does my hair. I happily pass on Chris's card. Not only is Chris talented - she is a great person and I always enjoy seeing her.","Chris is the epitome of an experience service.  She is more than a simple cut and colour.  She is a conversationalist, a therapist, and a friend; all complimenting her flawless hairstylist skills.  Her intelligence and genuine interest about each of her clients shines through every time I visit her.   I leave every visit feeling rejuvenated and uplifted both aesthetically and mentally.  I would recommend Chris to anyone who is looking for someone more than just a good hair cut, because she is something so much more wonderful than that."]
  var names = ["- Kathy, Oakville","- Jordene, Oakville","- Chelsea, Oakville", "- Mary Catherine, Oakville", "- Gwen, Mississauga", "- Martha, Oakvile", "- Susan, Mississauga", "- Katherine, Oakville", "- Joanne, Oakville", "- Nancy, Oakville", "- Lauren, Oakville"]
	var counter = 0;

	function swap(){
		if (counter > 0){
			counter = counter-1;
			review.innerHTML = reviews[counter];
			reviewer.innerHTML = names[counter];
			console.log(counter)
		}
	}
	function swap2(){
		if (counter < 10){
			counter = counter+1;
			review.innerHTML = reviews[counter];
			reviewer.innerHTML = names[counter];
			console.log(counter);
		}
	}

	function open(){
		nav.style.display = "block";
		opener.style.display = 'none';
	}

	function close(){
		nav.style.display = 'none';
		opener.style.display = 'block';
	}



	document.getElementById('larrow').addEventListener("click",swap,false);
	document.getElementById('rarrow').addEventListener("click",swap2,false);
	opener.addEventListener('click', open, false);
	closer.addEventListener('click', close, false);









})();
