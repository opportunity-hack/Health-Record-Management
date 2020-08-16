import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Treat.css";
import Condition from "./Condition";
class Ptreat extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#19709c";
    }

    render() {
        return (
            <div className="container">
                <br className="my-4" />
                <h1 className="display-4">Patient Treatments</h1>
                <br className="my-4" />
                <div className="input-group my-3 px-5">
                    <input
                        type="text"
                        className="form-control"
                        ariaLabel="Search Treatments"
                        placeholder="Search Treatments"
                    />
                    <a href="#">
                        <div className="input-group-append">
                            <span className="material-icons input-group-text">
                                search
                            </span>
                        </div>
                    </a>
                </div>
                <br className="my-4" />
                <div className="row">
                    <Condition />
                    <Condition />
                    <Condition />
                    <Condition /> 
                </div>               
            </div>
        );
    }
}

export default Ptreat;
