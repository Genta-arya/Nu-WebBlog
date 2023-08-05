import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../../Asset/marker.png";

export default function Map  () {
  const centerCoordinates = [-1.8342907881587442, 109.9663793966808];

  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAnimation = () => {
    setIsAnimating((prev) => !prev);
  };

  useEffect(() => {
    const interval = setInterval(toggleAnimation, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMarkerClick = () => {
    const lat = centerCoordinates[0];
    const lng = centerCoordinates[1];
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center pl-5 pr-5 pb-1">
      <div className="w-full h-96 rounded-md overflow-hidden shadow-md border border-gray-700">
        <div className="text-center p-4 bg-green-800 text-white font-bold">
          Maps
        </div>
        <MapContainer
          center={centerCoordinates}
          zoom={17}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            
          />

          <Circle
            center={centerCoordinates}
            radius={55}
            className={isAnimating ? "circle-animation" : ""}
          />

          <Marker
            position={centerCoordinates}
            icon={customIcon}
            eventHandlers={{ click: handleMarkerClick }}
          >
            <Popup>Nahdlatul Ulama Ketapang</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};


