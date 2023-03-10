import React, { useState, useEffect } from "react";

import {
  Image,
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import sign_up from "../image/sign_up.svg";
import { RegisterIcons } from "../template/Icons";
import { Link } from "react-router-dom";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  isStaff: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {};
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main>
     
        <Row>
          <Card className="m-5 p-5">
            <h1 className="text-center m-2 p-2">REGISTER</h1>

            <Col >
              <Image src={sign_up} alt="sign_up" />

              <Form className="m-2 p-2">
              <Card className=" p-5">
              <Row>
                  <Col md={6} sm={12} lg={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                 
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
           
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                
                    <Form.Group className="mb-3">
                      <Form.Label>Password Confirm</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password Confirm"
                      />
                    </Form.Group>
                    </Col>
                 <div><Button variant="outline-primary" type="submit">
                      <h4>
                        <RegisterIcons /> Submit
                      </h4>
                    </Button></div>
                    
              

                  <h4>
                    Already a member?<Link to="/login"> Login</Link>
                  </h4>
                </Row>
                </Card>
                
              </Form>
            </Col>
          </Card>
        </Row>
     
    </main>
  );
};

export default Register;
