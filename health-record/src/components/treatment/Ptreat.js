import React, { Component } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
class Ptreat extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = "#19709c";
    }

    render() {
        return (
            <div className="container">
                <br className="my-4" />
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                    />
                    <div class="input-group-append">
                        <span class="input-group-text"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ptreat;
