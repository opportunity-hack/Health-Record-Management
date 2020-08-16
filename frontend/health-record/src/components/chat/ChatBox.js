import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import moment from 'moment'
import { connect } from 'react-redux'
import {doctor} from '../helper/Doctor'
import { header1, header2, header4, header5, header6, header7, EHR, botLogo, botLogo1, header3, summary } from '../css/ChatBoxCSS'
import { fetchUser, fetchUserAppointment, scheduleAppt, fetchUserCurrentAppointment } from '../store/actions/authenticationAction'

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
        id: '',
        phone_number: '',
        first_name : '',
        currentAppt: [],
        ad : {}
    }

    // Date_appt: date,
    //         Time: time,
    //         id: uid,
    //         phone_number: pnumber,
    //         first_name: fname
    async handleDate(time, date, uid, fname, pnumber) {
        console.log(time + date + uid + fname + pnumber)
        const appointment_details = {
            id: uid, 
            first_name: fname, 
            phone_number: pnumber, 
            Date_appt: date, 
            Time: time
          }
       
        this.setState({
            Date_appt: date,
            Time: time,
            id: 1,
            phone_number: pnumber,
            first_name: "john",
            ad : appointment_details
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
            this.props.scheduleAppt(this.state.ad)
            console.log(this.state.ad)
        }, 3000)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.userData.id !== this.props.userData.id) {
          this.updateCalendar();
        }
      }
   
      updateCalendar() {
        this.props.fetchUserCurrentAppointment(this.props.userData.id)
        this.props.getDoctorData(this.props.userData.id)
      }

    componentDidMount = () => {
        this.handleDelay()
        this.props.fetchUserAppointment()
        this.props.fetchUserCurrentAppointment(this.props.userData.id)
    }
    async handleReset() {
        this.setState({
            Date_appt: "",
            Time: ""
        })
    }

    render() {
        const userData = this.props.userData
        console.log(this.props.doctor_time)
        if (this.props.doctor_date) {
            this.props.doctor_date.map((i, index) => {
                 console.log(i[0])
                i.map(e => {
                    if (e.time) {
                        console.log(e.time)
                    }
                })
            })
        }
        const currentApptData = this.props.currentApptData
        console.log(currentApptData)
        if (!userData) {
            return (
            <div style={header1}>
                    <div style={EHR}>
                        <img src='/icons8-bot-100.png' style={botLogo} />
                        <h>EHR Appointment Chat Bot</h>
                    </div>
                    <div style={header3}>
                            <div style={botLogo1}>
                                <img src='/icons8-bot-100.png' style={botLogo} />
                            </div>
                            <div style={header4}>
                                <p style={header5}>
                                   Loading...
                                </p>
                            </div>
                    </div>
            </div>
            )
        } else {

        return (
            <div style={header1}>
                <div style={EHR}>
                    <img src='/icons8-bot-100.png' style={botLogo} />
                    <h>EHR Appointment Chat Bot</h>

                </div>
                <div style={header2}>
                {/* {!this.state.hasDoctor ? */}
                    {!this.props.has_patient ?
                        <div style={header3}>
                            <div style={botLogo1}>
                                <img src='/icons8-bot-100.png' style={botLogo} />
                            </div>
                            <div style={header4}>
                                <p style={header5}>
                                    You have no appointed doctor, please contact us at 888 888 9999 to schedule your first appointment
                                </p>
                            </div>
                        </div>
                        :
                        <div>
                            {currentApptData ?

                                <div style={header6}>
                                    <div style={botLogo1}>
                                        <img src='/icons8-bot-100.png' style={botLogo} />
                                    </div>
                                    <div style={header4}>
                                        <p style={header5} >Looks like you already have appointment, please see calendar for more detail.</p>
                                    </div>

                                </div>

                                :

                                <div>


                                    <div style={header6}>
                                        <div style={botLogo1}>
                                            <img src='/icons8-bot-100.png' style={botLogo} />
                                        </div>
                                        <div style={header4}>
                                            {this.props.userData.first_name ?
                                                <p style={header5} >
                                                    Hi {this.props.userData.first_name}, What day would you like to come in?
                                                    <br />
                                                    Assigned Doctor: {this.props.doctor_fullname}
                                                </p>
                                                :
                                                <div style={header6}>
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
                                    {!this.state.loadingWeekly &&  <div style={header6}>
                                                    <div style={{ width: "100%" }}>
                                                        <Spinner animation="grow" variant="warning" size="sm" />
                                                        <Spinner animation="grow" variant="warning" size="sm" />
                                                        <Spinner animation="grow" variant="warning" size="sm" />
                                                        <Spinner animation="grow" variant="warning" size="sm" />
                                                    </div>
                                                </div>
                                     }                       
                                    {this.state.loadingWeekly && 
                                            <div style={header4}>
                                                    {this.props.doctor_date && 
                                                    this.props.doctor_date.map((i, index) => {
                                                        return (
                                                            <div>
                                                                 <div style={botLogo1}>
                                                                    <img src='/icons8-bot-100.png' style={botLogo} />
                                                                </div>
                                                            <p style={header5}>{i[0]}</p>
                                                            {i.map(e => {
                                                                if (e.time) {
                                                                    return (
                                                                        <Button variant="warning" style={{ marginRight: 2 }} 
                                                                        onClick={() => { this.handleDate(i[0], e.time, userData.id, userData.first_name, userData.phone_number); 
                                                                        this.handleDelay1(); }}>{e.time}</Button>
                                                                    )
                                                                }
                                                            })}
                                                            </div>
                                                        ) 
                                                    })
                                                }
                                                                                    
                                               
                                            </div>
                                    }

                                    {this.state.Date_appt && (this.state.loadingDate == false) &&
                                        <div style={header6}>
                                            <div style={{ width: "100%" }}>
                                                <Spinner animation="grow" variant="warning" size="sm" />
                                                <Spinner animation="grow" variant="warning" size="sm" />
                                                <Spinner animation="grow" variant="warning" size="sm" />
                                                <Spinner animation="grow" variant="warning" size="sm" />
                                            </div>
                                        </div>
                                    }

                                    {this.state.Date_appt && this.state.loadingDate &&
                                        <div style={header6}>
                                            <div style={botLogo1}>
                                                <img src='/icons8-bot-100.png' style={botLogo} />
                                            </div>
                                            <div style={summary}>

                                                <p>Summary of your appointment </p>
                                                <p> You have scheduled for {this.state.Date_appt} at {this.state.Time}</p>
                                            </div>

                                        </div>
                                    }


                                </div>

                            }



                        </div>
                    }
                </div>
                {/* <div style={{ width: "100%", height: "90px" }}>
                    <Button onClick={() => this.handleReset()} variant="danger" style={{ float: "right", marginRight: 5, marginTop : 140 }}>
                        <h style={{ float: "right", marginRight: 5 }}>Start over?</h>
                        <span style={{ float: "right", marginRight: 5 }} class="material-icons">
                            autorenew
                                    </span>
                    </Button>
                </div> */}
            </div>
        )
    }
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => { dispatch(fetchUser()) },
        fetchUserAppointment: () => dispatch(fetchUserAppointment()),
        scheduleAppt: (appt_detail) => dispatch(scheduleAppt(appt_detail)),
        fetchUserCurrentAppointment: (uid) => dispatch(fetchUserCurrentAppointment(uid)),
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.authentication.userData,
        logged_in: state.authentication.logged_in,
        apptData: state.authentication.apptData,
        currentApptData: state.authentication.currentApptData,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);


{/* 
                                            {this.props.apptData.Doctor_avail && Object.keys(this.props.apptData.Doctor_avail).map((item, i) => {

                                                return (
                                                    <div>

                                                        <p style={header7} >{item}</p>
                                                        {this.props.apptData.Doctor_avail[item].map(e => {
                                                           
                                                            return (
                                                                <Button variant="warning" style={{ marginRight: 2 }} 
                                                                onClick={() => { this.handleDate(e, item, userData.id, userData.first_name, userData.phone_number); 
                                                                this.handleDelay1(); }}>{e}</Button>
                                                            )
                                                        })}
                                                    </div>
                                                )

                                            })}
                                        </div> */}


                                           {/* <div style={header4}>
                                                {this.props.doctor_date && this.props.doctor_date.map(idate => {
                                                    return (
                                                        <div>
                                                              <div style={botLogo1}>
                                                                    <img src='/icons8-bot-100.png' style={botLogo} />
                                                                </div>
                                                            <p style={header5}>{idate}</p>
                                                            {this.props.doctor_time && this.props.doctor_time.map(i => {
                                                            return (
                                                                <Button variant="warning" style={{ marginRight: 2 }} 
                                                                onClick={() => { this.handleDate(idate, i, userData.id, userData.first_name, userData.phone_number); 
                                                                this.handleDelay1(); }}>{i}</Button>
                                                            )
                                                        })}  
                                                        </div>
                                             
                                                    )
                                                })}
                                                
                                                </div> */}