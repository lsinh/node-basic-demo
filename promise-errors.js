var requete = require('request-promise');

requete('http://www.google.com').then(function(body) { // google.com is not JSON, SyntaxError
    return JSON.parse(body);
}).then(function(issObject) {
    console.log(fhefherjfhw); //ReferenceError
    console.log(issObject.iss_position);
}).catch(SyntaxError, function(err) {
    console.log("please give me some JSON instead");
}).catch(function(err) {
    console.log("An unexpected error has occurred");
});