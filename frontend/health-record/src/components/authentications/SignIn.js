import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import {col1, col2, col3, col4, col5} from '../css/SignInCSS'
import {signIn} from '../store/actions/authenticationAction'
import { connect } from 'react-redux'
class SignIn extends Component {

    state = {
        email : '',
        password : '',
    }
    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    handleEmail = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    handleLogin () {
        this.props.signIn(this.state)
    }

    render() {
        console.log(this.state)
        console.log(localStorage)
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
                            <Form.Control id = "email" type="email" placeholder="Enter email" style={{ float: 'left' }} onChange={this.handleEmail} />
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <span class="material-icons" style={col4}>
                                vpn_key
                            </span>
                            <Form.Control id = "password" type="password" placeholder="Password" onChange={this.handlePassword} />
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5} onClick={() => this.handleLogin()}>
                            <Button variant="warning" >Login</Button>
                        </Col>
{/* 
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5}>
                            <Button variant="warning" >Login with Google+</Button>
                        </Col> */}
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5}>
                            <a style={{ fontSize: 20, color: 'white' }}>Forgot password? Reset it</a>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (userCredential) => dispatch(signIn(userCredential))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);