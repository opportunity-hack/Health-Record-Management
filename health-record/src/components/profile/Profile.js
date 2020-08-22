import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Profile extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#19709c";
    }

    render() {
        return (
            <div className="container">
                <br className="my-4" />
               <h1 className="display-4">Profile</h1>
               <br className="my-4" />
               <div id="info">
                    <p className="lead">Name: </p>
                    <p>Age: </p>
                    <p>Gender: </p>
                    <p>Email: </p>
                    <p>Notes: </p>
               </div>
               
            </div>
        );
    }
}

export default Profile;
