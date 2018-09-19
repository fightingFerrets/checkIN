import React, { Component } from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={20}>

        {/* <Marker name={'Your position'}
          position={{ lat: 37.762391, lng: -122.439192 }}
          icon={{
            url: "/path/to/custom_icon.png",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          }} /> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDnIJjSvcTsuJRKEa_iUCTnqwg6lZxiGbQ"
})(MapContainer)

// < !DOCTYPE html >
//   <html>
//     <head>
//       <title>Geolocation</title>
//       <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
//         <meta charset="utf-8">
//           <style>
//             /* Always set the map height explicitly to define the size of the div
//              * element that contains the map. */
//             #map {
//               height: 100%;
//           }
//           /* Optional: Makes the sample page fill the window. */
//       html, body {
//               height: 100%;
//             margin: 0;
//             padding: 0;
//           }
//     </style>
//   </head>
//         <body>
//           <div id="map"></div>
//           <script>
//             // Note: This example requires that you consent to location sharing when
//             // prompted by your browser. If you see the error "The Geolocation service
//             // failed.", it means you probably did not give permission for the browser to
//             // locate you.
//             var map, infoWindow;
//       function initMap() {
//               map = new google.maps.Map(document.getElementById('map'), {
//                 center: { lat: -34.397, lng: 150.644 },
//                 zoom: 6
//               });
//             infoWindow = new google.maps.InfoWindow;

//             // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//               navigator.geolocation.getCurrentPosition(function (position) {
//                 var pos = {
//                   lat: position.coords.latitude,
//                   lng: position.coords.longitude
//                 };

//                 infoWindow.setPosition(pos);
//                 infoWindow.setContent('Location found.');
//                 infoWindow.open(map);
//                 map.setCenter(pos);
//               }, function () {
//                 handleLocationError(true, infoWindow, map.getCenter());
//               });
//             } else {
//               // Browser doesn't support Geolocation
//               handleLocationError(false, infoWindow, map.getCenter());
//             }
//           }

//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//               infoWindow.setPosition(pos);
//             infoWindow.setContent(browserHasGeolocation ?
//                                   'Error: The Geolocation service failed.' :
//                                   'Error: Your browser doesn\'t support geolocation.');
//             infoWindow.open(map);
//           }
//     </script>
//           <script async defer
//             src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnIJjSvcTsuJRKEa_iUCTnqwg6lZxiGbQ&callback=initMap">
//           </script>
//         </body>
// </html>


