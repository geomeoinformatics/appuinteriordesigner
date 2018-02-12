$(document).ready(function() {
/* google map */
	google.maps.event.addDomListener(window, 'load', init);
	function init() {
		var mapOptions = {			
			center: new google.maps.LatLng(33.650991, -117.919059),
			draggable: true,
			scrollwheel: false,	
			mapTypeControl: false,			
			zoom: 15,
			styles: [{
				"featureType":"water",
				"elementType":"geometry",
				"stylers":[
					{"color":"#000000"},
					{"lightness":20}
				]},{
					"featureType":"landscape",
					"elementType":"geometry",
					"stylers":[
						{"color":"#000000"},
						{"lightness":23}
				]},{
					"featureType":"water",
					"elementType":"geometry",
					"stylers":[
						{"color":"#323232"},
						{"lightness":0}
				]},{
					"featureType":"road.highway",
					"elementType":"geometry.fill",
					"stylers":[
						{"color":"#000000"},
						{"lightness":20}
				]},{
					"featureType":"road.highway",
					"elementType":"geometry.stroke",
					"stylers":[
						{"color":"#000000"},
						{"lightness":22}
				]},{
					"featureType":"road.arterial",
					"elementType":"geometry",
					"stylers":[
						{"color":"#000000"},
						{"lightness":21}
				]},{
					"featureType":"road.local",
					"elementType":"geometry",
					"stylers":[
						{"color":"#000000"},
						{"lightness":19}
				]},{
					"featureType":"poi",
					"elementType":"geometry",
					"stylers":[
						{"color":"#000000"},
						{"lightness":24}
				]},{
					"featureType":"transit",
					"elementType":"geometry",
					"stylers":[
						{"color":"#000000"},
						{"lightness":22}
				]},{
					"featureType":"administrative",
					"elementType":"geometry.fill",
					"stylers":[
						{"color":"#000000"},
						{"lightness":23}
				]},{
					"featureType":"administrative",
					"elementType":"geometry.stroke",
					"stylers":[
						{"color":"#000000"},
						{"lightness":50}
				]},{
					"elementType":"labels.text.stroke",
					"stylers":[
						{"visibility":"on"},
						{"color":"#000000"},
						{"lightness":19}
				]},{
					"elementType":"labels.text.fill",
					"stylers":[
						{"saturation":32},
						{"color":"#000000"},
						{"lightness":39}
				]},{
					"elementType":"labels.icon",
					"stylers":[
						{"visibility":"off"}					
				]}
			]
				
		};
		var mapElement = document.getElementById('gmap');
		var map = new google.maps.Map(mapElement, mapOptions);

		var pinColor = "DCA44B";
		var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
			new google.maps.Size(21, 34),
			new google.maps.Point(0,0),
			new google.maps.Point(10, 34));
			var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
			new google.maps.Size(40, 37),
			new google.maps.Point(0, 0),
			new google.maps.Point(12, 35));
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(33.650991,-117.919059), 
			map: map,
			icon: pinImage,
			shadow: pinShadow
		});
		var contentString = '<div id="content">'+
							'<h5 class="title-h5">Interior Design</h5>'+
							'<div class="map-info-body">'+
							'<p>Harbor Blvd</p>' + 
							'<p>Costa Mesa, CA 92627</p>' +   
							'<p>United States</p>' +  
							'</div>'+
							'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		marker.addListener('click', function() {
				infowindow.open(map, marker);
		});
	} 
});