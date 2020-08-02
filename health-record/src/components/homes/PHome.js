import React, {Component} from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import {logo, head, head1, head2, para, col1, col2} from '../css/PHomeCSS'
import {Link} from 'react-router-dom'
import {fetchUser} from '../store/actions/authenticationAction'
import {connect} from 'react-redux'
class PHome extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    render() {
        return (
            <div style={{textAlign : "center"}}>

                {this.props.logged_in ? 
                <div>
                    <h style={head}>WELCOME TO MEDCARE</h>
                    <h1 style={head1}>EHR platform that adapts to your needs</h1>
                    <Container style={{marginTop : 75}}>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                                <span class="material-icons" style={col1}>
                                    healing
                                </span>
                                <h2 style={head2}>Treatments</h2>
                                <p style={para}>View all treatments you are currently undergoing or have been through.</p>
                                <Button variant="warning">View Treatments</Button>

                            
                            </Col>
        
                            <Col xs={12} sm={12} md={12} lg={{ span : 5, offset : 2}} xl={{ span : 5, offset : 2}}>
                                <span class="material-icons" style={col2}>
                                    event
                                </span>
                                <h2 style={head2}>Appointments</h2>
                                
                                <p style={para}>View past appointments, and schedule new appointments with your doctor or therapist.</p>
                                <Link to="/appointment"> <Button variant="warning">View Appointments</Button> </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                :
                <h style={head}>You are not logged in, please login.</h>
                }
                
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser : () => {dispatch(fetchUser())}
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.authentication.userData,
        logged_in : state.authentication.logged_in
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PHome);
