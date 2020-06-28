import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {Button} from 'react-bootstrap'

class AppointmentHome extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }
    render() {


        return (
            
            <div style={{textAlign : "center"}}>
                    <h style={{ fontSize : 35, color : 'white', color: '#f0ad4e', fontWeight : "bold", textAlign : "center"}}>Appointment Detail</h>
                <div style={{boxShadow : '10px 10px 37px 0px rgba(0,0,0,0.75)', marginTop : 30, marginBottom : 100, marginLeft : "10%", marginRight : "10%", backgroundColor : "white", width: "80%", height : "100%", borderRadius : 20}}>
                            
                        <div style={{backgroundColor : "#f0ad4e", width: "100%", height : "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                            <h style={{fontWeight : "bold", fontSize : 20, padding : 20, display: "inline-block"}}>Your upcoming appointment is:</h>
                            <h style={{color : "blue", fontStyle : "italic", fontSize : 15}}> No appointment </h>
    
                        </div>
                        <div style={{backgroundColor : "#f0ad4e", width: "100%", height : "100%"}}>
                         <Button variant="success">Schedule an appointment</Button>
                        
                        </div>    
                        <div style={{backgroundColor : "white", padding : 20,  width: "100%", height : "100%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                        <FullCalendar
                            plugins={[ dayGridPlugin ]}
                            headerToolbar = {{
                                start: 'today prev,next', 
                                center: '',
                                end: 'title' 
                            }}
                            events={[
                                { title: 'Your appointment date', date: '2020-06-27' },
                                { title: 'No available space', date: '2020-06-23' },
                                { title: 'No available space', date: '2020-06-19' },
                                { title: 'No available space', date: '2020-06-16' },
                                { title: 'No available space', date: '2020-06-16' },
                                { title: 'No available space', date: '2020-06-15' }
                            ]}
                        />
                        </div>
                </div>
            </div>

        )
    }
}

export default AppointmentHome;