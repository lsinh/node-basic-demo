  var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(['username', 'email'], function (err, result) {
      if (err) {
          console.log("there was a problem with the input");
      }
      else {
        //
        // Log the results.
        //
        console.log('Command-line input received:');
        console.log('  username: ' + result.username);
        console.log('  email: ' + result.email);
        
        while (true) {} // do the hamster
      }
  });
  
  setInterval(function() {
    console.log("hello");
  }, 1000);