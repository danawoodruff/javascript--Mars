// Import the dataset from data.js into the table body

let tbody = d3.select("tbody");

// Check that data is being called
console.log(data);

// Append the records of data.js to table using arrow
data.forEach((record) => {
    let row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});

// ***********************************************************************
// Select the filter button for the table
let button = d3.select("#filter-btn");
button.on("click", function () {

    tbody.html("");

    // Declare variables for date, state, and shape
    let inputElement = d3.select("#datetime");
    let inputElement2 = d3.select("#state");
    let inputElement3 = d3.select("#shape");

    // Get the value property of the user input for date, state, and shape
    let inputValue = inputElement.property("value");
    let inputValue2 = inputElement2.property("value");
    let inputValue3 = inputElement3.property("value");

    // console.log input value to check that data is being called
    console.log(inputValue);

    // Filter Data with datetime equal to input value and/or then filter by state and shape
    let filteredData = data.filter(sighting => {
    return (sighting.datetime === inputValue  || !inputValue) && 
    (sighting.state === inputValue2 || !inputValue2) &&
    (sighting.shape === inputValue3 || !inputValue3)
    });

    // Display filtered values
    filteredData.forEach(function (selections) {

        // Append one table row `tr` for each UFO Sighting. Similar to intial row and data append but "longhand"
        let row = tbody.append("tr");

        // Use `Object.entries` to console.log each UFO Sighting value to cells
        Object.entries(selections).forEach(function ([key, value]) {
            console.log(key, value); // This code can be deleted, only used to check data call

            // Append a cell to the row for each value
            let cell = row.append("td");
            cell.text(value);
        });
    });
});
