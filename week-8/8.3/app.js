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
