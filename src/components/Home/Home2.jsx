import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-titl";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I have developed a strong interest in programming, and I believe
                that I have learned at least a few things from it.
                <br />
                <br /> II am proficient in the foundational languages of web
                development
                <i>
                  <b className="purple"> C++, CSS and JavaScript.</b>
                </i>
                <br />
                <br />
                II'm enthusiastic about innovating in &nbsp;
                <i>
                  <b className="purple">
                    {" "}
                    Web Technologies and enjoy designing websites using tools
                    like Figma.{" "}
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing with{" "}
                <b className="purple">ReactJs</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> Node.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Titl>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Titl>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span> with 
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a href="https://github.com/Anubhav89"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.linkedin.com/in/anubhav-bajpai-68150a223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                    <FaLinkedinIn/>
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.instagram.com/anubhav.bajpai.0809/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons">
                    <AiFillInstagram/>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <div>Home2</div>
    </>
  );
}

export default Home2;
