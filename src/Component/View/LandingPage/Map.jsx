import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet"; // Import Leaflet library
import "leaflet/dist/leaflet.css";
import markerIcon from "../../../Asset/marker.png"; // Import your custom marker icon image
import "./Map.css"; // Import the CSS file for custom styles (Map.css)

const Map = () => {
  const centerCoordinates = [-1.8339975213092388, 109.96645236718703]; // Coordinates for the center of the map

  // Create a custom icon object for your marker
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Set the size of the custom icon image
    iconAnchor: [16, 32], // Set the anchor point of the custom icon (tip of the marker)
    popupAnchor: [0, -32], // Set the anchor point of the popup (above the marker)
  });

  // State to control the animation
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to toggle the animation state
  const toggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };

  // Run the animation on component mount and when the animation state changes
  useEffect(() => {
    const interval = setInterval(toggleAnimation, 2000); // Toggle the animation every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center pl-5 pr-5 pb-1">
      <div className="w-full h-96 rounded-md overflow-hidden shadow-md border border-gray-700">
        <MapContainer
          center={centerCoordinates}
          zoom={17} 
          className="w-full h-full"
        >
     
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Add a circle to the map with animation */}
          <Circle
            center={centerCoordinates}
            radius={55}
            className={isAnimating ? "circle-animation" : ""}
          />

          {/* Add a marker to the map with the custom icon */}
          <Marker position={centerCoordinates} icon={customIcon}>
            <Popup>Nahdlatul Ulama Ketapang</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
