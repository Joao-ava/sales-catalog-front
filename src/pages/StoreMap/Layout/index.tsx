import React from "react";
import { LatLngTuple } from "leaflet";
import { Link } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';
import { Marker, Popup, TileLayer, MapContainer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Store from "../../../dtos/Store";
import './styles.css'

export interface StoreMapProps {
  stores: Store[]
}

const Layout: React.FC<StoreMapProps> = ({
  stores
}) => {
  const centerPosition: LatLngTuple = [-3.769516294283572, -38.480243680943545]
  return (
    <div className="bg-white w-100">
      <nav className="navbar navbar-dark bg-success">
        <div className="container-fluid">
            <Link to="/" className="btn btn-outline-light">
              <ChevronLeft />
            </Link>
            <span className="navbar-brand mx-auto">Lojas próximas</span>
        </div>
      </nav>
      <MapContainer center={centerPosition} zoom={20} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((item) => (
          <Marker position={[item.lng || 0, item.lat || 0]} key={item._id}>
            <Popup>
              {item.name} <br />
              <a href={`/stores/${item._id}/products`}>Acesse aqui</a>.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="container card-stores">
        <div className="card card-dropdown">
            <div className="card-header bg-success text-white">Lojas Próximas</div>
            <ul className="list-group list-group-flush">
              {stores.map((item) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={item._id}>
                  <p>{item.name} - {item.horario}</p>
                  <Link to={`/stores/${item._id}/products`}>Acesse aqui</Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Layout;
