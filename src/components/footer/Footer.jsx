import React from "react";
import { Container, Stack, Row, Col,Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container >
                <Row>
                    <Col xs={12} lg={3}>
                        <Card className={styles.card}>
                            <Col xs={12} lg={12}>
                                <div className={styles.imgfooter}>TouchUp</div>
                            </Col>
                            <Col xs={12} lg={12} className={styles.email}>touchup@example.com</Col>
                            <Col xs={12} lg={12} className={styles.phone}>+(971) 204 2033 06611</Col>
                        </Card>
                    </Col>

                    <Col xs={12} lg={5}>
                        <Card className={styles.card}>
                            <h4 className={styles.h4}>Working hours</h4>
                            <div className={styles.time}>
                                <div><span className={styles.span}>Monday</span></div>
                                <div className={styles.times}>09AM - 20PM</div>
                            </div>
                            <div  className={styles.time}>
                                <div><span className={styles.span}>Saturday</span></div>
                                <div className={styles.times}>12AM - 20PM</div>
                            </div>
                            <div  className={styles.time}>
                                <div><span className={styles.span}>Sunday</span></div>
                                <div className={styles.times}>Closed</div>
                            </div>
                        </Card>

                    </Col>

                    <Col xs={12} lg={4} className={styles.footer3}>
                        <Card className={styles.card}>
                            <Col xs={12} lg={12} className={styles.h4}>
                            Newsletter
                            </Col>
                            <Col xs={12} lg={12} className={styles.subfooter}>Subscribe to our newsletter for all the latest news and offers</Col>
                            <Col xs={12} lg={12}>
                                <InputGroup>
                                    <Form.Control placeholder="Email">
                                    </Form.Control>
                                    <Button variant="outline-secondary" id="button-addon2">
                                         Button
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
