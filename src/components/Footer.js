import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-5 p-4 text-center">
      <Container>
        <h3 className="fs-2">My Portflio</h3>

        <p>© 2024 Arun Raj R. All Rights Reserved.</p>
        <p className="text-info">Contact
          <a href="mailto:arunr6506@gmail.com"
            className=" d-block text-warning fs-4"> arunr6506@gmail.com </a>
          <a href="www.linkedin.com/in/arunraj003"
            className="d-block text-warning fs-4"> LinkedIn </a>
          <a href="https://github.com/Arunraj003"
            className="d-block text-warning fs-4"> Github </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
