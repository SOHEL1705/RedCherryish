import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signin = () => {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                  
                <h1
                  style={{ paddingBottom: 15, Color: "red" }}
                  className="heading"
                >
                  Hi There!
                </h1>

                <div class="box">
                <div class="wrapper">
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> MOHAMMAD SOHEL</strong>
                </h1>
		
	</div></div>
                <div
                  style={{
                    padding: 50,
                    textAlign: "left",
                  }}
                ></div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <div className="signIn_panal">
                  <h1 className="signup_heading">SIGNUP</h1>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="Form_lable">
                        Email address
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="Form_lable">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className=" d-grid">
                    <button className="form_btn"  type="submit">
                      Submit
                    </button>
                    </div>
                  </Form>
                </div>

              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default Signin;
