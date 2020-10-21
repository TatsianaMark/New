import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./data/churches.json";
import "./App.css";
// import 'node_modules/leaflet-geosearch/dist/geosearch.css';
// import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
//
// const provider = new OpenStreetMapProvider();



export const icon = new Icon({
    iconUrl: "/pin-black.png",
    iconSize: [25, 25]
});



export default function App() {
    const [activeChurch, setActiveChurch] = React.useState(null);

    // const search = new GeoSearch.GeoSearchControl({
    //     provider: new GeoSearch.OpenStreetMapProvider(),
    // });


    return (

        <Map center={[40.712776,-74.005974]} zoom={12}>



            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {parkData.features.map(church => (
                <Marker
                    key={church.properties.resultID}
                    position={[
                        church.geometry.coordinates[1],
                        church.geometry.coordinates[0]
                    ]}
                    onClick={() => {
                        setActiveChurch(church);
                    }}
                    icon={icon}
                />
            ))}

            {activeChurch && (
                <Popup
                    position={[
                        activeChurch.geometry.coordinates[1],
                        activeChurch.geometry.coordinates[0]
                    ]}
                    onClose={() => {
                        setActiveChurch(null);
                    }}
                >
                    <div>
                        <h2>{activeChurch.properties.church_address_city_name}</h2>
                        <p>{activeChurch.properties.church_address_providence_name}<br/>
                            {activeChurch.properties.church_address_street_address}<br/>
                            {activeChurch.properties.church_address_postal_code}<br/>
                            {activeChurch.properties.phone_number}<br/>
                            {activeChurch.properties.url}<br/>
                        </p>
                    </div>
                </Popup>
            )}
        </Map>


    );
}
