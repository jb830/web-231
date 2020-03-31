/*
============================================
; Title:  brumfield-7.3.js
; Author: Professor Krasso
; Date:   29 March 2020
; Modified By: Joanna Brumfield
; Description: Demonstrates manipulating the
; DOM using various document methods and properties
;===========================================
*/

//writes an ordered list of fruit
document.write(
  '<h1>SHOPPING LIST v.1</h1></h1><ol><li>Oranges</li><li>Apples</li><li>Pears</li><li>Limes</li><li>Lemons</li></ol>'
  );

//writes a list of fruits into HTML table 
window.onload = writeList;
function writeList() {
  document.getElementById("list").innerHTML =
    "<h1>SHOPPING LIST v.2</h1>" +
    "<table>" +
      "<thead>" +
        "<tr>" +
          "<th>ID</th>" +
          "<th>Item</th>" +
        "</tr>" +
      "</thead>" +
      "<tbody>" +
        "<tr>" +
          "<td>1</td>" +
          "<td>Oranges</td>" +
        "</tr>" +
        "<tr>" +
          "<td>2</td>" +
          "<td>Apples</td>" +
        "</tr>" +
        "<tr>" +
          "<td>3</td>" +
          "<td>Pears</td>" +
        "</tr>" +
        "<tr>" +
          "<td>4</td>" +
          "<td>Limes</td>" +
        "</tr>" +
        "<tr>" +
          "<td>5</td>" +
          "<td>Lemons</td>" +
        "</tr>" +
      "</tbody>" +
    "</table>"
  ;
};


