const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-3.4.js
; Author: Professor Krasso
; Date:   23 February 2020
; Modified By: Joanna Brumfield
; use of JavaScript control structures using
; switch statements.
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 3.4')+ '\n');

// Number defined by user to compare with random numbers generated
let myNumber = 7;

// * Params: Two values of any type
// * Response: True or false
// * Description: Returns true if params match in value/type.
function match(x,y) {
  if (x === y)
    return true;
  else
    return false;
}
// * Params: Two values of any type
// * Response: Log function
// * Description: Logs a string indicating values/type of params do not match
function logMismatch(x,y) {
  console.log(x + ' and ' + y + ' do not match!');
}
// * Params: Two values of any type
// * Response: Log function
// * Description: Logs a string indicating values/type of params do match
function logMatch(x,y) {
  console.log(x + ' and ' + y + ' do match!');
}
// * Params: n/a
// * Response: integer value
// * Description: Returns a random integer value
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}
// Description: Number match game. Compares random numbers generated with the randomNumber
// function then compares each iteration with a defined number to see if they match. If
// the numbers match the logMatch function is called and a string indicating a match is
// logged. If they do not match the logMismatch function is called indicating the numbers
// do not match.
for (i = 0; i < 10; i++) {
  let randomNum = randomNumber(3.2);

  if (match(myNumber, randomNum)) {
    logMatch(myNumber,randomNum)
  } else {
    logMismatch(myNumber,randomNum)
  }
}
