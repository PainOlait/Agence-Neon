// SCROLL CLICK PAGE ACCEUIL //
$("#scroll").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#pageAgence").offset().top
    }, 2000);
});



//MENU NAVIGATION //
$(document).ready(function(){
	var contentSection = $('.content-section');
	var navigation = $('nav');

	//when a nav link is clicked, smooth scroll to the section
	navigation.on('click', 'a', function(event){
		event.preventDefault(); //prevents previous event
		smoothScroll($(this.hash));
	});

	//update navigation on scroll...
	$(window).on('scroll', function(){
		updateNavigation();
	})
	//...and when the page starts
	updateNavigation();

	/////FUNCTIONS
	function updateNavigation(){
		contentSection.each(function(){
			var sectionName = $(this).attr('id');
			if(sectionName=="wrapPageProjects"){
				var navigationMatchWhite = $('nav a[href="#' + sectionName + '"]');
			}else{
				var navigationMatch = $('nav a[href="#' + sectionName + '"]');
			}
			if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
				  ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
				{
					if(navigationMatchWhite){
						$(".menutitre").css('color','black');
						$(".number").css('color','black');
						navigationMatchWhite.addClass('active-section-white')
					}else{
						navigationMatch.addClass('active-section');
					}
				}
			else {
				if(navigationMatch){
					navigationMatch.removeClass('active-section');
				}else{
				$(".menutitre").css('color','white');
				$(".number").css('color','white');
				navigationMatchWhite.removeClass('active-section-white')
				}
			}
		});
	}
	function smoothScroll(target){
		$('body,html').animate({
			scrollTop: target.offset().top
		}, 800);
	}
});


//  AFFICHES //

var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

// POSTER

function showSlides(n) {
  var i;
  var project = $(".project");
  var slides = $(".affiches");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  slides[slideIndex-1].style.display = "block";




// NOM CLIENT
    var client = document.getElementsByClassName('titreProjects');
    for (i = 0; i < client.length; i++) {
    client[i].style.display = "none";
  }
  client[slideIndex-1].style.display = "block";

	var competence = document.getElementsByClassName('competence');
    for (i = 0; i < client.length; i++) {
    competence[i].style.display = "none";
  }
  competence[slideIndex-1].style.display = "block";

	var client = document.getElementsByClassName('clientNom');
    for (i = 0; i < client.length; i++) {
    client[i].style.display = "none";
  }
  client[slideIndex-1].style.display = "block";

	var date = document.getElementsByClassName('date');
    for (i = 0; i < client.length; i++) {
    date[i].style.display = "none";
  }
  date[slideIndex-1].style.display = "block";

	var description = document.getElementsByClassName('description_c');
    for (i = 0; i < client.length; i++) {
    description[i].style.display = "none";
  }
  description[slideIndex-1].style.display = "block";
}


$(window).scroll(function() {
	var $height = $(window).scrollTop();
	// console.log($height);
  if($height > 50) {
		$('#header').addClass('active');
	} else {
		$('#header').removeClass('active');
	}
});
