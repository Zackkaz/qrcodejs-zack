// Function to generate the QR Code
function createQRCode() {
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = ''; // Clear previous code if any

    // **IMPORTANT:** Change the 'text' to whatever data you want encoded
    new QRCode(qrcodeContainer, {
        text: "https://yourwebsite.com/data", 
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Function to handle the download
function downloadQRCode() {
    const qrcodeContainer = document.getElementById("qrcode");
    
    // qrcode.js uses the <canvas> element for modern browsers
    const canvasElement = qrcodeContainer.querySelector('canvas');

    if (!canvasElement) {
        alert("QR Code canvas not found. Try refreshing or check if the code was generated.");
        return;
    }

    // Convert canvas to a Data URL (image/png)
    const imageURL = canvasElement.toDataURL("image/png");

    // Create a temporary link element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = imageURL;
    downloadLink.download = "qr-code.png"; // Set the default file name

    // Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Clean up
    document.body.removeChild(downloadLink);
}

// Run the functions once the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Generate the code
    createQRCode();

    // 2. Attach the download function to the button
    const downloadButton = document.getElementById("download-btn");
    downloadButton.addEventListener('click', downloadQRCode);
});
