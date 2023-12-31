import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../assets/styles/components/Map.scss";

const MarkerComponent = () => (
  <div className="marker">
    <FaMapMarkerAlt size={32} color="red" />
  </div>
);

const MapComponent = () => {
  const center = {
    lat: 49.582271827454115,
    lng: 34.55231791482751,
  };

  const apiKey = process.env.REACT_APP_API_KEY_MAP;

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={16}
      >
        <MarkerComponent lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;