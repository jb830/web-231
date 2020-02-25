const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-4.2.js
; Author: Professor Krasso
; Date:   25 February 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates how to declare,
; initialize, and iterate through a JavaScript array
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 3.4')+ '\n');

const fruit = ['grapes','Apples','bananas','pineapple','Kiwi'];

function getFruit(x) {
  for (let i = 0; i < x.length; i++) {
      console.log(x[i]);
  }
}

getFruit(fruit);
