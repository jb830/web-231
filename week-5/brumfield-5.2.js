const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-4.3.js
; Author: Professor Krasso
; Date:   16 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates how to iterate over an array
; using the forEach() method.
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 5.2')+ '\n');

//Array of favorite foods
const favFoods = ['Mangos', 'Spinach', 'Quinoa', 'Garlic', 'Crab'];

//Output log of favFoods array values
favFoods.forEach( (food) => {
  console.log(food);
});

