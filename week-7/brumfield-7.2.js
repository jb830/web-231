const header = require('../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Assignment 7.2')+ '\n');
/*
============================================
; Title:  brumfield-7.2.js
; Author: Professor Krasso
; Date:   28 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates creating a
; constructor object and logging its values.
;===========================================
*/

function Employee( id, firstName, lastName, title ) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

let employees = [
  new Employee( 43245, 'Thomas', 'Edison', 'Software Engineer' ),
  new Employee( 76576, 'Benjamin', 'Franklin', 'Programmer' ),
  new Employee( 98798, 'Nikola', 'Tesla', 'Project Manager' ),
  new Employee( 98793, 'Charles', 'Babbage', 'Product Manager'),
  new Employee( 65765, 'Alexander', 'Bell Business', 'Analyst')
];

let counter = 0;
for ( i = 0; i < employees.length; i++ ) {
  counter++;
  console.log(counter + ".", employees[i].firstName, employees[i].lastName, employees[i].title);
};


