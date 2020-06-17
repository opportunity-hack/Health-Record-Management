import React, {Component} from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import {logo, head, head1, head2, para} from '../css/HomeCSS'
class Home extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    render() {
        return (
            <div style={{textAlign : "center"}}>
                <h style={head}>WELCOME TO MEDCARE</h>
                <h1 style={head1}>EHR platform that adapts to your needs</h1>
                <Container style={{marginTop : 75}}>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                            <img src="/photos/MEDCARE.png" style={logo}/>
                            
                            <h2 style={head2}>View all your treatments at once place</h2>
                            <p style={para}> Using MedCare EHR, you can view your treatments and prescriptions in just one click. You no longer have to dcoument your past medical history as MedCare EHR does that for you.</p>
                            <Button variant="warning">Get started</Button>
                        </Col>
    
                        <Col xs={12} sm={12} md={12} lg={{ span : 5, offset : 2}} xl={{ span : 5, offset : 2}}>
                            <img src="/photos/MEDCARE.png" style={logo}/>
                            <h2 style={head2}>Accelerate your workflow</h2>
                            <p style={para}>No longer will you need to spend hours after work completing notes. MedCare EHR works with your workflow, not againts it, and let you spend less time in the EHR and more time with your patients.</p>
                            <Button variant="warning">Get started</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Home;
