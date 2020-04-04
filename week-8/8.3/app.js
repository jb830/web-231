/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date: 1 April, 2020
; Modified by: Joanna Brumfield
; Description: Demonstrates adding jQuery to
; HTML elements to create toggling states and
; popup alerts.
;===========================================
*/
//array of fruits
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

//builds dynamic HTML table of fruits
function displayFruit() {
  //construct fruit table
  let output =  "<table>" +
                  "<thead>" +
                    "<th>" + "ID" + "</th>" +
                    "<th>" + "Type" + "</th>";
  //iterate through fruit array and append values to HTML table cells
  for (i = 0; i < fruits.length; i++) {
  output +=   "<tr>"  +
              "<td>" + "<a href=# class=fruitId>" + fruits[i].id + "</td>" +
              "<td>" + fruits[i].type + "</td>";
  };
  output += "</tr>" +
            "</table>";
  //append table to HTML element
  document.getElementById('fruits').innerHTML = output;
};

//dynamic click functions
$(function () {
  //toggles paragraph from show to hide via Toggle button
  $("#toggleBtn").click(function(){
    $("#cupcakeIpsum").toggle();
  });

  //creates a popup with fruit ID and Type when ID clicked
  $(".fruitId").click(function (event) {
      var fruitId = $(this).text();
      var fruitType = $(this).closest("td").next().text();
      alert("Fruit ID: " + fruitId + "\n" + "Fruit Type: " + fruitType );
  });
});
