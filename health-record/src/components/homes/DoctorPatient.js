import React, {Component} from 'react'
import {Container, Col, Row, Button, Table} from 'react-bootstrap'
import {logo, head, head1, head2, para, col1, col2} from '../css/PHomeCSS'
import {Link} from 'react-router-dom'
import {fetchUser} from '../store/actions/authenticationAction'
import {connect} from 'react-redux'
class DoctorPatient extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
        if (this.props.logged_in) {
            this.props.fetchUser()
        }
    }
    render() {

        console.log(this.props.userData)
        console.log("hello")
        return (
            <div style={{textAlign : "center",  marginTop : 20}}>

    
                 {(this.props.logged_in) &&
                <div>
                    <h1 style={head1}>My patients</h1>
                    <Container style={{marginTop : 75}}>
                    <Table striped bordered hover style={{color : "white"}}>
                        <thead>
                            <tr>
                            <th>Fullname</th>
                            <th>Gender</th>
                            <th>Date of birth</th>
                            <th>Treatment</th>
                            <th>Profile</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            <th></th>
                            <th> </th>
                            <th>{this.props.userData.birth_date}</th>
                            <th></th>
                            <th></th>
                            <th><Button variant = "warning">Unassign</Button></th>
                            </tr>
                        </thead>

                        </Table>
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
export default connect(mapStateToProps, mapDispatchToProps)(DoctorPatient);

