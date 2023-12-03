import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Locdata from './data/locations.json';
import './Map.css';

const Map = () => {
  const defaultCenter = [39.92645, -122.198393]; // Default center in case no locations are available

  return (
    <MapContainer className="map-container" center={defaultCenter} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Locdata.map(loc => (
        <Marker key={loc.latitude} position={[loc.latitude, loc.longitude]}>
          <Popup>{loc.popupContent}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
