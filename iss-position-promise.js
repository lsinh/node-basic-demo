var request = require('request');
var prompt = require('prompt');

var requestPromise = require('request-promise');
var promptPromise = require('prompt-promise');

var issLat, issLng;



requestPromise('http://api.open-notify.org/iss-now.json').then(function(res1) {
    res1 = JSON.parse(res1);
    issLat = res1.iss_position.latitude;
    issLng = res1.iss_position.longitude;
    
    return promptPromise('location');
    
}).then(function(res2) {
    var userLocation = res2;
    
    return requestPromise('https://maps.googleapis.com/maps/api/geocode/json?address=' + userLocation);
    
}).then(function(res3) {
    res3 = JSON.parse(res3);
    var location = res3.results[0].geometry.location;
    var userLat = location.lat;
    var userLng = location.lng;
    
    console.log(issLat, issLng, userLat, userLng);
});
