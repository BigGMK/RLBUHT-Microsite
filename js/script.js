$('input#RLSearchInput').focus(
	function() {
		$(this).attr('placeholder', 'To Search, type and press enter');
	}
)
.blur(
	function() {
		$(this).attr('placeholder', 'Search');
	}
);

$(".ShowNavBar").pageslide();

$(document).ready(
	function(){

        $('.popup-youtube').magnificPopup({type:'iframe'});
		$("#NavBar li").click(
			function(){
				$("#NavBar ul").slideUp();
				if( !$("#NavBar li ul").next().is(":visible") ){
					$(this).find("ul").slideToggle();
				}
			}
		);
	}
);

if ($('.slider').length > 0) {
	$('.slider').glide(
		{ autoplay: 4000, arrows: false, navCenter: false, hoverpause: true, nav: true }
	);
}


  $('.image-link').magnificPopup({type:'image'});