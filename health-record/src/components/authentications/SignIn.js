import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {col1, col2, col3, col4, col5} from '../css/SignInCSS'
class SignIn extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    render() {
    
        return (
            <div style={{ textAlign: 'center' }}>
                <Container style={{ paddingTop: 50 }}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <span class="material-icons" style={col1}>
                                person
                            </span>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                            <h style={col2}>Login</h>
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <span class="material-icons" style={col3}>
                                email
                        </span>
                            <Form.Control type="email" placeholder="Enter email" style={{ float: 'left' }} />
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <span class="material-icons" style={col4}>
                                vpn_key
                            </span>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5}>
                            <Button variant="warning" >Login</Button>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5}>
                            <Button variant="warning" >Login with Google+</Button>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5}>
                            <a style={{ fontSize: 20, color: 'white' }}>Forgot password? Reset it</a>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default SignIn;