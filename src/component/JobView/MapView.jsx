import React, { useRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapView.css';
import 'leaflet/dist/leaflet.css';
import { Typography } from '@mui/material';
import DirectionsIcon from '@mui/icons-material/Directions';

function MapView(props) {
    const defaultCenter = props.location;
    const defaultZoom = 15;
    return (
        <div className="App" sx={{width:"100%"}}>
            <Map center={defaultCenter} zoom={defaultZoom} marker={defaultCenter}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
                <Marker position={defaultCenter} >
                    <Popup>
                        <a target="blank" href={`https://maps.google.com/?q=${defaultCenter['lat']},${defaultCenter['lng']}`}>
                            <Typography variant="h6">
                                Click me for direction
                                <DirectionsIcon></DirectionsIcon>
                            </Typography>
                        </a>
                    </Popup>
                </Marker>
            </Map>

        </div>
    );
}

export default MapView;
