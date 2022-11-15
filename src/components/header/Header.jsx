import React from "react";

import {
    Col,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Row,
    Stack,
} from "react-bootstrap";
import {  BsPerson,BsHandbag  } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" fixed="top" className={styles.nav}>
                <Container className="d-block">
                    <Row className="align-items-center">
                        <Col xs={{ span: 4, order: 1 }} className="d-lg-none">
                            <Navbar.Toggle aria-controls="main-nav" />
                        </Col>

                        <Col
                            xs={{ span: 4, order: 2 }}
                            lg={{ span: 3, order: 1 }}
                            className="text-center text-lg-start"
                        >
                            <Navbar.Brand as={Link} to="/">
                                <img src="./logo.jpg" alt="" />
                            </Navbar.Brand>
                        </Col>

                        <Col
                            lg={{ span: 6, order: 2 }}
                            className="d-none d-lg-block"
                        >
                            <Nav className="justify-content-center">
                                <Nav.Link as={NavLink} to="/" className={styles.navlink}>
                                    Home
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/shop" className={styles.navlink}>
                                    Shop
                                </Nav.Link>

                                <Nav.Link as={NavLink} to="/about" className={styles.navlink}>
                                    About
                                </Nav.Link>


                                <Nav.Link as={NavLink} to="/blog" className={styles.navlink}>
                                    Blog
                                </Nav.Link>
                            </Nav>
                        </Col>

                        <Col xs={{ span: 4, order: 3 }} lg={{ span: 3 }}>
                            <Stack
                                direction="horizontal"
                                gap={3}
                                className="justify-content-end"
                            >
                                <Nav.Link as={Link} to="/cart">
                                    <BsHandbag />
                                </Nav.Link>

                                <NavDropdown title={<BsPerson />} align="end">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Stack>
                        </Col>

                        <Col xs={{ span: 12, order: 4 }} className="d-lg-none">
                            <Navbar.Collapse id="main-nav">
                                <Nav>
                                    <Nav.Link as={NavLink} to="/">
                                        Home
                                    </Nav.Link>

                                    <Nav.Link as={NavLink} to="/about">
                                        About
                                    </Nav.Link>

                                    <Nav.Link as={NavLink} to="/products">
                                        Products
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
