let locc = document.querySelector('locc');

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    locc.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});


