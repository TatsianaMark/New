import React from "react";
import { Map, TileLayer } from "react-leaflet";
import './Map.css';

class MapComponent extends React.Component {
  state = {
    lat: 56.702868,
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
      </Map>
    );
  }
}

export default MapComponent;