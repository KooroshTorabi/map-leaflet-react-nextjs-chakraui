import { Component, createRef, useEffect, useState, useRef } from "react";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import MapInfo from "../MapInfo";
const center: any = [51.505, -0.09];
const rectangle: any = [
  [51.49, -0.08],
  [51.5, -0.06],
];
import * as L from "leaflet";

import MarkerIcon from "../../assets/images/glass-marker.png";
import markerShadowIcon from "../../assets/images/marker-shadow.png";
import fields from "../../consts/getdata.json";
import { Button } from "@chakra-ui/react";
function LayersControlExample() {
  const [color = "black"] = useState();
  const colors = ["green", "blue", "yellow", "orange", "grey"];
  useEffect(() => {
    console.log("LayersControlExample");
  }, []);
  const glassIcon = new L.Icon({
    iconUrl: MarkerIcon.src,
    iconSize: [26, 26],
    popupAnchor: [0, -15],
    shadowUrl: markerShadowIcon.src,
    shadowAnchor: [13, 28],
  });

  const onPointToLayer = (feature: any, latlng: any) => {
    return L.marker(latlng, {
      icon: glassIcon,
    });
  };

  const changeFieldColor = (event: any) => {
    // Tıklayınca olacak işlemler
    event.target.setStyle({
      fillColor: color, // Rengi
      color: "green", // Border rengi
      fillOpacity: 1, // Opaklığı
    });
  };
  const [center, setCenter] = useState({
    lat: 48.20849275540877, 
    lng: 16.373224764018673,
  });
  const [marker, setMarker] = useState({
    lat: 48.20849275540877, 
    lng: 16.373224764018673,
  });
  const initialMarkerPosition = {
    lat: 48.20849275540877, 
    lng: 16.373224764018673,
  };
  const [zoom, setZoom] = useState(10);
  const [draggable, setDraggable] = useState(true);

  const markerPosition: any = [marker.lat, marker.lng];
  const refmarker = useRef(null);
  
  const toggleDraggable = () => {
    if (draggable) {
      // When fixing position (draggable is currently true), reset to initial
      setMarker(initialMarkerPosition);
    }
    // Toggle draggable state
    setDraggable(!draggable);
  };

  const updateMarker = (e: any) => {
    // Update position when marker is dragged
    const newLatLng = e.target.getLatLng();
    setMarker({
      lat: newLatLng.lat,
      lng: newLatLng.lng,
    });
  };

  const updatePosition = () => {
    const marker: any = refmarker.current;
    if (marker != null) {
      setMarker(marker.leafletElement.getLatLng());
    }
  };

  return (
    <MapContainer
      style={{ height: "100vh", width: "100%" }}
      center={[48.20849275540877, 16.373224764018673]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={true}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright11111">kouroshtorabi</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle
              center={center}
              pathOptions={{ fillColor: "blue" }}
              radius={200}
            />
            <Circle
              center={center}
              pathOptions={{ fillColor: "red" }}
              radius={100}
              stroke={false}
            />
            <LayerGroup>
              <Circle
                center={[48.20849275540877, 16.373224764018673]}
                pathOptions={{ color: "green", fillColor: "green" }}
                radius={100}
              />
              <Marker
                draggable={draggable}
                eventHandlers={{ dragend: updateMarker }}
                position={markerPosition}
                ref={refmarker}
              >
                <Popup minWidth={90}>
                  <span onClick={toggleDraggable}>
                    {draggable ? "Stephans Dom" : "MARKER FIXED"} 
                    <br/> 
                    <Button colorScheme={draggable ? "red" : "green"}> 
                      Click to {" "} {draggable ? "fix" : "move"}
                    </Button>
                  </span>
                </Popup>
              </Marker>
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: "purple" }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle
              center={[48.20849275540877, 16.373224764018673]}
              radius={200}
            />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
      <MapInfo />
    </MapContainer>
  );
}
export default LayersControlExample;
