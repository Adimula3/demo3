import React from "react";
import {Col, Row} from "react-bootstrap";

function Process() {
    return (
        <div className="process">
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <h1>A simple and <br/>streamlined process</h1>
                    </Col>
                    <Col lg={6}>
                        <p className="process-p">Use our tools to plan, design, and build your renovation with the industry's top
                            designers and contractors.</p>
                        <a href="https://">How does it work</a>
                    </Col>
                </Row>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={require('../assets/Process01.png')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Plan</h5>
                                <p className="card-text">Work with a Block Project Planner to receive a custom proposal
                                    tailored to your renovation goals with a detailed scope of work.</p>
                                <span className="one">01</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('../assets/Process02.png')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Design</h5>
                                <p className="card-text">Use our curated design system and access our in-house designers to bring your space to life.
                                    We’ll order the materials and prepare your renovation for the day of break ground.</p>
                                <span className="two">02</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('../assets/Process03.png')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Build</h5>
                                <p className="card-text">We’ve built relationships with the best, local contractors in your area.
                                    They’re 100% licensed and insured–and they’ll provide milestone updates throughout the build.</p>
                                <span className="three">03</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <Row>
                        <Col lg={6}>
                            <img className="image" src={require('../assets/Image.png')} alt=""/>
                        </Col>
                        <Col lg={6}>
                            <div className="mt-5 d-flex justify-content-between align-items-center">
                                <div className="small-ratings">
                                    <i className='bx bx-star'></i>
                                    <i className='bx bx-star'></i>
                                    <i className='bx bx-star'></i>
                                    <i className='bx bx-star'></i>
                                    <i className='bx bx-star'></i>
                                </div>
                            </div>
                            <p>Repe matched me to a great contractor<br/> who was able to renovate my kitchen
                                <br/>while I lived at home during the <br/>pandemic.</p>
                            <p className="name">— John D.</p>
                            <div className="d-flex">
                                <div className="arrow">
                                    <i className='bx bx-left-arrow-alt'></i>
                                    <i className='bx bx-right-arrow-alt'></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <button type="button" className="btn btn-primary">Get your estimate</button>
                </div>
            </div>
            <section className="section3">
                <div className="container-fluid">
                    <img src={require('../assets/Background.png')} alt="" />
                    <div id="rel2">
                        <p>Renovate your home as<br/> love as 0% APR</p>
                        <button type="button" className="btn btn-primary">Explore financing</button>
                    </div>
                </div>
            </section>
            <section className="section4">
                <div className="container">
                    <h1>Our Options</h1>
                    <Row>
                        <Col className="left" lg={6}>
                            <div className="card" >
                                <img src={require('../assets/section41.png')} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Bathroom</h5>
                                        <p className="weeks">4 WEEKS TO BUILD</p>
                                        <p className="card-text">Build your dream bathroom with premium fixtures and finishes.</p>
                                        <button type="button" className="btn btn-primary">Learn more</button>
                                    </div>
                            </div>
                            <div className="card" >
                                <img src={require('../assets/section42.png')} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Kitchen</h5>
                                    <p className="weeks">6 WEEKS TO BUILD</p>
                                    <p className="card-text">Create your ideal kitchen with quality, lasting materials.</p>
                                    <button type="button" className="btn btn-primary">Learn more</button>
                                </div>
                            </div>
                        </Col>
                        <Col className="right" lg={6}>
                            <div className="card" >
                                <img src={require('../assets/section43.png')} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Backyard</h5>
                                    <p className="weeks">5 WEEKS TO BUILD</p>
                                    <p className="card-text">Create your backyard getaway with durable materials and beautiful finishes.</p>
                                    <button type="button" className="btn btn-primary">Learn more</button>
                                </div>
                            </div>
                            <div className="card" >
                                <img src={require('../assets/section44.png')} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Basement</h5>
                                    <p className="weeks">7 WEEKS TO BUILD</p>
                                    <p className="card-text">Create your backyard getaway with durable materials and beautiful finishes.</p>
                                    <button type="button" className="btn btn-primary">Learn more</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="section5">
                <div className="container">
                    <Row>
                        <Col className="left2" lg={6}>
                            <Row>
                                <Col  md={6}>
                                    <img src={require('../assets/Image6.png')} alt=""/>
                                </Col>
                                <Col md={6}>
                                    <img src={require('../assets/Image1.png')} alt=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <img className="inner1" src={require('../assets/Image2.png')} alt=""/>
                                </Col>
                                <Col md={6}>
                                    <img className="inner2"  src={require('../assets/Image3.png')} alt=""/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <img src={require('../assets/Image4.png')} alt=""/>
                                </Col>
                                <Col md={6}>
                                    <img src={require('../assets/Image5.png')} alt=""/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="right2" lg={6}>
                            <div className="right23">
                                <h1>Look at what<br/> we’ve done!</h1>
                                <p>Discover what clients were able to<br/> achieve with Repe.</p>
                            </div>
                            <div className="right22">
                                <button type="button" className="btn btn-primary">View Project Gallery</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="section6">
                <div className="container">
                    <Row>
                        <Col lg={6}>
                            <h1>Let’s work on your project together!</h1>
                            <div className="wrap">
                                <button type="button" className="btn btn-primary">Schedule a call</button>
                            </div>

                        </Col>
                        <Col lg={6}>
                            <p>hello@repe.com</p>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
}
export default Process;
