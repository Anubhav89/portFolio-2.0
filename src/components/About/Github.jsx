import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github(){
    return (
        <Row style={{justifyContent:"center", paddingBottom: "10px"}}>
            <h1 className="project-heading" style={{paddingBottom:"20px"}}>
                Days I <strong className="purple"> Code</strong>
            </h1>
            <GitHubCalendar
                username="Anubhav89"
                blockMargin={5}
                blockSize={15}
                color = "#c084f5"
                fontSize={10}
            />
        </Row>
    )
}

export default Github;