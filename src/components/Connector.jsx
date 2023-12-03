// ParentComponent.js
import React, { useState } from 'react';
import Form from './Form';
import Map from './Map';

const Connector = () => {
  const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);

  const handleFormSubmit = ({ latitude, longitude }) => {
    // Update the marker position
    setMarkerPosition([latitude, longitude]);
  };

  return (
    <div>
      <Form onFormSubmit={handleFormSubmit} />
      <Map markerPosition={markerPosition} />
    </div>
  );
};

export default Connector;
