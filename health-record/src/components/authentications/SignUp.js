import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'
import {col1, col2, col3, col4, col5} from '../css/SignUpCSS'
import dateFormat from 'dateformat'
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"
import {signUp} from '../store/actions/authenticationAction'
import { connect } from 'react-redux'
import PhoneInput, { normalize } from "react-phone-input-auto-format"
class SignUp extends Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        gender: '',
        birth_date: '',
        phone_number: '',
        street_address: '',
        city: '',
        state: 'AL',
        zip_code: '',
        startDate: '',
        notFilledCorrectly : false
    }

    


    handleDate = date => {
        const finalDate = dateFormat(date, "yyyy-mm-dd")
        this.setState({
            notFilledCorrectly : false,
            birth_date : finalDate,
            startDate : date
        });
    };
    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    handleChange = (e) => { 
        this.setState({
            notFilledCorrectly : false,
            [e.target.id] : e.target.value
        })
    }

    handleState = (e) => { 
        this.setState({
            notFilledCorrectly : false,
            state : e.target.value
        })
    }
    handlePhone = (e) => {
        const normalized = normalize(e)
            this.setState({
                phone_number : normalized
            })
    }

    handleSubmit () {
        if ((this.state.gender === '') || (this.state.birth_date === '') || (this.state.zip_code.length != 5) || (this.state.phone_number.length != 10)) {
           this.setState({
               notFilledCorrectly : true
           })

        } else {
            this.props.signUp(this.state)
        }   
        
    }


    render() {
        console.log(this.state)
        return (
            <div style={{ textAlign: 'center' }}>
                {this.state.notFilledCorrectly && <Alert variant="danger">
                ERROR!
                <br/> Either one of these are true: 
                <br/> Zip code is NOT 5 digits
                <br/> Phone number is NOT 10 digits
                <br/> Gender is NOT selected
                <br/> Birth date is NOT chosen
                </Alert>}
                <Container style={{ paddingTop: 50 }}>
                    <Row >
                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <span class="material-icons" style={col1}>
                            how_to_reg
                            </span>
                        </Col>

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                            <h style={col2}>Sign Up</h>
                        </Col>
                        

                        <Col md={{ span: 3, offset: 3 }}>
                        <Form.Control id = "first_name" placeholder="First name" onChange={(e) => this.handleChange(e)}/>
                        <br />
                        </Col>
                        
                        <Col md={{ span: 3 }}>
                        <Form.Control id = "last_name" placeholder="Last name" onChange={(e) => this.handleChange(e)}/>
                        </Col>
                    
                        <Col md={{ span: 6, offset: 3 }}>

                            <Form.Control id = "email" type="email" placeholder="Enter email" style={{ float: 'left' }} 
                            onChange={(e) => this.handleChange(e)}
                            />
                    
                        </Col>
               
                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>
                            <Form.Control id ="password" type="password" placeholder="Password" 
                            onChange={(e) => this.handleChange(e)}
                            />
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>
                            <Form.Control id ="street_address" placeholder="Street address" onChange={(e) => this.handleChange(e)}/>
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>
                            <Form.Control id ="city" placeholder="City" onChange={(e) => this.handleChange(e)}/>
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>
                            
                        <Form.Control as="select" onChange={(e) => this.handleState(e) }>
<option>AL</option> <option>AK</option>  <option>AZ</option> <option>AR</option> <option>CA</option> <option>CO</option> <option>CT</option>  <option>DE</option> <option>DC</option> <option>FL</option>
<option>GA</option> <option>HI</option>  <option>ID</option> <option>IL</option> <option>IN</option> <option>IA</option> <option>KS</option>  <option>KY</option> <option>LA</option> <option>ME</option>                          
<option>MD</option> <option>MA</option>  <option>MI</option> <option>MN</option> <option>MS</option> <option>MO</option> <option>MT</option>  <option>NE</option> <option>NV</option> <option>NH</option>                       
<option>NJ</option> <option>NM</option>  <option>NY</option> <option>NC</option> <option>ND</option> <option>OH</option> <option>OK</option>  <option>OR</option> <option>PA</option> <option>RI</option>                      
<option>SC</option> <option>SD</option>  <option>TN</option> <option>TX</option> <option>UT</option> <option>VT</option> <option>VA</option>  <option>WA</option> <option>WV</option> <option>WI</option>   
<option>WY</option>                       
                            </Form.Control>
                        </Col>


                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>
                            <Form.Control id ="zip_code" placeholder="Zip code" type="number" onChange={(e) => this.handleChange(e)}/>
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>
                            <PhoneInput placeholder="Phnone number" style={{width : "100%" }} onChange={(e) => {this.handlePhone(e)}}/>
                            {/* <Form.Control id ="phone_number" placeholder="Phone number" onChange={(e) => this.handleChange(e)}/> */}
                        </Col>
                        
                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>
                            <div style={{float : "left", display : "inline-block", fontSize : 20, color : "white"}} >
                                <h>Birth date</h>
                            </div>

                            <div style={{float : "right", display : "inline-block"}}>
                                    <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleDate}
                                />
                            </div>
                            
                        </Col>

                        <Col md={{ span: 6, offset: 3 }}>
                            <br/>

                            <form>
                                <div style={{fontSize : 20, color : "white", float : "left"}}>
                                    <input type="radio" id="gender" name="gender" value="male" onChange={(e) => this.handleChange(e)}/>
                                    <label for="male"> Male</label>
                                </div>
                                <div style={{fontSize : 20, color : "white", float : "left", marginLeft : 10}}>
                                    <input type="radio" id="gender" name="gender" value="female" onChange={(e) => this.handleChange(e)} />
                                    <label for="female">Female</label>
                                </div>
                                <div style={{fontSize : 20, color : "white", float : "left", marginLeft : 10}}>
                                    <input type="radio" id="gender" name="gender" value="Non-binary" onChange={(e) => this.handleChange(e)} />
                                    <label for="Non-binary">Non-binary</label>
                                </div>
                                <div style={{fontSize : 20, color : "white", float : "left", marginLeft : 10}}>
                                    <input type="radio" id="gender" name="gender" value="A gender not listed here" onChange={(e) => this.handleChange(e)} />
                                    <label for="A gender not listed here">A gender not listed here</label>
                                </div>
                                <div style={{fontSize : 20, color : "white", float : "left"}}>
                                    <input type="radio" id="gender" name="gender" value="Prefer not to say" onChange={(e) => this.handleChange(e)} />
                                    <label for="Prefer not to say">Prefer not to say</label>
                                </div>
                                
                              
                            </form> 

                           
                        </Col>
                        

                        <Col xs={12} sm={12} md={12} lg={12} xl={12} style={col5}>
                            <Button variant="warning" onClick={() => this.handleSubmit()}>Create account</Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (userCredential) => {dispatch(signUp(userCredential))}
    }
}

export default connect(null, mapDispatchToProps)(SignUp);