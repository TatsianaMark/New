import React from "react";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import './Map.css';



// const myIcon = L.icon({
//     iconUrl: 'pin-black.png',
//     iconSize: [38, 95],
//     iconAnchor: [22, 94],
//     popupAnchor: [-3, -76],
//     shadowUrl: 'my-icon-shadow.png',
//     shadowSize: [68, 95],
//     shadowAnchor: [22, 94]
// });
// L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
  state = {
    lat: 55.702868,
    lng: 37.530865,
    zoom: 10
  };

  render() {
      const center = [this.state.lat, this.state.lng];

      return (
      <Map zoom={this.state.zoom} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>data about subject</Popup>
        </Marker>
      </Map>
    );
  }
};

export default MapComponent;