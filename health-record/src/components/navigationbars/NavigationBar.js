import React, {Component} from 'react'
import {Navbar, Button, NavDropdown, Nav, Form, FormControl} from 'react-bootstrap'
import {logo, header, btton} from '../css/NavigationBarCSS'
import {Link} from 'react-router-dom'
class NavigationBar extends Component {


    render() {
 
            return (
                <div>
                <Navbar expand="lg" style={{backgroundColor : "white"}}>
                <Link to='/'><img src="/photos/logo.png" style={logo}/></Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <h style={header}> Overview </h>
                    </Nav>
                    <Form inline>
                    
                    <Link to='/signin' ><Button variant="warning" style={btton}>Sign in </Button></Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to='/signup' ><Button variant="warning" style={btton}>Sign Up</Button></Link>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
                </div>
            )
        
       
    }
}

export default NavigationBar;