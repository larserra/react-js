import React, { useState, useEffect } from "react";
import InputForm from '../authentication/InputForms'

import {Image,Card,Row,Col,Form,Button,} from "react-bootstrap";

import sign_up from "../image/sign_up.svg";
import sign_in from "../image/sign_in.svg";
import { RegisterIcons, SigninIcons } from "../template/Icons";


const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  isStaff: true,
};

const Register = () => {

  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {};

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const toggleInfo =() =>{setValue({...value, isStaff: !value.isStaff})}

  return (
    <main>
     
        <Row>
          <Card className="m-5 p-5">
            <h1 className="text-center m-2 p-2">
            {value.isStaff ? 'LOGIN': 'REGISTER'}</h1>

            <Col >
            {value.isStaff ? <> <Image src={sign_in} alt="sign_in" /></> : <> <Image src={sign_up} alt="sign_up" /></>}
              

              <Form className="m-2 p-2">
              <Card className=" p-5">
              <Row>
                  <Col md={6} sm={12} lg={4}>
                  {!value.isStaff ? (<>
                  <InputForm label='First Name' type='text' name='first_name' value={value.first_name} onChange={handleChange} placeholder='First Name' />
                  <InputForm label='Last Name' type='text' name='last_name' value={value.last_name} onChange={handleChange} placeholder='Lirst Name' />
                  <InputForm label='Email' type='email' name='email' value={value.email} onChange={handleChange} placeholder='Email' />
                  <InputForm label='Password' type='password' name='password' value={value.password} onChange={handleChange} placeholder='Password' />
                  <InputForm label='Password Confirm' type='password' name='password_confirm)' value={value.password_confirm} onChange={handleChange} placeholder='Password Confirm' />
                  </>)
                 : (
                  <>
                  <InputForm label='Email' type='email' name='email' value={value.email} onChange={handleChange} placeholder='Email' />
                  <InputForm label='Password' type='password' name='password' value={value.password} onChange={handleChange} placeholder='Password' />
                  </>
                  )
                  }
                  
                    </Col>
                 <div><Button variant="outline-primary" type="submit" onSubmit={onSubmit}>
                      <h4>
                        {value.isStaff ? <><SigninIcons /> Submit</> : <><RegisterIcons /> Submit</>}
              
                      </h4>
                    </Button></div>
                    
              

                  <h4>
                  {value.isStaff ? 'Not a member yet?' : 'Already a member?'}
          <Button type='button' onClick={toggleInfo}>{value.isStaff ? 'Register' : 'Login'}</Button>
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
