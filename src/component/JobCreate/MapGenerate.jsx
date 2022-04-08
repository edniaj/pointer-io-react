import React, { Component } from 'react'
import L from 'leaflet'
import * as ELG from 'esri-leaflet-geocoder'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css'
import 'leaflet/dist/leaflet.js'
import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.js'

import './Map.css'
import { FormControl, OutlinedInput } from '@mui/material'
import { Co2Sharp } from '@mui/icons-material'
import { FormLabel } from '@mui/material'

// import marker icons
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png'
})

class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.value.location.lat,
      longitude: this.props.value.location.lng,
      emptyList: Object.keys(this.props.value.location).includes('0'), // Check if MapComp receive props
      formEdited: false
    }
    const changeEditState = (value) => {
      this.setState(
        {
          ...this.state,
          formEdited: value
        }
      )
    }
  }



  componentDidMount() {

    const map = this.leafletMap.leafletElement
    const searchControl = new ELG.Geosearch().addTo(map)
    const results = new L.LayerGroup().addTo(map)
    const { setLocation } = this.props.value
    const center = this.state.emptyList ? [37.7833, -122.4167] : [this.state.latitude, this.state.longitude]
    results.addLayer(L.marker(center))
    console.log(this.state.formEdited)
    searchControl.on('results', function (data) {
      results.clearLayers()
      for (let i = data.results.length - 1; i >= 0; i--) {
        setLocation(data.results[i].latlng)
        results.addLayer(L.marker(data.results[i].latlng))
      }
    })
  }

  render() {
    const center = this.state.emptyList ? [37.7833, -122.4167] : [this.state.latitude, this.state.longitude]

    return (
      <>
        <FormControl
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            minWidth: 700
          }}
        >
          <FormLabel>Location</FormLabel>
          <OutlinedInput
            id='outlined-read-only-input'
            label='Location'
            name='location'
            color='primary'
            placeholder='Please mark location on the map by clicking on the magnifying glass'
            disabled
          ></OutlinedInput>
        </FormControl>
        <Map
          style={{ height: '50vh' }}
          center={center}
          zoom="15"
          ref={m => {
            this.leafletMap = m
          }}
        >
          <TileLayer
            url={
              'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
            }
            id={'mapbox/streets-v11'}
            accessToken={
              'pk.eyJ1IjoidGFuYWhnYW8iLCJhIjoiY2wxa2Jtdmk1MHY5NTNqcnA5cWw5b2FraiJ9.HRQ8_J8mk3OLQ3umXKSuRA'
            }
          />
          <div className='pointer' />
        </Map>
      </>
    )
  }
}

//accessToken={'pk.eyJ1IjoidGFuYWhnYW8iLCJhIjoiY2wxa2Jtdmk1MHY5NTNqcnA5cWw5b2FraiJ9.HRQ8_J8mk3OLQ3umXKSuRA'}
export default MapComp
