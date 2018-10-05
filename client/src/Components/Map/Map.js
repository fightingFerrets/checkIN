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
    zoom={18}
    center={props.center}
    onClick={props.onMapClick}
  >
    <Marker
      onClick={props.onMarkerClick}
      position={{ lat: props.center.lat, lng: props.center.lng }}
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
