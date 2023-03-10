import React from "react";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {CartIcons} from './template/Icons'
import {useSelector} from 'react-redux'


const Header = () => {

const {quantity} = useSelector((state)=> state.cart)



  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Company</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link href="#action1">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about/">
              <Nav.Link href="#action2">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="products/">
              <Nav.Link >Products</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Others" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Resume</NavDropdown.Item>

              <NavDropdown.Item href="#action4">Portfolio</NavDropdown.Item>

              <NavDropdown.Divider />
              <LinkContainer to="/">
                <NavDropdown.Item>Code REACT JS ++</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item>Code REACT CSS ++</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item>
                  Code DJANGO REST FRAMEWORK ++
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            
            <LinkContainer to="/contact">
              <Nav.Link >Contacts</Nav.Link>
            </LinkContainer>
         
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          
              <div>
              <LinkContainer to="/cart">
              <Nav.Link >
              <CartIcons/>
              <Badge bg='danger' pill='true'>
              {quantity}
              </Badge>
              </Nav.Link>
             </LinkContainer>
             
             </div> 
            <LinkContainer to="/register">
              <Nav.Link >Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link >Logout</Nav.Link>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
