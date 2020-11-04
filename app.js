// from data.js
var table = data;

// YOUR CODE HERE!

//Getting a reference to the table body
var tbody = d3.select("tbody");


function Refresher(newData) {
  tbody.html("");

  newData.forEach(function (newRow) {

    var row = tbody.append("tr");

    Object.entries(newRow).forEach(function ([key, value]) {
      //print
      var cell = row.append("td");
      cell.text(value);
    });
  });
};



//Creating Filter for Date
//select the button
function filterDate() {

  var chosenDate = d3.select("#datetime").property("value");
  console.log(chosenDate)

  var filtered_Data = table.filter(row => row.datetime === chosenDate);
  Refresher(filtered_Data);

};

//Button
var button = d3.select("#filter-btn");
button.on("click", filterDate);
Refresher(table);
