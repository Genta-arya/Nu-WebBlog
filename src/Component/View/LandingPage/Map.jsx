import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";
import markerIcon from "../../../Asset/marker.png"; 


const Map = () => {
  const centerCoordinates = [-1.8339975213092388, 109.96645236718703];

  
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

  return (
    <div className="flex justify-center items-center pl-5 pr-5 pb-1">
      <div className="w-full h-96 rounded-md overflow-hidden shadow-md border border-gray-700">
        <div className="text-center p-4 bg-gray-800 text-white font-bold">
          Kantor NU Ketapang
        </div>
        <MapContainer center={centerCoordinates} zoom={17} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Circle
            center={centerCoordinates}
            radius={55}
            className={isAnimating ? "circle-animation" : ""}
          />

        
          <Marker position={centerCoordinates} icon={customIcon}>
            <Popup>Nahdlatul Ulama Ketapang</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
