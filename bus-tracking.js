document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map
  const map = L.map("map").setView([12.9263, 77.5033], 14);

  // Add the tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Routes data
  const routes = {
    route1: {
      name: "Route 1: RV College to MG Road",
      points: [
        [12.9263, 77.5033],
        [12.9270, 77.5060],
        [12.9302, 77.5094],
        [12.9345, 77.5119],
        [12.9442, 77.5907],
      ],
    },
    route2: {
      name: "Route 2: RV College to Kengeri",
      points: [
        [12.9263, 77.5033],
        [12.9193, 77.4901],
        [12.9144, 77.4730],
        [12.9062, 77.4599],
      ],
    },
    route3: {
      name: "Route 3: RV College to Sarjapur",
      points: [
        [12.9263, 77.5033],
        [12.9205, 77.5107],
        [12.9101, 77.5275],
        [12.8905, 77.5612],
      ],
    },
  };

  let routingControl;

  // Function to draw routes
  function drawRoute(routePoints) {
    // Remove existing routes if any
    if (routingControl) {
      map.removeControl(routingControl);
    }

    // Add the new route
    routingControl = L.Routing.control({
      waypoints: routePoints.map((coords) => L.latLng(coords[0], coords[1])),
      routeWhileDragging: true,
      show: false,
    }).addTo(map);
  }

  // Handle route selection
  const routeSelect = document.getElementById("routeSelect");
  routeSelect.addEventListener("change", function () {
    const selectedRoute = routes[routeSelect.value];
    drawRoute(selectedRoute.points);
  });

  // Draw the first route by default
  drawRoute(routes.route1.points);
});
