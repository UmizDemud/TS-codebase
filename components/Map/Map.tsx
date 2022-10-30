import {
  MapContainer,
  Marker,
  Popup,
  TileLayer
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({
  lastPosition
}: {
  lastPosition: [number, number];
}) => {

  return (
    <>
      <MapContainer
        center={lastPosition}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={lastPosition} draggable={true}>
        <Popup>I work here, come over for a cup of coffee.</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;