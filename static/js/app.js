// from data.js
var tableData = data;
//### Level 1: Automatic Table and Date Search
//* Using the UFO dataset provided in the form of an array of JavaScript objects, 
//* Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

var tbody = d3.select("tbody");


//* Use a date form in your HTML document (included in the starter code, I believe.)
// and write JavaScript code that will listen for events 
// and search through the `date/time` column to find rows that match user input.

function tableName(data) {
    data.forEach(function(data) {
        console.log(data);
        var row = tbody.append("tr")
        
        Object.values(data).forEach(val => row.append("td").text(val))
      });   
}
tableName(tableData)

data.forEach(function(data) {
  console.log(data);
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime").property("value");
    // console.log(inputElement);
    
    // Get the value property of the input element
    

    
    var filteredData = data.filter(data => data.datetime === inputElement);
    
    tbody.html("")
    
   


    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
            // Append a cell to the row for each value
            // in the data object
            var cell = tbody.append("td").text(value);
    });
  });



});

// ### Level 2: Multiple Search Categories (Optional)


//* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

//   1. `date/time`
//   2. `city`
//   3. `state`
//   4. `country`
//   5. `shape`




// Your final product will be assessed on the following metrics:

// * Completion of all steps in chosen level

// * Visual attraction

// * Usability
