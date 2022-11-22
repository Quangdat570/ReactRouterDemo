import React from "react";
import { Card, Col, Container, Row, Image, Ratio, Button,Nav } from "react-bootstrap";
import { Link, useLoaderData, NavLink } from "react-router-dom";
import Banner from "./Banner";
import {  BsPerson,BsHandbag  } from "react-icons/bs";

import { AiOutlineCheck } from "react-icons/ai";
import styles from './Home.module.css'


const NextArrow = ({ className, style, onClick }) => {
    return (
        <div className={className} onClick={onClick} {...style}>
            <BsArrowRightCircleFill color="black" fontSize={24} />
        </div>
    );
};

const Home = () => {
    const products = useLoaderData();

    const slickConfig = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <NextArrow />,
    };

    return (
        <main>
            <Banner />

            <Container className="d-block" fluid>
                <Row className="flex-row ">
                    <Col xs={6} md={4} lg={3} className="px-0">
                        <Card className={styles.card}>
                            <Card.Img src="./element 1.jpg" className={styles.img}/>

                        </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} className={styles.element1}>
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Title className={styles.title}>Lips</Card.Title>
                                <Card.Text className={styles.text}> Lorem ipsum dolor sit amet, adipisicing elit eius mod tem</Card.Text>
                                <Nav.Link href="/" variant="white" className={styles.button}>READ MORE</Nav.Link>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} className="px-0" >
                        <Card className={styles.card}>
                            <Card.Img src="./element 2.jpg" className={styles.img}/>

                        </Card>
                    </Col>
                    <Col xs={6}  md={4} lg={3} className={styles.element2}>
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Title className={styles.title}>Lip</Card.Title>
                                <Card.Text className={styles.text}>Lorem ipsum dolor sit amet, adipisicing elit eius mod tem</Card.Text>
                                <Nav.Link variant="white" className={styles.button}>READ MORE</Nav.Link>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} className={styles.element3}>
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Title className={styles.title}>Lip</Card.Title>
                                <Card.Text className={styles.text}>Lorem ipsum dolor sit amet, adipisicing elit eius mod tem</Card.Text>
                                <Nav.Link variant="white" className={styles.button}>READ MORE</Nav.Link>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} className="px-0">
                        <Card className={styles.card}>
                            <Card.Img src="./element 3.jpg" className={styles.img}/>

                        </Card>
                    </Col>

                    <Col xs={6} md={4} lg={3} className={styles.element4}>
                        <Card className={styles.card}>
                            <Card.Body>
                                <Card.Title className={styles.title}>Lip</Card.Title>
                                <Card.Text className={styles.text}>Lorem ipsum dolor sit amet, adipisicing elit eius mod tem</Card.Text>
                                <Nav.Link variant="white" className={styles.button}>READ MORE</Nav.Link>
                            </Card.Body>

                        </Card>
                    </Col>
                 

                    <Col xs={6} md={4} lg={3} className="px-0">
                        <Card className={styles.card}>
                            <Card.Img src="./element 4.jpg" className={styles.img}/>

                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs={12} className={styles.titleTreatment}>Choose a treatment <span className={styles.span}></span></Col>
                    <Col xs={12} md={6} lg={4} className={styles.treatment}>
                        <Col xs={3} lg={4}>
                            <img src="./treatment 1.jpg" alt="" className={styles.imgtreatment}/>
                        </Col>
                        <Col xs={9} lg={8}>
                            <h4 className={styles.h4}>Face lift </h4>
                            <div className={styles.p}>Lorem ipsum dolor sit amet, adipisicing </div>
                        </Col>

                        
                    </Col>

                    <Col xs={12} md={6} lg={4} className={styles.treatment}>
                        <Col lg={4}>
                            <img src="./treatment 2.jpg" alt="" />
                        </Col>
                        <Col lg={8}>
                            <h4 className={styles.h4}>Implant </h4>
                            <div className={styles.p}>Lorem ipsum dolor sit amet, adipisicing </div>
                        </Col>

                        
                    </Col>

                    <Col xs={12} md={6} lg={4} className={styles.treatment}>
                        <Col lg={4}>
                            <img src="./treatment 3.jpg" alt="" />
                        </Col>
                        <Col lg={8}>
                            <h4 className={styles.h4}>Fillers </h4>
                            <div className={styles.p}>Lorem ipsum dolor sit amet, adipisicing </div>
                        </Col>

                        
                    </Col>

                    <Col xs={12} md={6} lg={4} className={styles.treatment}>
                        <Col lg={4}>
                            <img src="./treatment 4.jpg" alt="" />
                        </Col>
                        <Col lg={8}>
                            <h4 className={styles.h4}>Rhinoplasty </h4>
                            <div className={styles.p}>Lorem ipsum dolor sit amet, adipisicing </div>
                        </Col>

                        
                    </Col>

                    <Col xs={12} md={6} lg={4} className={styles.treatment}>
                        <Col lg={4}>
                            <img src="./treatment 5.jpg" alt="" />
                        </Col>
                        <Col lg={8}>
                            <h4 className={styles.h4}>Eyes & eyelids </h4>
                            <div className={styles.p}>Lorem ipsum dolor sit amet, adipisicing </div>
                        </Col>

                        
                    </Col>

                    <Col xs={12} md={6} lg={4} className={styles.treatment}>
                        <Col lg={4}>
                            <img src="./treatment 6.jpg" alt="" />
                        </Col>
                        <Col lg={8}>
                            <h4 className={styles.h4}>Lips</h4>
                            <div className={styles.p}>Lorem ipsum dolor sit amet, adipisicing </div>
                        </Col>

                        
                    </Col>
                </Row>
            </Container>

            <Container fluid >
               <Row>
                <Col className={styles.banner2}>
                    <img src="./image 13.jpg" alt="" className={styles.imgbanner2}>
                    </img>
                        <div className={styles.headbanner}>Aesthetic & corrective <span className={styles.span2}></span></div>
                        
                        <div className={styles.subbanner}>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt</div>
                </Col> 
                <Col className={styles.banner3}>
                    <img src="./image 20.jpg" alt="" className={styles.imgbanner2}>
                    </img>
                        <div className={styles.headbanner}>Aesthetic & corrective <span className={styles.span2}></span></div>
                        
                        <div className={styles.subbanner}>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt</div>
                </Col> 
               </Row>
            </Container>

            <Container className={styles.productx}>
                <Row>
                    <Col lg={4} xs={12} sm={6}>
                        <Card>
                            <Card.Img src="./image 17.jpg"></Card.Img>
                            <Card.Body>
                                <Card.Text className={styles.headbuy}>Basic</Card.Text>
                                <Card.Title className={styles.pricemonth}>$ 390 <span className={styles.month}>Monthly</span></Card.Title>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Ut pharetra augue aliquet risus,</Card.Text>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Mauris vitae turpis maximus,</Card.Text>
                                <Card.Text className={styles.subprice}> <span><AiOutlineCheck/></span> Donec in neque tincidunt,</Card.Text>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Vivamus efficitur dui a arcu</Card.Text>
                                <Button  variant="light" className={styles.buttonBuy}>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <Card>
                            <Card.Img src="./image 18.jpg"></Card.Img>
                            <Card.Body>
                                <Card.Text className={styles.headbuy}>Professional</Card.Text>
                                <Card.Title  className={styles.pricemonth}>$ 1290 <span className={styles.month}>Monthly</span></Card.Title>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span>  Ut pharetra augue aliquet risus,</Card.Text>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Mauris vitae turpis maximus,</Card.Text>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Donec in neque tincidunt,</Card.Text>
                                <Card.Text className={styles.subprice}> <span><AiOutlineCheck/></span> Vivamus efficitur dui a arcu</Card.Text>
                                <Button  variant="light" className={styles.buttonBuy}>Buy Now</Button>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={6} lg={4}>
                        <Card>
                            <Card.Img src="./image 19.jpg"></Card.Img>
                            <Card.Body>
                                <Card.Text className={styles.headbuy}>Advanced</Card.Text>
                                <Card.Title  className={styles.pricemonth}>$ 2590 <span className={styles.month}>Monthly</span></Card.Title>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Ut pharetra augue aliquet risus,</Card.Text>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Mauris vitae turpis maximus,</Card.Text>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Donec in neque tincidunt,</Card.Text>
                                <Card.Text className={styles.subprice}><span><AiOutlineCheck/></span> Vivamus efficitur dui a arcu</Card.Text>
                                <Button  variant="light" className={styles.buttonBuy}>Buy Now</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};


export default Home;
