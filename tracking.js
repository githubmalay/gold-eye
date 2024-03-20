// tracking.js

// Simulated tracking updates (for demonstration purposes)
var trackingUpdates = [
    { location: "Warehouse A", status: "Package is being prepared for shipment." },
    { location: "Warehouse B", status: "Package is ready for shipment." },
    { location: "Lenskart Logistics", status: "Package has been picked up and is on the way." },
    { location: "Distribution Center", status: "Package is being sorted for delivery." },
    { location: "Local Courier", status: "Package is out for delivery." },
    { location: "Your Location", status: "Package has been delivered successfully." }
];

// Function to initialize Google Map (for demonstration purposes)
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco for demonstration
        zoom: 10
    });

    // Add a marker for the delivery location (for demonstration purposes)
    var marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco for demonstration
        map: map,
        title: 'Your Location'
    });
}

// Function to display simulated tracking updates
function displayTrackingUpdates() {
    var trackingUpdatesList = document.getElementById('trackingUpdates');

    // Clear existing updates
    trackingUpdatesList.innerHTML = '';

    // Add simulated tracking updates
    trackingUpdates.forEach(function (update) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `<strong>${update.location}:</strong> ${update.status}`;
        trackingUpdatesList.appendChild(listItem);
    });
}

// Display tracking updates on page load
window.onload = displayTrackingUpdates;
