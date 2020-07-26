window.onload = function(){ 
	setTimeout( function(){ 
		loader_toggle('hide'); 
		show_intro();
	}, 1000); 

};

function loader_toggle(e) {
	if(e == "hide") {
		document.getElementsByClassName('loader')[0].classList.add("loader-hide");	
	} else {
		document.getElementsByClassName('loader')[0].classList.add("loader-show");	
	}
}

function show_intro(){
	document.querySelector("body > div.container-intro").style.display = 'block';
	setTimeout( function(){ 
		document.querySelector("body > div.container-intro > h1").classList.add('show-animate');
	}, 750); 

	setTimeout( function(){ 
		document.querySelector("body > div.container-intro > h3").classList.add('show-animate');
	}, 1250); 

	setTimeout( function(){ 
		document.querySelector("body > div.container-intro > div").classList.add('show-animate');
		
	}, 1500); 

}




function relaxStart() {
	document.querySelector("body > div.container-intro > div").classList.remove('show-animate');
	document.querySelector("body > div.container-intro > h3").classList.remove('show-animate');
	document.querySelector("body > div.container-intro").classList.remove('show-animate');
	document.querySelector("body > div.container-intro").classList.add('place-logo');
	document.querySelector("body > div.container-intro.place-logo > h3").remove();
	document.querySelector("body > div.container > video").style.display = 'block';
		document.querySelector("body > div.container-intro.place-logo > div").remove();
	setTimeout( function(){ 
		document.querySelector("body > div.share").classList.add('show-animate');

		document.querySelector("body > div.container > video").style.opacity = 1;
	}, 2000); 

	
}