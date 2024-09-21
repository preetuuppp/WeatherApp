import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location, zoom = 12 }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} center={location} zoom={zoom}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
