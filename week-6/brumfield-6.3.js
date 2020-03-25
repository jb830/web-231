const header = require('../brumfield-header.js');
console.log(header.display('Joanna', 'Brumfield', 'Assignment 6.3')+ '\n');
/*
============================================
; Title:  brumfield-6.3.js
; Author: Professor Krasso
; Date:   25 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates creating an object
; and logging its values.
;===========================================
*/

let ticket = {
  id: 11,
  name: 'Toni Garner',
  requestor: 'Lori Bryant',
};

//Not sure if we were supposed to use a loop, dot notation, or just print the
// whole object to print object so I tried all of them ..
console.log('\nDefault values:');
console.log(ticket);
console.log('');
for (let key in ticket) {
  console.log(key + ': ' + ticket[key]);
}
console.log( '\nid: ' + ticket.id + ', name: ' + ticket.name + ', requestor: '
            + ticket.requestor );

ticket.id = 101;
ticket.name = 'Help Desk Support';
ticket.requestor = 'Bob Jones';

console.log('\nNew values:');
console.log(ticket);
console.log('');
for (let key in ticket) {
  console.log(key + ': ' + ticket[key]);
}
console.log( '\nid: ' + ticket.id + ', name: ' + ticket.name + ', requestor: '
            + ticket.requestor );




