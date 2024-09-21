import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ location, zoom = 12 }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript googleMapsApiKey={'AIzaSyACRnrdDeJ5zs4jIQUAV81ZsVw6C9Wi-oQ'}>
      <GoogleMap mapContainerStyle={mapStyles} center={location} zoom={zoom}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
