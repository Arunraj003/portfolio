import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='bg-secondary' variant="light" 
    expand="lg" fixed="top">
      <Navbar.Brand href="#home" className='container text-info ms-3 fs-2'>My Portflio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-6 p-3 fs-5">
          <Nav.Link href="#projects" className='text-info '>Projects</Nav.Link>
          <Nav.Link href="#skills" className='text-info '>Skills</Nav.Link>
          <Nav.Link href="#contact" className='text-info '>Contact</Nav.Link>
          <Nav.Link href="#about" className='text-info '>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
