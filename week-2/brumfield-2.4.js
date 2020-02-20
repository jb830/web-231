const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-2.3.js
; Author: Joanna Brumfield
; Date:   19 February 2020
; Description: Demonstrates the declaration and
; use of JavaScript functions
;===========================================
*/
// A function that takes two arguments - firstName and lastName, and returns
// both values concatenated with a pre-written greeting message
function fullName(firstName, lastName) {
  let greeting = 'Hello, my name is ';
  return greeting + firstName + ' '  + lastName + '!';
}
// A function that take three arguments - year, month, and day, and uses the
// Date() object and its toLocalDateString method to return the input
// in a formatted string using slashes and concatenates is with a message.
function dateWriter(year, month, day) {
  let message = 'Todays date is ';
  let date = new Date(year, month-1, day)
  return message + date.toLocaleDateString();
}
// A function that takes two arguments - a number and the number of decimal
// points you would like the input to be formatted to, then returns the
// formatted number string specified by the user concatenated with a message.
function formatNumber(number, numOfFixedPositions) {
  let messageStart = 'The current temperature is ';
  let messageEnd = ' degrees.'
  return messageStart + number.toFixed(numOfFixedPositions) + messageEnd;
}
// A function that takes a single string argument and returns
// the string as an integer value or NaN (Not a number) if the string
// does not contain a number. A message is concatenated to the int for output.
function convertToInt(x) {
  let messageStart = 'I am ';
  let messageEnd = ' years old.';
  return messageStart + parseInt(x) + messageEnd;
}
// A function that takes a single string argument and returns
// the string as a floating point number value or NaN (Not a number) if
// the string does not contain a number. A message is concatenated to the
// for output float.
function convertToFloat(x) {
  let message = 'My savings account goal is $'
  return message + parseFloat(x);
}

console.log(header.display('Joanna', 'Brumfield', 'Assignment-2.4') + '\n\n' +
            fullName('Joanna', 'Brumfield') + '\n' + dateWriter(2020, 2, 20)
            + '\n' + formatNumber(55.75, 1) + '\n' + convertToInt(32) + '\n' +
            convertToFloat(60000.50));
