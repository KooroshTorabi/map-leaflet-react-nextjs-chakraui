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
// import "leaflet/dist/leaflet.css";
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
    lat: 40.17823848073122,
    lng: 44.505526364375804,
  });
  const [marker, setMarker] = useState({
    lat: 40.17823848073122,
    lng: 44.505526364375804,
  });
  const [zoom, setZoom] = useState(10);
  const [draggable, setDraggable] = useState(true);

  const markerPosition: any = [marker.lat, marker.lng];
  const refmarker = useRef(null);
  const toggleDraggable = () => {
    setDraggable(!draggable);
  };

  const updateMarker = (e: any) => {
    // const marker = e.marker;
    setMarker(e.marker.getLatLng());
    console.log(e.marker.getLatLng());
  };

  const updatePosition = () => {
    const marker: any = refmarker.current;
    if (marker != null) {
      setMarker(marker.leafletElement.getLatLng());
    }
    // console.log(marker.leafletElement.getLatLng());
  };

  return (
    <MapContainer
      //   center={[51.505, -0.09]}
      //   zoom={13}
      //   scrollWheelZoom={false}
      //   style={{ height: "100%" }} // Add a height
      style={{ height: "98vh", width: "100%" }}
      center={[40.17823848073122, 44.505526364375804]}
      zoom={13}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        {/* <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer> */}
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
                center={[40.17823848073122, 44.505526364375804]}
                pathOptions={{ color: "green", fillColor: "green" }}
                radius={100}
              />

              <Marker
                draggable={true}
                // onDragend={updatePosition}
                position={markerPosition}
                // animate={true}
                ref={refmarker}
              >
                <Popup minWidth={90}>
                  <span onClick={toggleDraggable}>
                    {draggable ? "Yerevan Blue Mosque" : "MARKER FIXED"}
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
              center={[40.17823848073122, 44.505526364375804]}
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
