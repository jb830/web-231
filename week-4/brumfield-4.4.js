const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-4.3.js
; Author: Professor Krasso
; Date:   11 March 2020
; Modified By: Joanna Brumfield
; Description:
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 4.4')+ '\n');

let states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];
// * Params: Two Strings
// * Response: True/false
// * Description: Checks to see if two string values match.
function getState(arg, state) {
  state = 'Iowa'
  if (arg === state) {
    return true;
  }
}

// * Params: One array type parameter
// * Response: Values of array
// * Description: Return the values of
// the array that have been iterated over
function printStates(arr) {
  for (let i = 0; i < arr.length; i++) {
      return arr;
  }
}

// * Creates a new array with filtered values
// based off of arguments in the getState() predicate function
// which checks to see if string argument matches a value in the array.
const statesSelection = states.filter(getState);

console.log('\n-- ORIGINAL ARRAY --\n' + printStates(states));
console.log('\n-- SORTED ARRAY --\n' + states.sort());
console.log('\n-- SELECTED VALUE --\n' + statesSelection);

