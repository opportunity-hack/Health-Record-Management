import React, {Component} from 'react'
import {Navbar, Button, NavDropdown, Nav, Form, FormControl} from 'react-bootstrap'
import {logo, header, btton} from '../css/NavigationBarCSS'
import {Link} from 'react-router-dom'
import { signOut, fetchUser } from '../store/actions/authenticationAction'
import {connect} from 'react-redux'

class NavigationBar extends Component {

    componentDidMount = () => {
        if (this.props.logged_in) {
            this.props.fetchUser()
        }
    }
    render() {
            console.log(this.props.userData)
            

            return (
                <div>
                <Navbar expand="lg" style={{backgroundColor : "white"}}>
                <img src="/photos/logo.png" style={logo} onClick= {() => window.location.href = "/" }/>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {this.props.logged_in ? 
                    <Nav className="mr-auto">
                        <h style={header}> Hi, {this.props.userData.first_name}</h>
                    </Nav>
                    :
                    <Nav className="mr-auto">
                        <h style={header}> Overview </h>
                    </Nav>
                    }
                    
                    <Form inline>
                    
                    {this.props.logged_in ?
                    <div>
                        <Button variant="warning" style={btton} onClick={() => window.location.href = '/dtreat'}>Treatment </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="warning" style={btton} onClick={() => window.location.href = '/appointment'}>Calendar </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="warning" style={btton} onClick={() => this.props.signOut()}>Sign Out</Button>
                    </div>
                    
                     :
                     <div>
                     <Button variant="warning" style={btton} onClick={() => window.location.href = '/signin'}>Sign in </Button>
                     &nbsp;&nbsp;&nbsp;
                     <Button variant="warning" style={btton} onClick={() => window.location.href = '/signup'}>Sign Up</Button>
                     &nbsp;&nbsp;&nbsp;
                  </div>
                    }
                   
                    
                    </Form>
                </Navbar.Collapse>
                </Navbar>
                </div>
            )
        
       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => {dispatch(signOut())},
        fetchUser : () => {dispatch(fetchUser())}
    }
}

const mapStateToProps = (state) => {
   return {
       logged_in : state.authentication.logged_in,
       userData : state.authentication.userData
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);