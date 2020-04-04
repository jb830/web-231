/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date: 4 April, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates use of
; jQuery and JavaScript
;===========================================
*/
//employee constructor
function Employee(id, first, last, title) {
  this.id = id;
  this.firstName = first;
  this.lastName = last;
  this.title = title;
}
//create employee objects and insert into array "emps"
let emps = [
  new Employee(16546, 'Jamie', 'Parks', 'Sales manager'),
  new Employee(24324, 'Michael', 'Ellis', 'Accountant'),
  new Employee(37624, 'Jesse', 'McCormick', 'Budget analyst'),
  new Employee(47659, 'Audrey', 'Watson', 'Chief financial officer'),
  new Employee(56546, 'Irene', 'Ramirez', 'HR specialist'),
];

//returns employee record in alert() if employee ID matches record
function getEmployee(val) {
  let emp;
  //iterate over emp array
  for (i = 0; i < emps.length; i++) {
    //if ID matches input value, create alert with employee fields listed
    if (val == emps[i].id) {
      emp = emps[i];
      // console.log(emp);
      alert(emp.id + ", " + emp.firstName + " " + emp.lastName + ", " + emp.title);
    };
  };
};

let output;
//builds HTML table and appends emps array of objects to it
function displayEmployees() {
  //build dynamic HTML table
  let output =  "<table>" +
                  "<thead>" +
                    "<th>" + "ID" + "</th>" +
                    "<th>" + "First Name" + "</th>" +
                    "<th>" + "Last Name" + "</th>" +
                    "<th>" + "Title" + "</th>";
  //iterates over emps array and appends values to table cells
  for (i = 0; i < emps.length; i++) {
  output += "<tr id=employee>" +
            "<td>" + emps[i].id + "</td>" +
            "<td>" + emps[i].firstName + "</td>" +
            "<td>" + emps[i].lastName + "</td>" +
            "<td>" + emps[i].title + "</td>";
  };
  output += "</tr>" +
            "</table>";
  //inserts values and table into HTML element
  document.getElementById('emps').innerHTML = output;
};

//jQuery onClick event, checks ID of selected employee and calls getEmployee
//and returns employee information via popup
$(function () {
  $("table tr").click(function () {
    selected = $(this).find('td:first').html();
    getEmployee(selected);
  });
});



