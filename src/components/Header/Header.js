import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div>
            <>
  <Navbar bg="light" variant="light">
    <Container className="container-fluid">
    <Navbar.Brand href="#home">World Wide Education</Navbar.Brand>
    <Nav className="ms-auto">
        <Stack direction="horizontal" gap={3}>
            <NavLink
                to="/home"
                activeStyle={{
                   fontWeight: "bold",
                   color: "red",
                   textDecoration: "none"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/services" 
                activeStyle={{
                   fontWeight: "bold",
                   color: "red",
                   textDecoration: "none"
                }}
            >
                Services
            </NavLink>
            <NavLink
                to="/about"
                activeStyle={{
                   fontWeight: "bold",
                   color: "red",
                   textDecoration: "none"
                }}
            >
                About Us
            </NavLink>
            <NavLink
                to="/details"
                activeStyle={{
                    fontSize: '20px',
                   fontWeight: "bold",
                   color: "red",
                   textDecoration: "none"
                }}
            >
                Details
            </NavLink>
        </Stack>
    </Nav>
    </Container>
  </Navbar>
</>
            </div>
        </div>
    );
};

export default Header;