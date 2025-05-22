document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("last-modified");

    // Set the current year dynamically
    yearElement.textContent = new Date().getFullYear();

    // Display the last modified date of the document
    lastModifiedElement.textContent = document.lastModified;

    // Wind chill factor calculation
    const temp = 10; // Degrees Celsius
    const windSpeed = 5; // km/h

    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8) ? 
            (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) : 
            "N/A";
    }

    document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);
});


