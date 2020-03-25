const header = require('../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Assignment 6.4')+ '\n');
/*
============================================
; Title:  brumfield-6.4.js
; Author: Professor Krasso
; Date:   25 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates creating and accessing
; object literals and nested children objects.
;===========================================
*/

//Ticket object literal with nested employee object
let ticket = {
  id: 105,
  name: 'Bob Jones',
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: 1,
  employee: {
    id: 506781,
    firstName: 'Bob',
    lastName: 'Jones',
    jobTitle: 'Programmer I'
  }
};

console.log( 'Ticket: ' + ticket.id + ' was created on ' + ticket.dateCreated +
            ' and assigned to ' + ticket.employee.firstName + ' ' +
            ticket.employee.lastName + ' (' + ticket.employee.jobTitle + ').' );
