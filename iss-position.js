var request = require('request');
var prompt = require('prompt');

prompt.get(['location'], function(err1, res1) {
    var userLocation = res1.location;
    request('https://maps.googleapis.com/maps/api/geocode/json?address=' + userLocation, function(err2, res2, body2) {
        var data = JSON.parse(body2);
        var location = data.results[0].geometry.location;
        var userLat = location.lat;
        var userLng = location.lng;
        
        request('http://api.open-notify.org/iss-now.json', function(err3, res3, body3) {
            var data = JSON.parse(body3);
            var issLat = data.iss_position.latitude;
            var issLng = data.iss_position.longitude;
            
            // distance bablblabla
            console.log('your distance is blablabla');
        });
    });
});