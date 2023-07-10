import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
 
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tramos">Tramos</Nav.Link>
            <Nav.Link href="/clientes">Clientes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
};

export default NavBar;
