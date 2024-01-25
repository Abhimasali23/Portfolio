import { Nav, Col, Container, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/p1.png'
import projImg2 from "../assets/img/p2.png";
import projImg3 from "../assets/img/p3.png";
import certificate1 from '../assets/img/Python_certificate.jpg';
import certificate2 from '../assets/img/Java11_certificate.png';
import certificate3 from '../assets/img/Certificate - Abhishek Mallikarjun Masali - WE212109_page-0001.jpg';

import 'animate.css';
import TrackVisibility from "react-on-screen";



export const Projects = () => {

    const projects = [
      {
        title: "Cosmetic Website",
        description:
          " Designed a visually stunning cosmetic website from scratch using HTML, CSS &  JSc enhancing the online presence.",
        imgUrl: projImg1,
        Link: "https://samruddhibeautycenter.netlify.app/",
      },
      {
        title: "Income & Expense Tracker",
        description:
          "Designed a user-friendly dashboard that represents income sources, expenses using React components and state management.",
        imgUrl: projImg2,
        Link: "https://expense-tracker-nine-woad.vercel.app/",
      },

      {
        title: "Automatic Emailing System for Audit Processes",
        description:
          "Architected and implemented a robust Automatic Emailing System utilizing MERN technology.",
        imgUrl: projImg3,
        Link: "https://github.com/Fluid-Controls-ISO-Audit-Automation",
      },
    ];

    const certifcates = [
      {
        title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
        imgUrl: certificate1,
      },
      {
        title: "Learning Java 11",
        imgUrl: certificate2,
      },

      {
        title: "Python Programming Fundamentals",
        imgUrl: certificate3,
      },
    ];

    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animated_animated animate_bounce" : ""
                    }
                  >
                    <h2>Projects</h2>
                  </div>
                )}
              </TrackVisibility>
              <Tab.Container id="projects-tab" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Certification</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Resume</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((projects, index) => {
                        return <ProjectCard key={index} {...projects} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {certifcates.map((certifcates, index) => {
                        return <ProjectCard key={index} {...certifcates} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">     
                    <div className="button-resume">
                      <button >
                        <a id="resume" href="https://drive.google.com/file/d/17gLyISLBOu5kg5mTlYrjZCyIEAuQuHdm/view?usp=drive_link">View My Resume</a>
                      </button>
                    </div>                          
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
    );

    
}