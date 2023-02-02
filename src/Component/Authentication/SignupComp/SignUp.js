import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignUpInputs from "./SignUpInputs";

const SignUp = () => {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={6} className="home-header">
                <h1
                  style={{ paddingBottom: 15, Color: "red" }}
                  className="heading"
                >
                  Hi There!
                </h1>
                    <h1 className="heading-name">
                      I'M
                      <strong className="main-name"> MOHAMMAD SOHEL</strong>
                    </h1>
                <div className="Wrapper"
                  style={{
                  backgroundColor:"rgba(255, 0, 0, 0.019)"}}
                >New User?</div>
              </Col>
              <Col md={6} style={{ paddingBottom: 30 }}>
               <SignUpInputs/>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default SignUp;
