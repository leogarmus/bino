$(document).ready(function(){
	$('.humburger').click(function(){
		$(this).toggleClass('open'),
		$('.navigation-list').toggleClass('open');
	});
	$('.slider').slick({
	infinite: true,
	speed: 1000,
	autoplay: true,
	});
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("button-to-top").style.display = 'flex';
    } else {
        document.getElementById("button-to-top").style.display = 'none';
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
