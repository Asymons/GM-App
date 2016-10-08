/**
 * Created by aless on 2016-10-08.
 */
var x = document.getElementById("demo");
var lat;
var long;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        navigator.geolocation.getCurrentPosition(getLat);
        navigator.geolocation.getCurrentPosition(getLong);
        console.log("Got current position");
        //console.log(navigator.geolocation.getCurrentPosition(showPosition));
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

    //alert(position.coords.latitude);
}




function getLat(position){
    lat = position.coords.latitude;
}

function getLong(position){
    long = position.coords.longitude;
}