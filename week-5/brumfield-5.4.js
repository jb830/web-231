/*
============================================
; Title:  filtering-reducing-complex-data-structures.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to filter list of collection objects
;===========================================
*/
/*
Effectively, the above code takes a collection of poets and transforms them into an array of String values. The map() method is primarily used for transforming larger data sets into dynamic, complex data types. I know this probably sounds confusing but think of the map() method as a way of mapping fields in one object array to another. Why is this useful? Imagine you were querying an employee table in a database and only wanted to display the employees first name, last name, and address, but the query being used returns all database fields. You could use the map() method to filter out the unwanted fields.

Instructions

Using the array created in exercise 5.3, complete the following:

1. Using JavaScripts built-in map() function, create a filtered
    array of composers by rating (review the starter code for output expectations).
2. Using JavaScripts built-in map() function, create a filtered
    array of composers by genre (review the starter code for output expectations).
3. Using JavaScripts built-in forEach() function, iterate over each array and
  output the results.
4. Run and test the program and make sure your output matches what I have
  in the starter code.
5. Stage, commit and push your work to GitHub.
*/


// object collection
const famousPoets = [
  {
    firstName: "William",
    lastName: "Wordsworth"
  },
  {
    firstName: "William",
    lastName: "Shakespeare"
  },
  {
    firstName: "Percy",
    lastName: "Shelley"
  },
  {
    firstName: "Robert",
    lastName: "Frost"
  },
  {
    firstName: "Maya",
    lastName: "Angelou"
  }
]

// return a new list of objects with only the lastName field
let lastNames = famousPoets.map((poet) => {
  return poet.lastName
})

// output
console.log('-- DISPLAYING MY FAVORITE COMPOSERS LAST NAMES --')
index = 1
lastNames.forEach((lastName) => {
  console.log(index + '. ' + lastName)
  index++
})
