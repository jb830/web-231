const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-3.3.js
; Author: Professor Krasso
; Date:   23 February 2020
; Modified By: Joanna Brumfield
; use of JavaScript control structures using
; switch statements.
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 3.3')+ '\n');

let eventKeyCode = 13;

// A switch statement that could be used to determine what key was pressed
// on the keyboard using javascript key codes
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
}
