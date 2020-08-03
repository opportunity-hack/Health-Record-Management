import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchUser, fetchUserAppointment, scheduleAppt} from '../store/actions/authenticationAction'
class ChatBox extends Component {
    state = {
        Date_appt: '',
        Time: '',
        weeklyAppointment: '',
        resetAppointment: false,
        loading: false,
        loadingWeekly: false,
        loadingDate: false,
        hasDoctor: true,
        id : '',
        phone_number : ''
    }
    async handleDate(time, date, uid, fname, pnumber) {

        this.setState({ 
                    Date_appt: date,
                    Time : time,
                    id : uid,
                    phone_number : pnumber,
                    first_name : fname
        })
    }
    async handleTime(t) {
        await this.setState({ Time: t })
    }
    async handleDelay() {
        await this.setState({ loading: true })
        await setTimeout(() => {
            this.setState({ loading: false })
            this.setState({ loadingWeekly: true })
        }, 3000)
    }
    async handleDelay1() {

        await setTimeout(() => {
            this.setState({ loadingDate: true })
            this.props.fetchUserAppointment(this.state)
        }, 3000)
    }

    componentDidMount = () => {
        this.handleDelay()
        this.props.fetchUser()
    }
    async handleReset() {
        this.setState({
            Date_appt: "",
            Time: ""
        })
    }
    render() {
            const userData = this.props.userData
            console.log(this.state)
        return (
            <div style={{ width: "400px", height: "550px", backgroundColor: "white", borderRadius: 20 }}>
                <div style={{ width: "100%", height: "50px", backgroundColor: "#f0ad4e", borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                    <img src='/icons8-bot-100.png' style={{ width: 40, height: 40, marginRight: 20 }} />
                    <h>EHR Appointment Chat Bot</h>

                </div>
                <div style={{ backgroundColor: "white", width: "100%", height: "410px" }}>
                    {!this.state.hasDoctor ?
                        <div style={{ width: "90%", marginLeft: 5, marginTop: 5, borderRadius: 10 }}>
                            <div style={{ width: "20%", display: "inline-block" }}>
                                <img src='/icons8-bot-100.png' style={{ width: 40, height: 40, marginBottom: 15 }} />
                            </div>
                            <div style={{ width: "80%", display: "inline-block" }}>
                                <p style={{ backgroundColor: "#f0ad4e", borderRadius: 10 }} >You have no appointed doctor, please contact us at 888 888 9999 to schedule your first appointment</p>
                            </div>
                        </div>
                        :
                        <div>
                            <div style={{ width: "90%", marginLeft: 5, marginTop: 5, borderRadius: 10 }}>
                                <div style={{ width: "20%", display: "inline-block" }}>
                                    <img src='/icons8-bot-100.png' style={{ width: 40, height: 40, marginBottom: 15 }} />
                                </div>
                                <div style={{ width: "80%", display: "inline-block" }}>
                                    {this.props.userData.first_name ? 
                                         <p style={{ backgroundColor: "#f0ad4e", borderRadius: 10 }} >
                                         Hi {this.props.userData.first_name}, What day would you like to come in?
                                         <br/>
                                         Assigned Doctor: {this.props.apptData.Doctor_first_name} {this.props.apptData.Doctor_last_name}
                                         </p>
                                    :
                                    <div style={{ width: "90%", marginLeft: 5, marginTop: 5, borderRadius: 10 }}>
                                        <div style={{ width: "100%" }}>
                                            <Spinner animation="grow" variant="warning" size="sm" />
                                            <Spinner animation="grow" variant="warning" size="sm" />
                                            <Spinner animation="grow" variant="warning" size="sm" />
                                            <Spinner animation="grow" variant="warning" size="sm" />
                                        </div>
                                    </div>
                                    }
                                    
                                </div>
                            </div>
                            {this.state.loadingWeekly &&
                                <div style={{ width: "90%", marginLeft: 5, marginTop: 5, borderRadius: 10 }}>

                                    {this.props.apptData.Doctor_avail && Object.keys(this.props.apptData.Doctor_avail).map((item, i) => {
                                           
                                        return (
                                            <div>
                                                
                                                <p style={{ backgroundColor: "#f0ad4e", borderRadius: 10, marginTop : 5 }} >{item}</p>
                                                {this.props.apptData.Doctor_avail[item].map(e => {
                                                    return (                                                
                                                        <Button variant="warning" style={{ marginRight: 2 }} onClick={() => { this.handleDate(e, item, userData.id, userData.first_name, userData.phone_number); this.handleDelay1(); }}>{e}</Button>
                                                    )
                                                })}
                                            </div>
                                        )
                                       
                                    })}
                                </div>
                            }

                            {this.state.Date_appt && (this.state.loadingDate == false) &&
                                <div style={{ width: "90%", marginLeft: 5, marginTop: 5, borderRadius: 10 }}>
                                    <div style={{ width: "100%" }}>
                                        <Spinner animation="grow" variant="warning" size="sm" />
                                        <Spinner animation="grow" variant="warning" size="sm" />
                                        <Spinner animation="grow" variant="warning" size="sm" />
                                        <Spinner animation="grow" variant="warning" size="sm" />
                                    </div>
                                </div>
                            }

                            {this.state.Date_appt && this.state.loadingDate &&
                                <div style={{ width: "90%", marginLeft: 5, marginTop: 5, borderRadius: 10 }}>
                                    <div style={{ width: "20%", display: "inline-block" }}>
                                        <img src='/icons8-bot-100.png' style={{ width: 40, height: 40, marginBottom: 15 }} />
                                    </div>
                                    <div style={{ marginTop: 5, backgroundColor: "#f0ad4e", width: "80%", display: "inline-block", borderRadius: 10 }}>
                                
                                        <p>Summary of your appointment </p>
                                        <p> You have scheduled for {this.state.Date_appt} at {this.state.Time}</p>
                                    </div>
                                    
                                </div>
                            }



                        </div>
                    }
                </div>
                <div style={{ width: "100%", height: "90px"}}>
                    <Button onClick={() => this.handleReset()} variant="danger" style={{ float: "right", marginRight: 5 }}>
                        <h style={{ float: "right", marginRight: 5 }}>Start over?</h>
                        <span style={{ float: "right", marginRight: 5 }} class="material-icons">
                            autorenew
                                    </span>
                    </Button>
                </div>

                {/* <div style={{ width: "100%", height: "40px" }}>
                    <Button onClick={() => this.handleReset()} variant="danger" style={{ float: "right", marginRight: 5 }}>
                        <h style={{ float: "right", marginRight: 5 }}>Start over?</h>
                        <span style={{ float: "right", marginRight: 5 }} class="material-icons">
                            autorenew
                                    </span>
                    </Button>
                </div>
                <div style={{ backgroundColor: "#f0ad4e", width: "100%", height: "50px" }}>
                    <div>
                        <Button style={{ marginLeft: 5, float: "left", display: "inline-block" }}>
                            <span class="material-icons">
                                arrow_back
                                            </span>
                        </Button>
                    </div>
                    <div style={{ float: "center", display: "inline-block" }}>
                        <h style={{ fontSize: 15, fontWeight: "bold" }}> Week 9/15 - 9/22</h>
                    </div>
                    <div style={{ marginRight: 5, float: "right", display: "inline-block" }}>
                        <Button>
                            <span class="material-icons">
                                arrow_forward
                                            </span>
                        </Button>
                    </div>
                </div> */}
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser : () => {dispatch(fetchUser())},
        fetchUserAppointment : () => dispatch(fetchUserAppointment()),
        scheduleAppt : (appt_detail) => dispatch(scheduleAppt(appt_detail))
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.authentication.userData,
        logged_in : state.authentication.logged_in,
        apptData : state.authentication.apptData
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);

