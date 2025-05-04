import React from "react";
import { LatLngTuple } from "leaflet";
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Store from "../../../dtos/Store";

export interface StoreMapProps {
  stores: Store[]
}

const Layout: React.FC<StoreMapProps> = ({
  stores
}) => {
  const centerPosition: LatLngTuple = [-3.769516294283572, -38.480243680943545]
  return (
    <div className="bg-white">
      <h1>Lojas proximas</h1>
      <MapContainer center={centerPosition} zoom={20} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((item) => (
          <Marker position={[item.lng || 0, item.lat || 0]} key={item._id}>
            <Popup>
              {item.name} <br />
              <a href={`/stores/${item._id}`}>Acesse aqui</a>.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Layout;
