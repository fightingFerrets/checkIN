import React, { Component } from "react";
import Maps from "../../Components/Map";
import Nav from "../../Components/Nav"
import { Container, Row, Col, Button } from "../../Components/Parts"

class CheckIn extends Component {

    state = {
        phoneNum =[],
        receiver =[],
        mediaUrl,

    }

    sendLocation = () => {
        const MessagingResponse =
            require("twilio").twiml.MessagingResponse;
        const client = require('twilio')(accountSid, authToken);


        app.post("/sms", (req, res) => {

            phoneNum = req.body.phoneNum;
            receiver = req.body.receiver;
            mediaUrl = req.body.mediaUrl;
            format_number = "+1" + phoneNum;


            client.messages
                .create({ from: '+17024251086', body: 'body', to: format_number, mediaUrl: `http//maps.google.com/?q=${lat},${lng}` })
                .then(message => console.log(message.sid))
                .done();

            const twiml = new MessagingResponse();
            twiml.message("Thanks for signing up!");
            res.end(twiml.toString());
        });

    }
    render() {


        return (

            <div>
                <Nav />
                <Container>
                    <Row>
                        <Col size="md-12"
                            className="align-self-center">
                            <Button
                                //clickfunction
                                value="CheckIn"
                                className="d-block"
                                onClick={this.props.sendLocation}
                            >Send Check In</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Maps />
                    </Row>
                </Container>
            </div>

        )
    }
}


export default CheckIn; 