import React, { Component } from "react";
import Maps from "../../Components/Map";
import Nav from "../../Components/Nav"
import { Container, Col } from "../../Components/Parts"
import AddPeople from "../../Components/AddPeople";
import SendNow from "../../Components/SendNow";
import { auth } from '../../firebase'
import API from "../../Utils/API";

class CheckIn extends Component {
    state = {
        sendTo: [],
        receiver: '', //person in mongo db related with our user
        phoneNum: '',
        condition: '',
        mediaUrl: '',
        comment: '',
        userId: '',
        lat: '',
        lng: ''
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
    componentDidMount() {
        // this.setState({
        //     lat:
        //         lng:
        // })
        auth.onAuthStateChanged(function (user) {
            console.log(user);
            console.log(user.uid);
            console.log(user.displayName)
            console.log(user.email)

            if (user) {
                // User is signed in.
                //insert user into db the constarint will keep duplication from happening
                let userId = this.state.userId

                API.userLogIn({ userId: user.uid }).then(res => this.getReceivers(userId)
                );
                this.setState({
                    userId: user.uid
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
    //         let lat = this.state.lat
    //         let lng = this.state.lng
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

    componentWillMount() {
        auth.onAuthStateChanged(function (user) {

            if (user) {
            } else {
                alert('You have not logged in. Please create an account or log in.')
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

                <Maps />

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