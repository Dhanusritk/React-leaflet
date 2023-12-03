import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Form.css'
import Map from "./Map";

const Form = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [showMap, setShowMap] = useState(false);

  // Extract the navigate function
  const navigate = useNavigate();

  useEffect(() => {
    if (showMap && latitude && longitude) {
      // Navigate to the '/map' route
      navigate("/map");
    }
  }, [showMap, latitude, longitude, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    // Check if latitude and longitude are valid before setting showMap to true
    if (latitude && longitude) {
      // Set showMap to true to render the Map component
      setShowMap(true);
    }
  };

  return (
    <div className="wrapper d-flex align-items-center justify-content-center w-100">
      <div className="login">
      <h2 className="mb-3">Form</h2>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="form-group was-validated mb-2">
            <label htmlFor="latitude" className="form-label">
              Latitude
            </label>
            <input
              type="text"
              className="form-control"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              required
            />
            <div className="invalid-feedback">Required</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="longitude" className="form-label">
              Longitude
            </label>
            <input
              type="text"
              className="form-control"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              required
            />
            <div className="invalid-feedback">Required</div>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            GO
          </button>
        </form>

        {/* Conditionally render the Map component */}
        {showMap && <Map latitude={latitude} longitude={longitude} />}
      </div>
    </div>
  );
};

export default Form;