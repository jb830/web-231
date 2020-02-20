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

myName.joanna = 'Joanna Brumfield';

function myName() {
  return myName.joanna;
};

console.log(header.display('Joanna', 'Brumfield', 'Assignment-2.4') + '\n\n'
            + 'Hello ' + myName() + '!');


