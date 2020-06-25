import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {col1, col2, col3, col4, col5} from '../css/SignUpCSS'
class SignUp extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    render() {
    
        return (
            <div style={{ textAlign: 'center' }}>
                <Container style={{ paddingTop: 50 }}>
                    <Row >
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <span class="material-icons" style={col1}>
                            how_to_reg
                            </span>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                            <h style={col2}>Sign Up</h>
                        </Col>
                        
                        <Col md={{ span: 6, offset: 3 }}>
                            <span class="material-icons" style={col3}>
                                face
                            </span>
                        </Col>
                        
                        <Col md={{ span: 3, offset: 3 }}>
                        <Form.Control placeholder="First name"/>
                        <br />
                        </Col>
                        
                        <Col md={{ span: 3 }}>
                        <Form.Control placeholder="Last name"/>
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
                            <br />
                            <Form.Control type="password" placeholder="Confirm password" />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5}>
                            <Button variant="warning" >Create account</Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default SignUp;