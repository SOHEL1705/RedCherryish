import React from 'react'

import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

const SignUpInputs = () => {
  return (
   <>
    <div className="signUp_panal">
                  <h1 className="signup_heading">SIGNUP</h1>
                  <Form>
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="Form_lable">
                        Name 
                      </Form.Label>
                      <Form.Control className="form_input" type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="Form_lable">
                        Email address
                      </Form.Label>
                      <Form.Control className="form_input" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="formBasicPassword">
                      <Form.Label className="Form_lable">Password</Form.Label>
                      <Form.Control className="form_input" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className="Form_lable">Confirm Password</Form.Label>
                        <Form.Control className="form_input" type="password" placeholder="Confirm Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      
                    <div className=" d-grid">
                        <button className=" form_btn" type="submit">
                          Create Account
                        </button>
                      </div>
                    <div className="mt-3">
                      <p style={{color:"white"}} className="mb-0   text-center">
                        Already have an account??{' '}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </Form>

                </div>
   </>
  )
}

export default SignUpInputs