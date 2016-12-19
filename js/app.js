var map;
var myCenter = new google.maps.LatLng(53, -1.33);
var marker = new google.maps.Marker({
  position: myCenter
});

function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 14,
    draggable: false,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapProp);
  marker.setMap(map);

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
};

function resizeMap() {
  if (typeof map != 'undefined') {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', resizeMap());

$('#modalMapa').on('show.bs.modal', function() {
  if (typeof map != 'undefined') setTimeout(function() { resizeMap(); }, 400);
});

// To unload the data when the modal is closed
$(document).on('hidden.bs.modal', function (e) {
    $(e.target).removeData('bs.modal');
});
