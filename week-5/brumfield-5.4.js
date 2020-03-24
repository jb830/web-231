const header = require('../brumfield-header.js');
/*
============================================
; Title:  Brumfield-5.4.js
; Author: Professor Krasso
; Date:   18 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates how to filter list of collection objects
;===========================================
*/
console.log(header.display('Joanna', 'Brumfield', 'Assignment 5.4')+ '\n');

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

// Creates a filtered array of composers by rating using the built-in map() function
let composerRatings = famousComposers.map(function (composer) {
  return 'Rating: ' + composer.rating + '\nComposer: ' + composer.lastName + '\n';
});

// Creates a filtered array of composers by genre using the built-in map() function
let composerGenres = famousComposers.map(function (composer) {
  return 'Genre: ' + composer.genre + '\nComposer: ' + composer.lastName + '\n';
});

// Iterates over the composerRatings array build with the map() function
// and logs the results
console.log('-- COMPOSER BY RATING --')
composerRatings.forEach(function(genres) {
  console.log(genres);
});

// Iterates over the composerGenres array build with the map() function
// and logs the results
console.log('\n-- COMPOSER BY GENRE --')
composerGenres.forEach(function(genres) {
  console.log(genres);
});

