function initialize() {

  var mapProp = {
    center:new google.maps.LatLng(45.420492, -75.696741),
    zoom:12,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
  position: new google.maps.LatLng(45.4214, -75.6919)
  });

  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
