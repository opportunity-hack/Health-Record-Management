import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React, {Component} from 'react'
import {Button, Spinner} from 'react-bootstrap'
class ChatBox extends Component {
    state = {
        selectedDate : '',
        selectedTime : '',
        weeklyAppointment : '',
        resetAppointment : false,
        loading : false,
        loadingWeekly : false,
        loadingDate : false,
        hasDoctor : false,
    }
    async handleDate (d) {
       await this.setState({selectedDate : d})
    }
    async handleTime (t) {
        await this.setState({selectedTime : t})
     }
    async handleDelay () {
        await this.setState({loading : true})
        await setTimeout(() => {
            this.setState({loading : false})
            this.setState({loadingWeekly : true})
          }, 3000)
    }
    async handleDelay1 () {
       
        await setTimeout(() => {
            this.setState({loadingDate : true})
          }, 3000)
    }
     
    componentDidMount = () => {
        this.handleDelay()
    }
    async handleReset () {
        this.setState({
            selectedDate : "",
            selectedTime : ""
        })
    }
    render () {
      
        return (
            <div style={{width : "400px", height: "550px", backgroundColor : "white", borderRadius : 20}}>
                  <div style={{width : "100%", height : "50px", backgroundColor : "#f0ad4e", borderTopLeftRadius : 20, borderTopRightRadius: 20}}>
                            <img src='/icons8-bot-100.png' style={{width : 40, height : 40, marginRight : 20}} />
                            <h>EHR Appointment Chat Bot</h>
                            
                  </div>
                  <div style={{backgroundColor : "white", width : "100%", height : "410px"}}>
                      {!this.state.hasDoctor ? 
                      <div style={{width : "90%", marginLeft : 5, marginTop : 5, borderRadius : 10}}>
                        <div style={{width : "20%", display : "inline-block"}}>
                            <img src='/icons8-bot-100.png' style={{width : 40, height : 40, marginBottom : 15}} />
                        </div>
                        <div style={{width : "80%", display : "inline-block"}}>
                            <p style={{backgroundColor : "#f0ad4e", borderRadius : 10}} >You have no appointed doctor, please contact us at 888 888 9999 to schedule your first appointment</p>
                        </div> 
                      </div> 
                      : 
                      <div>
                            <div style={{width : "90%", marginLeft : 5, marginTop : 5, borderRadius : 10}}>
                                <div style={{width : "20%", display : "inline-block"}}>
                                 <img src='/icons8-bot-100.png' style={{width : 40, height : 40, marginBottom : 15}} />
                                </div>
                                <div style={{width : "80%", display : "inline-block"}}>
                                 <p style={{backgroundColor : "#f0ad4e", borderRadius : 10}} >What day would you like to come in?</p>
                                </div> 
                            </div>
                            {this.state.loadingWeekly &&
                                <div style={{width : "90%", marginLeft : 5, marginTop : 5, borderRadius : 10}}>
                                        <Button variant="warning" style={{marginRight : 2}} onClick={() =>{this.handleDate("Monday"); this.handleDelay1();}}>Mon</Button>
                                        <Button variant="warning" style={{marginRight : 2}} onClick={() => {this.handleDate("Tuesday"); this.handleDelay1();}}>Tues</Button>
                                        <Button variant="warning" style={{marginRight : 2}} onClick={() =>{this.handleDate("Tuesday"); this.handleDelay1();}}>Wed</Button>
                                        <Button variant="warning" style={{marginRight : 2}} onClick={() =>{this.handleDate("Thursday"); this.handleDelay1();}}>Thur</Button>
                                        <Button variant="warning" style={{marginRight : 2}} onClick={() =>{this.handleDate("Friday"); this.handleDelay1();}}>Fri</Button>
                                </div>
                            }
                                   
                            {this.state.selectedDate && (this.state.loadingDate == false) &&
                                <div style={{width : "90%", marginLeft : 5, marginTop : 5, borderRadius : 10}}>
                                <div style={{width : "100%" }}>
                                    <Spinner animation="grow" variant="warning" size="sm" />
                                    <Spinner animation="grow"variant="warning"  size="sm" />
                                    <Spinner animation="grow"variant="warning"  size="sm" />
                                    <Spinner animation="grow"variant="warning"  size="sm" />
                                </div> 
                            </div>
                            }

                            {this.state.selectedDate && this.state.loadingDate &&
                              <div style={{width : "90%", marginLeft : 5, marginTop : 5, borderRadius : 10}}>
                              <div style={{width : "20%", display : "inline-block"}}>
                              <img src='/icons8-bot-100.png' style={{width : 40, height : 40, marginBottom : 15}} />
                              </div>
                              <div style={{width : "80%", display : "inline-block"}}>
                              <p style={{backgroundColor : "#f0ad4e", borderRadius : 10}} >Here is all the time avaiable for the specific date you have chosen</p>
                              </div>

                              <div style={{width : "90%", marginLeft : 5, marginTop : 5, borderRadius : 10}}>
                                    <Button variant="warning" style={{marginRight : 2}} onClick={() =>this.handleTime("9:00AM")}>9:00AM</Button>
                                    <Button variant="warning" style={{marginRight : 2}} onClick={() =>this.handleTime("10:00AM")}>10:00AM</Button>
                                    <Button variant="warning" style={{marginRight : 2}} onClick={() =>this.handleTime("11:00AM")}>11:00AM</Button>
                                    <Button variant="warning" style={{marginRight : 2}} onClick={() =>this.handleTime("11:30AM")}>11:30AM</Button>
                                    <Button variant="warning" style={{marginRight : 2}} onClick={() =>this.handleTime("2:00PM")}>2:00PM</Button>
                                </div>
                            </div>   
                            }

                            {this.state.selectedTime && 
                            <div style={{width : "90%", marginLeft : 5, marginTop : 5, borderRadius : 10}}>
                                <div style={{width : "20%", display : "inline-block"}}>
                                <img src='/icons8-bot-100.png' style={{width : 40, height : 40, marginBottom : 15}} />
                                </div>
                                <div style={{marginTop : 5, backgroundColor : "#f0ad4e", width : "80%", display : "inline-block", borderRadius : 10}}>
                                <p>Summary of your appointment </p>
                                <p> You have scheduled for {this.state.selectedDate} at {this.state.selectedTime} on 9/17 </p>
                                </div>
                            </div>
                            }   


                          
                      </div>
                      }
                    </div>
                            <div style={{ width : "100%", height : "40px"}}>
                                <Button onClick={() => this.handleReset()} variant = "danger" style={{float : "right", marginRight : 5}}>
                                    <h style={{float : "right" , marginRight : 5 }}>Start over?</h>
                                    <span style={{float : "right", marginRight : 5 }} class="material-icons">
                                    autorenew
                                    </span>
                                </Button>
                            </div>
                            <div style={{backgroundColor : "#f0ad4e", width : "100%", height : "50px"}}>
                                    <div> 
                                    <Button style={{marginLeft : 5, float : "left", display : "inline-block"}}>
                                        <span class="material-icons">
                                            arrow_back
                                            </span>
                                        </Button>
                                    </div>
                                    <div style={{float : "center", display : "inline-block"}}>
                                            <h style={{fontSize : 15, fontWeight : "bold"}}> Week 9/15 - 9/22</h>
                                    </div>
                                    <div style={{marginRight : 5, float : "right", display : "inline-block"}}> 
                                    <Button>
                                            <span class="material-icons">
                                            arrow_forward
                                            </span>
                                    </Button>
                                    </div>
                            </div>
            </div>
        )
    }

}
export default ChatBox;
