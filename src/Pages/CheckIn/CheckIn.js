import React, { Component } from "react";
import Maps from "../../Components/Map";
import Nav from "../../Components/Nav"
import { Container, Row, Col, Button } from "../../Components/Parts"
import AddPeople from "../../Components/AddPeople";
import SendNow from "../../Components/SendNow";
import "./CheckIn.css";

class CheckIn extends Component {
    state = {
        receiver: [],
        phoneNum: [],
        status: [],
        mediaUrl: '',
        comment: []

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
                <AddPeople />
                <SendNow />
            </div>

        )
    }
}
export default CheckIn; 