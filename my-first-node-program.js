var request = require('request');

request('https://developer.mozilla.org/en-US/search.json?q=setTimeout', function (error, response, body) {
    
  if (!error && response.statusCode === 200) {
    var theResult = JSON.parse(body);
    
    var documents = theResult.documents;
    
    for (var i = 0; i < documents.length; i++) {
        //console.log(documents[i].title);
    }
  }
  
});

request("http://api.open-notify.org/iss-now.json", function(err, res, body) {
    if (!err) {
        var issInfo = JSON.parse(body);
        
        console.log("The ISS is now at: " + issInfo.iss_position.latitude + " x " + issInfo.iss_position.longitude);
    }
    else {
        console.log("there was an error: " + err);
    }
});