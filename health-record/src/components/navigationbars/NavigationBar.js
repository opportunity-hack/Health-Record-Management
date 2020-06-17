import React, {Component} from 'react'
import {Navbar, Button, NavDropdown, Nav, Form, FormControl} from 'react-bootstrap'
import {logo, header, btton} from '../css/NavigationBarCSS'
class NavigationBar extends Component {


    render() {
        return (
            <div>
            <Navbar bg="white" expand="lg" style={{backgroundColor : "red"}}>
            <img src="/photos/MEDCARE.png" style={logo}/>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <h style={header}> Overview </h>
                </Nav>
                <Form inline>
                <Button variant="warning" style={btton}>Sign in </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="warning" style={btton}>Sign Up</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default NavigationBar;