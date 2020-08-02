import React, {Component} from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import {logo, head, head1, head2, para, col1, col2} from '../css/PHomeCSS'
import {Link} from 'react-router-dom'
import {fetchUser} from '../store/actions/authenticationAction'
import {connect} from 'react-redux'
class DHome extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
        if (this.props.logged_in) {
            this.props.fetchUser()
        }
    }
    render() {

        console.log(this.props.userData)
        return (
            <div style={{textAlign : "center"}}>

    
                 {(this.props.logged_in) &&
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
                                <p style={para}>View treatments you are currently administering to patients.</p>
                                <Button variant="warning">View Treatments</Button>

                            
                            </Col>
        
                            <Col xs={12} sm={12} md={12} lg={{ span : 5, offset : 2}} xl={{ span : 5, offset : 2}}>
                                <span class="material-icons" style={col2}>
                                    event
                                </span>
                                <h2 style={head2}>Schedule</h2>
                                
                                <p style={para}>View your schedule, which includes appointments with patients and other events.</p>
                                <Link to="/appointment"> <Button variant="warning">View Schedule</Button> </Link>
                            </Col>
                        </Row>
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
        fetchUser : () => {dispatch(fetchUser())}
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.authentication.userData,
        logged_in : state.authentication.logged_in
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DHome);

