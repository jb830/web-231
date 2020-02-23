const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-3.2.js
; Author: Joanna Brumfield
; Date:   22 February 2020
; Description: Demonstrates the declaration and
; use of JavaScript control structures using
; if/else statements.
;===========================================
*/
let var1 = 'Car';
let var2 = 'Truck';
let var3 = 'Bike';
let var4 = 'Bike';
let var5 = 'Four';
let var6 = 'Three';

// A function that takes two parameters and compares them to see if they match
// and returns true or false depending on the input
function match(x,y) {
  if (x === y)
    return true;
  else
    return false;
}
// Function that takes two parameters and outputs a string message to the console
// if the input does not match
function logMismatch(x,y) {
  console.log(x + ' and ' + y + ' do not match!');
}
// Function that takes two parameters and outputs a string message to the console
// if the input does match
function logMatch(x,y) {
  console.log(x + ' and ' + y + ' do match!');
}
// Log function displaying header and testing the output of the functions
console.log(header.display('Joanna','Brumfield','Assignment 3.2') + '\n\n' +
            match(7,6) + '\n' + match(6,6) );

            // A control statement checking to see if input matches. If the input passes or does not
// pass the match method test, the correct function is invoked and the
// correlating string is output to the console
if (match(var1, var2)) {
  logMatch(var1, var2);
} else {
  logMismatch(var1, var2);
}

if (match(var3, var4)) {
  logMatch(var3, var4);
} else {
  logMismatch(var3, var4);
}

if (match(var5, var6)) {
  logMatch(var5, var6);
} else {
  logMismatch(var5, var6);
}


