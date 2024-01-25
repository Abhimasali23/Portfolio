import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import c from "../assets/img/c.png";
import cpp from '../assets/img/c++.png'
import java from "../assets/img/java.png";
import python from '../assets/img/python.png'
import dsa from "../assets/img/dsa.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css-3.png";
import js from '../assets/img/js.png'
import reactjs from "../assets/img/react.png";
import nodejs from "../assets/img/nodejs.png";
import mysql from "../assets/img/mysql.png";
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,        
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    
    return (
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  swipeable={true}
                  draggable={true}
                  infinite={true}
                  partialVisible={false}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={c} alt="Image" />
                    <h5>C</h5>
                  </div>
                  <div className="item">
                    <img src={cpp} alt="Image" />
                    <h5>C++</h5>
                  </div>
                  <div className="item">
                    <img src={java} alt="Image" />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img src={python} alt="Image" />
                    <h5>Python</h5>
                  </div>
                  <div className="item">
                    <img src={dsa} alt="Image" />
                    <h5>Data Structures & Algorithms</h5>
                  </div>
                  <div className="item">
                    <img src={html} alt="Image" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={css} alt="Image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={js} alt="Image" />
                    <h5>JS</h5>
                  </div>
                  <div className="item">
                    <img src={reactjs} alt="Image" />
                    <h5>ReactJs</h5>
                  </div>
                  <div className="item">
                    <img src={nodejs} alt="Image" />
                    <h5>NodeJs</h5>
                  </div>
                  <div className="item">
                    <img src={mysql} alt="Image" />
                    <h5>MySQL</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} />
      </section>
    );
    
}