import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Condition extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#19709c";
    }

    render() {
        return (
            <div className="cond col col-lg-4">
                <div className="ylw mx-0 w-100"><p id="title">Lyme's Disease</p></div>
                <hr className="my-0" />
                <p id="start">Start Date: 5/29/2018</p>
                <p id="end">End Date: Present</p>
                <hr />
                <p id="patient">Patient: John Smith</p>
                <p id="doctor">Doctor: Glen Victoire</p>
                <hr />
                <p id="treatment">Treatment: Doxicycline Antibiotics</p>
                <hr />
                <p id="notes">Notes: Due to a tick bite</p>
            </div>
        );
    }
}

export default Condition;
