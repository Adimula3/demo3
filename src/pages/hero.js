import React from "react";
import {Col, Row} from "react-bootstrap";

function Hero() {
    return (
      <div className="hero">
          <div className="container">
              <Row>
                  <Col lg={6}>
                      <div className="left-hero">
                          <h1>Renovation simplified</h1>
                          <p>A streamlined platform to design, plan,<br/>and build — all in one place</p>
                          <button type="button" className="btn btn-primary">Get your estimate</button>
                      </div>
                  </Col>
                  <Col lg={6}>
                      <div id="abs1">
                          <img src={require('../assets/I72dFJRFT3k.png')} alt=""/>
                      </div>
                      <div id="abs2">
                          <img src={require('../assets/Rectangle1.png')} alt=""/>
                      </div>
                  </Col>
              </Row>
          </div>
          <section className="press_info">
              <div className="press">
                  <Row>
                      <Col lg={3}>
                          <img className="press_img" src={require('../assets/Press01.png')} alt=""/>
                          <p className="press-text">"repe is here to simplify the process."</p>
                      </Col>
                      <Col lg={3}>
                          <img className="press_img1" src={require('../assets/Press02.png')} alt=""/>
                          <p>"In addition to getting a contractor, you're also getting the eye of a design professional."</p>
                      </Col>
                      <Col lg={3}>
                          <img className="press_img2" src={require('../assets/Press03.png')} alt=""/>
                          <p className="press-text1">"Streamlining timely aspects like layout, materials selection, and building approvals"</p>
                      </Col>
                      <Col lg={3}>

                      </Col>
                  </Row>
              </div>

          </section>
      </div>
    );
}
export default Hero;
