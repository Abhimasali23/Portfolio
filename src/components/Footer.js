import {Container, Col, Row } from "react-bootstrap"
import logo from "../assets/img/d.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={6} >
                        <img src={logo} alt="Logo" className="flogo"/>
                    </Col>
                    <Col id="foot" sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/abhishek-masali-178b58205/"><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/abhimasali_23/"><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}