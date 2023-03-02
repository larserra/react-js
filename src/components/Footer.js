import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';


const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed='button'>
        <Container>
          <Navbar.Brand href="#home">Company</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer
