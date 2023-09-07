import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import parkandgo from "../../assets/parkandgo.svg";
import portfolio from "../../assets/portfolio.svg";
import wokeye from "../../assets/wokeye.svg";
import emart from "../../assets/emart.svg";
import loruki from "../../assets/loruki.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Port-Folio"
              description="My personal portfolio where you will get to know about me. The technologies used are Reactjs, Bootstrap, MaterialUi."
              ghLink="https://github.com/Anubhav89/portFolio-2.0"
              demoLink="https://anubhav0809.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emart}
              isBlog={false}
              title="E-Mart"
              description="A e-commerce application where one can - purchase clothing items.Assembled HTML5, CSS3, and JavaScript elements.It is possible to observe current global trends."
              ghLink="https://github.com/Anubhav89/E-Mart"
              demoLink="https://ecommerce-mart.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkandgo}
              isBlog={false}
              title="Park-N-Go"
              description="A website which stores the information of the vehicles which are in parking.The technologies it uses is Reactjs, Bootstrap. Easy to check the records of the vehicles. "
              ghLink="https://github.com/Anubhav89/ParkAndGo"
              demoLink="https://parkandgo.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wokeye}
              isBlog={false}
              title="Wokeye"
              description="Created a Project Management application where one can create, delegate and monitor the tasks. Developed the React components and incorporated Redux for handling the application's state management."
              ghLink="https://github.com/Anubhav89/wokeye"
              demoLink="https://wokeye.netlify.app/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loruki}
              isBlog={false}
              title="Loruki"
              description="A clone of deployment sites where we can deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform"
              ghLink="https://github.com/Anubhav89/Loruki-website"
              demoLink="https://tourmaline-cannoli-5d941b.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
