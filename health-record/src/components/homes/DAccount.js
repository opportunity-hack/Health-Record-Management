import React, {Component} from 'react'
import {Container, Col, Row, Button, Table} from 'react-bootstrap'
import {logo, head, head1, head2, para, col1, col2} from '../css/PHomeCSS'
import {Link} from 'react-router-dom'
import {fetchUser} from '../store/actions/authenticationAction'
import {connect} from 'react-redux'
class DAccount extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
        if (this.props.logged_in) {
            this.props.fetchUser()
        }
    }
    render() {

        console.log(this.props.userData)
        return (
            <div style={{textAlign : "center", marginTop : 20}}>

    
                 {(this.props.logged_in) &&
                <div>
                    <h1 style={head1}>Hi, Doctor {this.props.userData.first_name}</h1>
                    <Container style={{marginTop : 75}}>
                    <Table striped bordered hover style={{color : "white"}}>
                        <thead>
                            <tr>
                            <th>Fullname</th>
                            <th>{this.props.userData.first_name} {this.props.userData.last_name}</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            <th>Email</th>
                            <th>{this.props.userData.email} </th>
                            </tr>
                            <tr>
                            <th>Phone number</th>
                            <th>{this.props.userData.phone_number} </th>
                            </tr>
                        </thead>

                        </Table>
                        <Button variant="warning">Edit your profile</Button>
                    </Container> 
                </div>

                }

                {(this.props.userData.is_admin === false) && <div> {window.location.href="/"} </div>}   
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser : () => {dispatch(fetchUser())},
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.authentication.userData,
        logged_in : state.authentication.logged_in
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DAccount);

