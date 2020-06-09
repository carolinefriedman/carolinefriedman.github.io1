jQuery(document).ready(function ($) {
	var h = $("nav").height() * 0.7;
  $(".scroll").click(function (event) {
  	event.preventDefault();
    $('html,body').animate({
			scrollTop: $(this.hash).offset().top - h
    }, 500);
	});
});
$(document).scroll(function () {
	var h = $("nav").height() * 1.5;
  var link1 = $("#home").offset().top;
  var link2 = $("#about").offset().top;
  var link3 = $("#timeline").offset().top;
	var link4 = $("#resources").offset().top;
	var link5 = $("#downloads").offset().top;
  var selectedColor = "rgba(255,0,165,0.8)";
	var defaultColor = "rgba(0,0,0,0.8)";
  var top = $(this).scrollTop() - h;
  $("nav li a").css('color', defaultColor);    
  if (top <= link1) {
  	$("#link1").css('color', selectedColor);
  } else if (top <= link2) {
    $("#link2").css('color', selectedColor);
  } else if (top <= link3) {
    $("#link3").css('color', selectedColor);
  } else if (top <= link4) {
    $("#link4").css('color', selectedColor);
  } else {
		$("#link5").css('color', selectedColor);
	}
});