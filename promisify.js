var Promise = require('bluebird');
var request = require('request');
var prompt = require('prompt');

request = Promise.promisify(request); // returns (a function that returns promises instead of taking a callback)
prompt = Promise.promisifyAll(prompt); // returns an object where all the original methods have a *Async equivalent that returns promises. for example, prompt.get becomes prompt.getAsync

// request('http://api.open-notify.org/iss-now.json', function(err, res, body) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(res);
//     }
// })

// prompt.get(['location'], function(err, res) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(res.location);
//     }
// })

// request('http://api.open-notify.org/iss-now.json').then(function(res) {
//     console.log(JSON.parse(res[0].body));
// }).catch(function(err) {
//     console.log(err);
// });

prompt.getAsync(['location']).then(function(res) { // the original function is prompt.get so prompt.getAsync is the promise version
    return request('http://api.open-notify.org/iss-now.json');
}).then(function(res) {
    console.log(JSON.parse(res[0].body));
})