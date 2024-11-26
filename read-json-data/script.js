$(document).ready(function () {
    // Load the JSON data
    $.getJSON("data.json", function (data) {
        // Iterate through the data
        $.each(data, function (index, item) {
            // Create a new row
            const row = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.age}</td>
                </tr>
            `;
            // Append the row to the table
            $("#data-table tbody").append(row);
        });
    }).fail(function () {
        alert("Failed to load data.");
    });
});
