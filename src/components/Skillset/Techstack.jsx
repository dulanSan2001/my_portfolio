import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiPhp, DiMysql, DiVisualstudio
} from "react-icons/di";
import {
  SiMaterialui,
  SiCsharp,
  SiHtml5
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* Database */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>

      {/* IDE / Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
