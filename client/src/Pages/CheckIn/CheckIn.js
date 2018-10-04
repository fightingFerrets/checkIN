import React, { Component } from "react";
import Maps from "../../Components/Map";
import Nav from "../../Components/Nav"
import { Container, Col } from "../../Components/Parts"
import AddPeople from "../../Components/AddPeople";
import SendNow from "../../Components/SendNow";
import { auth } from '../../firebase'
import API from "../../Utils/API";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class CheckIn extends Component {
    state = {
        sendTo: [],
        receiver: '', //person in mongo db related with our user
        phoneNum: '',
        condition: '',
        mediaUrl: '',
        comment: '',
        userId: '',
        latitude: '',
        longitude: '',

        center: {
            lat: 40.569325299999996,
            lng: -111.8943465
        },
        zoom: 15,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    showPosition = (position) => {
        this.setState({
            center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        // var lat = position.coords.latitude;
        // var long = position.coords.longitude
        console.log(this.state.latitude);
        console.log(this.state.longitude);
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event);
        console.log(this.state.receiver)
        console.log(this.state.userId)
        this.addMultiple(this.state.userId);
    }
    //function that adds a person to our mongo db and sends the mediaUrl
    addPersonAndSend = () => {
    }
    getReceivers = (userId) => {
        //api to call user model and populate all their friends
        //then set to state
        console.log(userId);
        API.getContacts(userId).then(res =>

            this.setState({
                sendTo: res.data
            }));
    }
    //function that adds a person to mongodb and refreshes the modal allowing a user to add another person to their check in
    addMultiple = (userId) => {
        API.saveContact(userId, {
            receiver: this.state.receiver,
            phoneNum: this.state.phoneNum,

        }).then(res =>
            this.setState({
                sendTo: res.data
            }));
        this.getReceivers(userId);
    }

    //when the page loads this function will run//
    componentDidMount() {
        this.getLocation();
        auth.onAuthStateChanged(function (user) {
            console.log(user);
            console.log(user.uid);
            console.log(user.displayName)
            console.log(user.email)


            if (user) {
                let userId = this.state.userId
                this.setState({
                    userId: user.uid,
                })

                API.getUser({ userId: user.uid }).then(res => {
                    if (!res) {
                        API.userLogIn({ userId: user.uid }).then(res => this.getReceivers(userId)
                        );
                    } else {
                        this.getReceivers(userId)
                    }
                })

                //aftuser is in db call getReceivers
            } else {
                // No user is signed in.
            }
        }.bind(this));
    }
    //this function should send your mediaUrl location to 
    // sendLocation = () => {
    //     const accountSid = 'AC6be3394fb63a85337897d91cf9eb4486';
    //     const authToken = '3d03f30b19b6db41f3d9f6af6fabd5ec';
    //     const MessagingResponse =
    //         require("twilio").twiml.MessagingResponse;
    //     const client = require('twilio')(accountSid, authToken);
    //     API.sendMessage({sendTo : }) {
    //         let phoneNum = req.body.phoneNum
    //         let receiver = req.body.receiver
    //         let lat = this.state.latitude
    //         let lng = this.state.longitude
    //         let comment = req.body.comment
    //         let status = req.body.condition
    //         let body = mediaUrl + comment + status
    //         let format_number = "+1" + phoneNum
    //         client.messages
    //             .create({ from: '+17024251086', body: body, to: format_number, mediaUrl: `http//maps.google.com/?q=${lat},${lng}` })
    //             .then(message => console.log(message.sid))
    //             .done();
    //         const twiml = new MessagingResponse();
    //         twiml.message("Thanks for signing up!");
    //         res.end(twiml.toString());
    //     };
    // }

    //function that checks to see if a user is logged in before allowing them to view the check in page
    componentWillMount() {
        auth.onAuthStateChanged(function (user) {

            if (user) {
            } else {
                window.location.href = '/';
            }
        });
    }

    addPersonAndSend = () => {
        console.log("click");
    }

    render() {
        return (
            <div>
                <Nav />
                <Container  >
                    <div className="buttonHolder" >
                        <Col size="md-12"
                            className="align-self-center buttonHolder">
                            <button
                                value="add"
                                className="button loginBtn"
                                data-toggle="modal"
                                data-target="#addModal">
                                Add People
                            </button>

                            <button
                                value="sendNow"
                                className="button aboutBtn"
                                data-toggle="modal"
                                data-target="#sendNowModal">
                                Check In
                            </button>
                        </Col>
                    </div>
                </Container>

                <Maps
                    lat={this.state.lat}
                    lng={this.state.lng}
                    google={this.state.google}
                    center={this.state.center}
                    onClick={this.onMapClick}
                    zoom={this.state.zoom}

                    onClick={this.onMarkerClick}
                    position={{ lat: this.state.center.lat, lng: this.state.center.lng }}

                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                />

                <AddPeople
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                    receiver={this.state.receiver}
                    phoneNum={this.state.phoneNum}
                    status={this.state.condition}
                    comment={this.state.comment}
                />

                <SendNow
                    // {this.state.sendTo.map(sendTo => {
                    //     return <div className="checkbox">
                    //         <label><input type="checkbox" value={this.state.sendTo} /></label>
                    //     </div>
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                    receiver={this.state.receiver}
                    phoneNum={this.state.phoneNum}
                    status={this.state.condition}
                    comment={this.state.comment}
                />

            </div>
        )
    }
}
export default CheckIn; 