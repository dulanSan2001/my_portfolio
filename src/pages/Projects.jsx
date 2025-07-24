import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Olinta-Enterprise-Billing-System"
              description="The Olinta Enterprises Billing System is a desktop-based application developed in C# with Windows Forms, designed to streamline the sales and billing process for a retail business. The system allows staff to manage products, generate invoices, update stock, and calculate totals with discounts in real time.
Key features include customer and product management, automated invoice generation, search functionality, and a user-friendly interface tailored for daily use by non-technical staff. The solution enhances accuracy, reduces manual errors, and improves overall billing efficiency at the point of sale."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="ConnectSphere – Full-Stack Social Media Platform"
              description="ConnectSphere is a full-stack social media platform developed to foster meaningful user engagement through interactive posts, emotional tracking, and personalized social experiences. Built using React.js (frontend), Node.js/Express.js (backend), and MySQL (database), it enables users to register, create posts, comment, like, and share their daily lives. A standout feature is the integrated Mood Calendar, which allows users to log their emotional state daily and view their mental health trends over time — making ConnectSphere a powerful tool to Pare more than just a traditional social media app."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Mental Health Tips – Wellness Awareness Website"
              description="Mental Health Tips is a fully responsive, content-rich website dedicated to promoting mental wellness and fostering self-care habits. Built with HTML, CSS (Bootstrap framework), and jQuery, the platform delivers practical advice, motivational articles, and inspiring user testimonials designed to raise awareness about mental health issues and encourage positive lifestyle changes.

Key features include smooth animations and transitions for an engaging user experience, an intuitive and accessible layout optimized for all devices, and interactive components such as a contact form to facilitate user feedback."
              ghLink="https://github.com/dulanSan2001/mental_health_tips"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects