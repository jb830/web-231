/*
============================================
; Title: Assignment 1.5
; Author: Joanna Brumfield
; Date: 18 February 2020
; Description: Using three employee records
; this program demonstrates the
; use of JavaScript variables and the 
; date object, console.log, and math functions
;===========================================
*/

//employee 1 record
var employee1firstName = "George"; 
var employee1lastName = "Washington";
var employee1address = "3200 Mount Vernon Hwy\nMt Vernon, VA\n22121"; 
var employee1payRate = 25000;
var employee1hireDate = new Date(1789, 3, 30);
//employee 2 record
var employee2firstName = "John"; 
var employee2lastName = "Adams";
var employee2address = "1250 Hancock Street\nQuincy, MA\n02169"; 
var employee2payRate = 26000;
var employee2hireDate = new Date(1797, 2, 4);
//employee 3 record
var employee3firstName = "Thomas"; 
var employee3lastName = "Jefferson";
var employee3address = "931 Thomas Jefferson Parkway\nCharlottsville, VA\n22902"; 
var employee3payRate = 27000;
var employee3hireDate = new Date(1801, 2, 4);

console.log( "First name: " + employee1firstName + "\n" + "Last name: " + 
            employee1lastName + "\n" + "Address: " + employee1address + "\n" + 
            "Pay rate: " + employee1payRate.toFixed(1) + "\n" + "Hire date: " + 
            employee1hireDate.toLocaleDateString() 
            + "\n\n" +
            "First name: " + employee2firstName + "\n" + "Last name: " + 
            employee2lastName + "\n" + "Address: " + employee2address + "\n" + 
            "Pay rate: " + employee2payRate.toFixed(1) + "\n" + "Hire date: " + 
            employee2hireDate.toLocaleDateString() 
            + "\n\n" +
            "First name: " + employee3firstName + "\n" + "Last name: " + 
            employee3lastName + "\n" + "Address: " + employee3address + "\n" + 
            "Pay rate: " + employee3payRate.toFixed(1) + "\n" + "Hire date: " + 
            employee3hireDate.toLocaleDateString() 
            );



