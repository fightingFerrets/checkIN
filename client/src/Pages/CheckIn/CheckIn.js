import React, { Component } from "react";
import Maps from "../../Components/Map";
import Nav from "../../Components/Nav"
import { Container, Row, Col, Button } from "../../Components/Parts"

class CheckIn extends Component {
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