import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div>
            <>
  <Navbar style={{ background: 'rgb(191, 213, 221)'}}  variant="light">
    <Container>
    <Navbar.Brand style={{fontSize: '30px', fontWeight: 'bold'}} href="#home">World Wide Education</Navbar.Brand>
    <Nav className="ms-auto">
        <Stack direction="horizontal" gap={5} className="">
            <NavLink
                to="/home"
                style={{ color: 'rgb(19, 63, 99)',
                    fontSize: '18px',
                    textDecoration: "none"}}
                activeStyle={{
                    fontSize: '18px',
                   fontWeight: "bold",
                   color: "#333",
                   textDecoration: "none"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/services" 
                style={{ color: 'rgb(35, 105, 163)',
                    fontSize: '18px',
                    textDecoration: "none"}}
                activeStyle={{
                    fontSize: '18px',
                   fontWeight: "bold",
                   color: "#333",
                   textDecoration: "none"
                }}
            >
                Services
            </NavLink>
            <NavLink
                to="/about"
                style={{ color: 'rgb(35, 105, 163)',
                    fontSize: '18px',
                    textDecoration: "none"}}
                activeStyle={{
                    fontSize: '18px',
                   fontWeight: "bold",
                   color: "#333",
                   textDecoration: "none"
                }}
            >
                About Us
            </NavLink>
            <NavLink
                to="/contact"
                style={{ color: 'rgb(35, 105, 163)',
                    fontSize: '18px',
                    textDecoration: "none"}}
                activeStyle={{
                    fontSize: '18px',
                   fontWeight: "bold",
                   color: "#333",
                   textDecoration: "none"
                }}
            >
                Contact
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