const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-4.3.js
; Author: Professor Krasso
; Date:   25 February 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates how to declare,
; initialize, and iterate through a JavaScript
; array and select individual values within it.
;===========================================
*/

const vehicles = ['Car','Truck','Motorcycle','Airplane','Bus'];

function getValue(x,y) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) {
      console.log('\n-- SELECTED VALUE --' + '\n' + x[i]);
    }
  }
}
console.log(header.display('Joanna', 'Brumfield', 'Assignment 4.3')+ '\n\n'
            + '-- DISPLAYING ARRAY ITEMS --');

for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

getValue(vehicles,'Motorcycle');
getValue(vehicles,'Bus');
