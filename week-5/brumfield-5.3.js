
const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-5.3.js
; Author: Professor Krasso
; Date:   18 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates how to create and iterate over an array
; of objects using the forEach() method and output contents.
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 5.3')+ '\n');

// Collection of composer objects
const famousComposers = [
  {
    firstName: 'Ludwig van',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8
  },
  {
    firstName: 'Wolfgang',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10
  },
  {
    firstName: 'Johann',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9
  },
  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6
  },
  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5
  }
];

// Foreach() function used to iterate over famousComposers array of objects
// and log specified key values
console.log('-- COMPOSERS --')
famousComposers.forEach( (composer) => {
  console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre
  + ', Rating: ' + composer.rating);
});

