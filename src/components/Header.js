import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg="dark"  expand="lg" variant="dark" sticky="top">
      <Container fluid>
    <LinkContainer to='/'>
        <Navbar.Brand >Company</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll> 
            <LinkContainer to='/'>
              <Nav.Link href="#action1">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='about/'>
              <Nav.Link href="#action2">About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Others" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Resume</NavDropdown.Item>
              
              <NavDropdown.Item href="#action4">
              Portfolio
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <LinkContainer to='react-js++/'>
              <NavDropdown.Item >
                Code REACT JS ++
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='react-css++/'>
              <NavDropdown.Item >
                Code REACT CSS ++
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='python-drf++/'>
              <NavDropdown.Item >
                Code DJANGO REST FRAMEWORK ++
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to='/contact'>
            <Nav.Link href="#" >
              Contacts
            </Nav.Link>
            </LinkContainer >
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
