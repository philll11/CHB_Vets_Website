var CHBVetsMap;
/* Initializes CHB Vet map */
function initMap() {
    var myLatLng = {lat: -39.994738, lng: 176.554233};
    
    /* Sets the location and aerial zoom level */
    CHBVetsMap = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 18
    });
    
    /* Set location of marker */
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: CHBVetsMap,
        title: 'CHB Vets Ltd'
    });
    
    /* Ties info box to marker and activates when marker is clicked */
    var contentString = '<p><b>CHB Vets Ltd</b></p>' + '<p>5 Northumberland St<br>Waipukurau<br>4200<br>New Zealand</p>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(CHBVetsMap, marker);
    });
}