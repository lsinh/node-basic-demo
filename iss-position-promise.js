var request = require('request');
var prompt = require('prompt');

var requestPromise = require('request-promise');
var promptPromise = require('prompt-promise');

var Promise = require('bluebird');

var issPositionPromise = requestPromise('http://api.open-notify.org/iss-now.json').then(function(res) {
    return JSON.parse(res);
});

var userLocationPromise = promptPromise('location').then(function(res2) {
    var userLocation = res2;
    
    return requestPromise('https://maps.googleapis.com/maps/api/geocode/json?address=' + userLocation);
    
}).then(function(res3) {
    res3 = JSON.parse(res3);
    var location = res3.results[0].geometry.location;
    var userLat = location.lat;
    var userLng = location.lng;
    
    return {
        userLat: userLat,
        userLng: userLng
        
    };
});

Promise.all([issPositionPromise, userLocationPromise]).then(function(results) {
    console.log(results);
});