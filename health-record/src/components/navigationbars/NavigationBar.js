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
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand> <img src="/photos/logo.png" style={logo} onClick= {() => window.location.href = "/" }/> </Navbar.Brand>

                    
                    {this.props.logged_in ?
                    <div>
                        <Nav className="float-right">
                       
                        <Nav.Item>
                            <Nav.Link href="/dhome" style={{color : "black", fontWeight : "bold"}}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/doctor_account" style={{color : "black", fontWeight : "bold"}}>My account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/doctor_patient" style={{color : "black", fontWeight : "bold"}}>Patients</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link onClick={() => this.props.signOut()} style={{color : "black", fontWeight : "bold"}}>Sign out</Nav.Link>
                        </Nav.Item>

                        </Nav>
                        {/* <Button variant="warning" style={btton} onClick={() => window.location.href = '/dtreat'}>Treatment </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="warning" style={btton} onClick={() => window.location.href = '/appointment'}>Calendar </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="warning" style={btton} onClick={() => this.props.signOut()}>Sign Out</Button> */}
                    </div>
                    
                     :
                     <div>
                     <Button variant="warning" style={btton} onClick={() => window.location.href = '/signin'}>Sign in </Button>
                     &nbsp;&nbsp;&nbsp;
                     <Button variant="warning" style={btton} onClick={() => window.location.href = '/signup'}>Sign Up</Button>
                     &nbsp;&nbsp;&nbsp;
                  </div>
                    }
                   
                    

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