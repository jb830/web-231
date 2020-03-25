const header = require('../brumfield-header.js');
/*
============================================
; Title:  brumfield-6.2.js
; Author: Professor Krasso
; Date:   24 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates exception handling
; using the try/catch/finally statement
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 6.2')+ '\n');
try {
let input = 654;

if (typeof input != 'string' || typeof input == 'null' || input == "") throw "InputTypeError";
  console.log(input);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause: End of program ...");
};

