/*============================================
; Title:  app.jc
; Author: Professor Krasso
; Date: 31 March, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates adding jQuery to
; Description: Demonstrates manipulating DOM elements with JavaScript
;===========================================*/

//jQuery methods that show/hide the list of fruits vai navbar a elements
$(document).ready(function() {
  $("#hide").click(function() {
    $("#fruits").hide();
  });
  $("#show").click(function() {
    $("#fruits").show();
  });
});

let fruits = [
  {
  id: 'Melon',
  type: 'Watermelons'
  },
  {
    id: 'Citrus',
    type: ['Oranges', ' Lemons', ' Limes']
  },
  {
    id: 'Stone Fruit',
    type: ['Peaches', ' Apricots']
  },
  {
    id: 'Berries',
    type: 'Raspberries'
  },
];

// Iterates through fruits array and appends values to an HTML unordered list
function displayFruits() {
  let out = "<h2>Fruit List</h2><ul>";

  fruits.forEach(function (val) {
    var x = val.id + ": ";
    var y = val.type;
    out +=  "<li class=fruitId>" + x + "</li>" +
            "<li class=fruitType>" + y + "</li>";
    console.log(x,y);
  });

  out += "</ul>";
  //appends ordered list to HTML element
  document.getElementById('fruits').innerHTML = out;
};
