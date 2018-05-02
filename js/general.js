// JavaScript Document

//Slider  
$(window).load(function() {
	$('.blueberry').blueberry();
});

//Homepage image animation
$(document).ready(function(){
	//when hover over the div with class = photo,
	//find the caption and change its css top property value from
	//its original value -180 to 0
	
	$('.photo').hover(function(){
		$(this).find('.caption').stop().animate({top:'0px'}, {duration:1600, easing:'easeOutBounce'});
		
	}, 
	
	function(){
	//on mouseOut, put the original value back in
		$(this).find('.caption').stop().animate({top:'-180px'}, {duration:1600, easing:'easeOutBack'})	
	});
});

//Page Scroll animation
$(document).ready(function(){
	$('a[href*=#]:not([href=#])').click(function(){
		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length){
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1200);
				return false;
			}
		}
	});
});

//Gallery image animation
$(document).ready(function(){
	
	//on mouse over
	$('.images').hover(function(){
		
		//set opacity to 70%
		$(this).find('.roll').stop().animate({opacity:0.6, easing: 'fadeIn'}, 'fast');
	},
	
	//on mouse out
	function(){
		//set opacity back to 0%
		$(this).find('.roll').stop().animate({opacity:0, easing:'fadeOut'}, 'fast');
	});

});

//Google Map
function initialize() {
  var myLatlng = new google.maps.LatLng(35.88097,14.401199); //setting the Latitude and Longitude
  var mapOptions = {
    zoom: 14,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); //getting element by Id from html
	
  var marker = new google.maps.Marker({ //setting the marker on map
      position: myLatlng,
      map: map,
	  draggable: false,
      title: 'Allison\'s Unisex Hair Salon'
  });
}

google.maps.event.addDomListener(window, 'load', initialize); //calling the function to initialize


///////////////////
///////////////////

$(document).ready(function(){
	$('.contact_info a').hover(function(){
		
	});
});