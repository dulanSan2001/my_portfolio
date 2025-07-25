import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Dulan Anupama</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />

                {/* <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/1AwkPJ_eHBgzvHDyExLMyTxRDeutb-N7P/view?usp=drive_link"
                  target="_blank"
                  style={{ maxWidth: "250px", marginTop: "20px" }}
                >
                  &nbsp;Download Resume
                </Button> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

        </Container>
      </Container>
      <About />

    </section>
  );
}

export default Home