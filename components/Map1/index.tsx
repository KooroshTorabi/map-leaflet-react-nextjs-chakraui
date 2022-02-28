import React from "react";
import styled from "@emotion/styled";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DraggableMarker from "../DraggableMarker";

const Leaflet = styled.div`
  height: 500px;
  width: 500px;
`;

const Map1 = () => {
  return (
    <Leaflet>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <DraggableMarker />
      </MapContainer>
    </Leaflet>
  );
};

export default Map1;
