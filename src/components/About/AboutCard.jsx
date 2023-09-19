import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AbourCard() {
  return(
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anubhav Bajpai </span>
            from <span className="purple">Kanpur, India.</span>
            <br />I am a final year student pursing Bachelor of Technology in
            Computer Science and Engineering at SRM Institute of Science and
            Technology.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore new things
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Each of us can make a difference. Together we make change."{" "}
          </p>
          <footer className="blockquote-footer">Anubhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
export default AbourCard;
