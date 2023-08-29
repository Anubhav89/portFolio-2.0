import React from "react";

function Home(){
    return (
        <section>
            <Container fluid className = "home-section" id="home">
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} classNam="home-section">
                            <h1 style={{paddingBottom:15}} className="heading">
                                Hi There! {" "}
                                <span className="wave" role ="img" aria-aria-labelledby="wave">
                                👋🏻  
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> ANUBHAV BAJPAI</strong>
                            </h1>

                            <div style={{padding:50, textAlign:"left"}}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{paddingBottom: 20}}>
                            <img src="homelogo" alt="home pic" className="img-fluid" style={{maxHeight:"450px"}} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;