import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer, MapContainer } from "react-leaflet";

// Credits to : https://codesandbox.io/s/2wy7v2orwr?file=/src/Map.css 

// import marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});

class MapComp extends Component {
  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      results.clearLayers();
      console.log(data)
      console.log(data['latlng'])
      console.log(data['text'])
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
      }
    });
  }

  render() {
    const center = [37.7833, -122.4167];
    return (
        <>
        
      <Map
        style={{ height: "50vh", width:"50vw" }}
        center={center}
        zoom="10"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          url={"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"}
          id= {'mapbox/streets-v11'}
          accessToken= {'pk.eyJ1IjoidGFuYWhnYW8iLCJhIjoiY2wxa2Jtdmk1MHY5NTNqcnA5cWw5b2FraiJ9.HRQ8_J8mk3OLQ3umXKSuRA'}
        />
      
        <div className="pointer" />
      </Map>
      </>
    );
  }
}

export default MapComp;