import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Headroom from 'react-headroom';

const MyNavbar = () => {
  return (
    <Headroom>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#summary">Kang-jiin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutme">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#connect">Connect</Nav.Link>
            </Nav>
            <Nav>
              <Button
                variant="dark"
                href="https://github.com/kang-jiin"
                target="_blank"
              >
                Github
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Headroom>
  );
};

export default React.memo(MyNavbar);
