document.addEventListener("DOMContentLoaded", function () {
    var map = L.map("map").setView([31.5103, 73.1326], 14);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
    }).addTo(map);

    L.marker([31.5103, 73.1326])
        .addTo(map)
        .bindPopup("<b>FAST-NU CFD Campus</b><br>We are here! 🐾")
        .openPopup();
});
