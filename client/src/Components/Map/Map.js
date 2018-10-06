import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./Map.css";

const MapContainer = props => (
  // state = {
  //   center: {
  //     lat: 40.569325299999996,
  //     lng: -111.8943465
  //   },
  //   zoom: 15,
  //   showingInfoWindow: false,
  //   activeMarker: {},
  //   selectedPlace: {}
  // };

  // componentDidMount() {
  //   this.getLocation();
  // }

  // getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.showPosition);
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

  // showPosition = (position) => {
  //   this.setState({
  //     center: {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     }
  //   })
  //   var lat = position.coords.latitude;
  //   var long = position.coords.longitude
  //   console.log(lat);
  //   console.log(long);
  // }

  // onMarkerClick = (props, marker, e) => {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });
  // }

  // onMapClick = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // }

  <Map
    google={props.google}
    zoom={props.zoom}
    center={props.center}
    onClick={props.onMapClick}
    initialCenter={{
      //change to lat: props.lat, lng: props.long after presentation
      lat: 40.569359,
      lng: -111.89444519999999
    }}
  >
    <Marker
      onClick={props.onMarkerClick}
      //change to lat: props.center.lat, lng: props.center.lng after presentation
      position={{ lat: 40.569359, lng: -111.89444519999999 }}
    />
    <Marker />

    <InfoWindow marker={props.activeMarker} visible={props.showingInfoWindow}>
      <div>
        <h1>{"My Current Location"}</h1>
      </div>
    </InfoWindow>
  </Map>
);

export default GoogleApiWrapper({
  apiKey: "AIzaSyDnIJjSvcTsuJRKEa_iUCTnqwg6lZxiGbQ"
})(MapContainer);
