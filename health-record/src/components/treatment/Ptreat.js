import React, { Component } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class Ptreat extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "#19709c"
    }

    render() {
        return (
            <div className="container">
              <br className="my-4">
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <div class="input-group-append">
              <span class="material-icons">
                search
              </span>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">With textarea</span>
                </div>
              <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
      </div>

      </div>

        )
    }
}

export default Ptreat;