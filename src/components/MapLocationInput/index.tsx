import React from "react";
import { LatLng } from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

interface MapLocationInputProps {
  position: LatLng
  onChange: (params: LatLng) => void
}
const MapLocationInput: React.FC<MapLocationInputProps> = ({ position, onChange }) => {

  useMapEvents({
    click(e) {
      onChange(e.latlng);
    },
  });

  return position ? <Marker position={position} /> : null;
};

export default MapLocationInput;
