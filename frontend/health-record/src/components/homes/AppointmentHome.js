import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {Button} from 'react-bootstrap'
import dateFormat from 'dateformat'
import {connect} from 'react-redux'
import {fetchUser, fetchUserCurrentAppointment} from '../store/actions/authenticationAction'

class AppointmentHome extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.userData.id !== this.props.userData.id) {
          this.updateCalendar();
        }
      }
   
      updateCalendar() {
        this.props.fetchUserCurrentAppointment(this.props.userData.id)
      }
   async componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
       
    }
    render() {
        var app_admin = []
        var appt_date = []
        const currentApptData = this.props.currentApptData
        if (this.props.userData.is_admin) {

                app_admin.push({date: "2020-08-24", title : "John doe : 10:00AM"})
                app_admin.push({date: "2020-08-22", title : "Jane doe : 08:00AM"})
                app_admin.push({ date: "2020-08-25", title : "Peter doe : 11:00AM"})
                app_admin.push({date: "2020-08-14", title : "Meow doe : 02:00PM"})
                app_admin.push({date: "2020-08-04", title : "Johnny doe : 04:00PM"})
            
        } else {
            if (currentApptData.Upcoming) {
                Object.keys(currentApptData.Upcoming).map((item, i) => {
    
                    app_admin.push({ title: currentApptData.Upcoming[item].Patient_name + " at " + currentApptData.Upcoming[item].Time , date: dateFormat(currentApptData.Upcoming[item].Date_appt, "yyyy-mm-dd") })
                })
            }
        }

     
        
        console.log(appt_date)
        return (
            
            <div style={{textAlign : "center"}}>
                    <h style={{ fontSize : 35, color : 'white', color: '#f0ad4e', fontWeight : "bold", textAlign : "center"}}>Appointment Detail</h>
                <div style={{boxShadow : '10px 10px 37px 0px rgba(0,0,0,0.75)', marginTop : 30, marginBottom : 100, marginLeft : "10%", marginRight : "10%", backgroundColor : "white", width: "80%", height : "100%", borderRadius : 20}}>
                            
                        <div style={{backgroundColor : "#f0ad4e", width: "100%", height : "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                            <h style={{fontWeight : "bold", fontSize : 20, padding : 20, display: "inline-block"}}>Your upcoming appointment are below:</h>
    
                        </div>
                        <div style={{backgroundColor : "white", padding : 20,  width: "100%", height : "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                        <FullCalendar
                            plugins={[ dayGridPlugin ]}
                            headerToolbar = {{
                                start: 'today prev,next', 
                                center: '',
                                end: 'title' 
                            }}

                            events={app_admin}
                        />
                        </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => { dispatch(fetchUser()) },
        fetchUserCurrentAppointment: (uid) => dispatch(fetchUserCurrentAppointment(uid))
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.authentication.userData,
        logged_in: state.authentication.logged_in,
        apptData: state.authentication.apptData,
        currentApptData: state.authentication.currentApptData
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentHome);