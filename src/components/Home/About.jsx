import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="yellow"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    Hi, my name is <span className="yellow">Dulan Sandaruwan</span> and I'm from <span className="yellow">Kandy</span>.
    <br />
    <br />
    I recently completed my <b className="yellow">HNDIT qualification</b>, and I’m passionate about creating high-quality digital experiences.
    <br />
    <br />
    As a <b className="yellow">Junior Fullstack Developer</b> and an aspiring <b className="yellow">QA Engineer</b>, I enjoy solving problems, learning new technologies, and contributing to real-world projects.
    <br />
    <br />
    I'm proficient in <b className="yellow">HTML, CSS, JavaScript, Java, React.js, Node.js, and MYSQL</b>. I'm also currently developing my skills in
    <b className="yellow"> manual testing, bug reporting, and test case design</b> to pursue a role in Quality Assurance.
    <br />
    <br />
    I have a strong interest in building <i><b className="yellow">modern web applications</b></i> and exploring areas related to
    <i><b className="yellow"> software quality, frontend design, and user experience.</b></i>
  </p>
</Col>

              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/dulanSan2001"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/dulan-sandaruwan-265a1635a/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About