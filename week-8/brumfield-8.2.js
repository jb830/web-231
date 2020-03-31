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
function displayFruits() {
let out = "<h2>Fruit List</h2><ul>";

fruits.forEach(function (val) {
  var x = val.id + ": ";
  var y = val.type;
  out += "<li class=fruitId>" + x + "</li>" + "<li class=fruitType>" + y + "</li>";
  console.log(x,y);
});
out += "</ul>";

document.getElementById('fruits').innerHTML = out;
};

