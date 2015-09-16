function firstCharacter(inputStr) {

  if ( typeof(inptutStr) !== "string" ) {
    console.error("ERROR in function firstCharacter(): argument must be a string");
  } else {
    return inputStr;
  }

}

function lastCharacter(inputStr) {

  if ( typeof(inputStr) !== "string" ) {
    console.error("ERROR in function lastCharacter(): argument must be a string");
  } else {
    return inputStr[inputStr.length-1];
  }

}

function nthCharacter(inputStr, n) {

  if (arguments.length !== 2) {
    console.error("2 argument where expected for function nthCharacter()");
  } else if ( isNaN(n) || n % 1 !== 0 ) {
    console.error("first parameter for function nthCharacter() must be an integer");
  } else if ( typeof(inputStr) !== "string" ) {
    console.error("first parameter for function nthCharacter() must be a string");
  } else if ( n > inputStr.length-1 ) {
    console.error("value of second parameter for function nthCharacter() is too high")
  } else {
    return inputStr[n];
  }

}

var kitty = 'meow';

function gizmo() {
    console.log('gizmos of the world!');
}

module.exports = {
    getFirstChar: firstCharacter,
    getLastChar: lastCharacter,
    nthCharacter: nthCharacter,
    kitty: kitty,
    hello: "world"
};