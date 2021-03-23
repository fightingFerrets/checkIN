import React, { Component } from "react";
import Maps from "../../Components/Map";
import Nav from "../../Components/Nav";
import { Container, Col } from "../../Components/Parts";
import AddPeople from "../../Components/AddPeople";
import SendNow from "../../Components/SendNow";
import { auth } from "../../firebase";
import API from "../../Utils/API";
import "./CheckIn.css";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class CheckIn extends Component {
  state = {
    sendTo: {},
    receiver: "", //person in mongo db related with our user
    phoneNum: "",
    condition: "",
    mediaUrl: "",
    comment: "",
    userId: "",
    latitude: "",
    longitude: "",
    mongoId: "",

    center: {
      lat: 40.569325299999996,
      lng: -111.8943465
    },
    zoom: 18,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  showPosition = position => {
    this.setState({
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      zoom: 18
    });
    // var lat = position.coords.latitude;
    // var long = position.coords.longitude
    console.log(this.state.latitude);
    console.log(this.state.longitude);
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(event);
    // console.log(this.state.receiver)
    // console.log(this.state.userId)
    this.addMultiple(this.state.mongoId);
  };
  //function that adds a person to our mongo db and sends the mediaUrl
  addPersonAndSend = () => {};
  getReceivers = mongoId => {
    //api to call user model and populate all their friends
    //then set to state
    console.log(mongoId);
    API.getContacts(mongoId).then(res =>
      this.setState({
        sendTo: res.data
      })
    );
  };
  //function that adds a person to mongodb and refreshes the modal allowing a user to add another person to their check in

  addMultiple = () => {
    let mongoId = this.state.mongoId;
    console.log("addMultiple Func", mongoId);
    API.saveContact(mongoId, {
      sendTo: {
        receiver: this.state.receiver,
        phoneNum: this.state.phoneNum
      }
    }).then(res =>
      this.setState({
        sendTo: res.data
      })
    );
    this.getReceivers(mongoId);
  };

  //when the page loads this function will run//
  componentDidMount() {
    this.getLocation();

    auth.onAuthStateChanged(
      function(user) {
        // console.log(user);
        console.log(user.uid);
        console.log(user.displayName);
        console.log(user.email);

        if (user) {
          // User is signed in.
          //insert user into db the constarint will keep duplication from happening
          this.setState({
            userId: user.uid
          });
          console.log(user.uid);
          API.doesExist(user.uid).then(res => {
            this.setState({ mongoId: res.data.mongoId });
            console.log(res);
            if (res.data.exist === true) {
              API.getContacts(this.state.mongoId).then(res => {
                this.setState({
                  sendTo: res.data.sendTo
                });
              });
            } else {
              API.userLogIn({ userId: user.uid });
            }
          });

          //aftuser is in db call getReceivers
        } else {
          alert("error");
        }
      }.bind(this)
    );
  }
  //this function should send your mediaUrl location to
  handleSendSubmit = () => {
    this.setState({
      mediaUrl: `http//maps.google.com/?q=${this.state.latitude},${
        this.state.longitude
      }`
    });

    let phoneNum = this.state.phoneNum;
    let comment = this.state.comment;
    let condition = this.state.condition;
    let mediaUrl = `maps.google.com/?q=${this.state.latitude},${
      this.state.longitude
    }`;
    let messageBody = mediaUrl + " " + condition + " " + comment;
    let format_number = "+1" + phoneNum;
    const receiverData = {
      phoneNum,
      messageBody,
      format_number,
      mediaUrl
    };

    API.sendMessage(receiverData).then(res => {
      // const twiml = new MessagingResponse();
      // twiml.message("Thanks for signing up!")
      // res.end(twiml.toString())
      alert("message sent");
    });
  };

  //function that checks to see if a user is logged in before allowing them to view the check in page
  componentWillMount() {
    auth.onAuthStateChanged(function(user) {
      if (user) {
      } else {
        window.location.href = "/";
      }
    });
  }

  // addPersonAndSend = () => {
  //     console.log("click");
  // }

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <div className="buttonHolder">
            <Col size="md-12">
              <button
                value="getLocation"
                className="locationFinder"
                onClick={this.getLocation()}
              />

              <button
                value="add"
                className="button loginBtn"
                data-toggle="modal"
                data-target="#addModal"
              >
                Add People
              </button>

              <button
                value="sendNow"
                className="button aboutBtn"
                data-toggle="modal"
                data-target="#sendNowModal"
              >
                Check In
              </button>
            </Col>
          </div>
        </Container>

        <Maps
          // lat={this.state.lat}
          // lng={this.state.lng}
          google={this.state.google}
          center={this.state.center}
          onClick={this.onMapClick}
          zoom={this.state.zoom}
          onClick={this.onMarkerClick}
          // position={{ lat: this.state.center.lat, lng: this.state.center.lng }}
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
          onChange={this.handleInputChange}
          onClick={this.handleSendSubmit}
          receiver={this.state.receiver}
          phoneNum={this.state.phoneNum}
          status={this.state.condition}
          comment={this.state.comment}
        />
      </div>
    );
  }
}
export default CheckIn;
