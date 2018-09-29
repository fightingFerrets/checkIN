import React, { Component } from "react";
import Maps from "../../Components/Map";
import Nav from "../../Components/Nav"
import { Container, Row, Col, Button } from "../../Components/Parts"
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
        userId: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.getReceivers();

    }

    //function that adds a person to our mongo db and sends the mediaUrl
    // addPersonAndSend = () => {

    // }

    getReceivers = (userId) => {
        //api to call user model and populate all their friends
        //then set to state
        API.getContacts(userId).then(res =>
            this.setState({
                sendTo: res.data
            }));
    }

    //function that adds a person to mongodb and refreshes the modal allowing a user to add another person to their check in
    addMultiple = (userId) => {
        const sendTo = {
            receiver: this.receiver,
            phoneNum: this.phoneNum,
            condition: this.condition,
            comment: this.comment
        }
        API.saveContact(userId, sendTo).then(res => {
            this.getReceivers();
        })

    }

    componentDidMount() {
        auth.onAuthStateChanged(function (user) {
            console.log(user);
            console.log(user.displayName)
            console.log(user.email)

            if (user) {
                // User is signed in.
                //insert user into db the constarint will keep duplication from happening
                API.userLogIn(user.uid).then(res => this.getReceivers());
                this.setState({
                    userId: user.uid
                })
                //aftuser is in db call getReceivers

            } else {
                // No user is signed in.
            }
        });
    }

    // //this function should send your mediaUrl location to 
    // sendLocation = () => {
    //     const MessagingResponse =
    //         require("twilio").twiml.MessagingResponse;
    //     const client = require('twilio')(accountSid, authToken);


    //     app.post("/sms", (req, res) => {

    //         phoneNum = req.body.phoneNum;
    //         receiver = req.body.receiver;
    //         mediaUrl = req.body.mediaUrl;
    //         format_number = "+1" + phoneNum;


    //         client.messages
    //             .create({ from: '+17024251086', body: 'body', to: format_number, mediaUrl: `http//maps.google.com/?q=${lat},${lng}` })
    //             .then(message => console.log(message.sid))
    //             .done();

    //         const twiml = new MessagingResponse();
    //         twiml.message("Thanks for signing up!");
    //         res.end(twiml.toString());
    //     });

    // }

    addPersonAndSend = () => {
        console.log("click");
    }


    render() {
        return (

            <div>
                <Nav />
                <Container  >
                    <Row className="buttonHolder" >
                        <Col size="md-12"
                            className="align-self-center buttonHolder">
                            <button
                                onClick={() => this.addPersonAndSend}
                                value="add"
                                className="button loginBtn"
                                data-toggle="modal"
                                data-target="#addModal"

                            >Add People</button>
                            <button
                                onClick={() => this.checkIn}
                                value="sendNow"
                                className="button aboutBtn"
                                data-toggle="modal"
                                data-target="#sendNowModal"

                            >Check In</button>
                        </Col>
                    </Row>
                </Container>
                <Maps />
                <AddPeople
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    receiver={this.receiver}
                    phoneNum={this.phoneNum}
                    condition={this.condition}
                    comment={this.comment}
                />
                <SendNow />
            </div>

        )
    }
}
export default CheckIn; 