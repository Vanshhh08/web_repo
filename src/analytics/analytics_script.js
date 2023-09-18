document.getElementById("generateButton").addEventListener("click", function () {
    const dropdown1Value = document.getElementById("dropdown1").value;
    //const dropdown2Value = document.getElementById("dropdown2").value;
    //const dropdown3Value = document.getElementById("dropdown3").value;
    //const dropdown4Value = document.getElementById("dropdown4").value;

    const table = document.getElementById("dataTable");
    table.innerHTML = ""; // Clear existing table content

    // Define data sets for each option
    const dataSets = {
        option1: [
            ["Ahemdabad", "2500", "200", "4100"],
            //["Option 1 - Data 5", "Option 1 - Data 6", "Option 1 - Data 7", "Option 1 - Data 8"],
        ],
        option2: [
            ["Amreli", "300", "1500", "2500"],
            //["Option 2 - Data E", "Option 2 - Data F", "Option 2 - Data G", "Option 2 - Data H"],
        ],
        option3: [
            ["Anand", "600", "900", "2200"],
        ],
        option4: [
            ["Aravalli", "300", "600", "1800"],
        ],
        option5: [
            ["Banaskantha", "600", "500","3500"],
        ],
        option6: [
            ["Bharuch", "400", "500", "3500"],
        ],
        option7: [
            ["Botad", "200", "500", "1300"],
        ],
        option8: [
            ["Chhota Udaipur", "200", "500", "1000"],
        ],
        option9: [
            ["Dahod", "300", "500", "2000"],
        ],
        option10: [
            ["Dang", "100", "200", "600"],
        ]
        // Add more options and data sets as needed
    };

    // Create table headers
    const headers = document.createElement("tr");
    headers.innerHTML = `<th>Region</th><th>No. of Schools</th><th>DropOuts 6th-10th</th><th>DropOuts 11th-12th</th>`;
    table.appendChild(headers);

    // Get the selected data set based on dropdown values
    const selectedDataSet = dataSets[dropdown1Value.toLowerCase()];

    if (selectedDataSet) {
        // Populate the table with data from the selected data set
        selectedDataSet.forEach((row) => {
            const tr = document.createElement("tr");
            row.forEach((cellData) => {
                const td = document.createElement("td");
                td.textContent = cellData;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    }

    // Show the table container
    document.getElementById("tableContainer").style.display = "block";
});
