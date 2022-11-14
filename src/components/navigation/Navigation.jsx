import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./Navigation.module.css";
const menu = [
    {
        path: "/",
        label: "Trang chủ",
    },
    {
        path: "/services",
        label: "services",
    },
    {
        path: "/shop",
        label: "Shop",
    },
    {
        path: "/about",
        label: "About",
    },
    {
        path: "/blog",
        label: "Blog",
    },
    {
        path: "/contact",
        label: "Contact",
    },
];

const Navigation = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.logo}>Beauty</div>
                <div className={styles.listnav}>
                    {menu.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            children={item.label}
                            className={({ isActive }) =>
                                isActive ? styles.active : styles.link
                            }
                        
                        />
                    ))}
                </div>
                <div className={styles.user}>
                    <div className={styles.search}><i className="bi bi-search"></i></div>
                    <div className={styles.login}>
                        <Button className={styles.btn}  onClick={() => setModalShow(true)}>
                        <i className="bi bi-people"></i>
                            </Button>
                            <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            />
                        
                        </div>
                </div>
            </nav>
            
        </div>
    );
};
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}


  


export default Navigation;
