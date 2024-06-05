import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Arun from '../Assets/img/ARUNRAJ.jpg';

const About = () => {
  return (
    <Container id="about" className="mt-5 pt-5">
      <Row>
        <Col md={6}>
          <h1 className='text-danger bg-md'>Hello <span className='text-dark'>Arun Raj R</span>
          <p>I'm a Frontend Developer </p></h1>
          <img src={Arun} alt="Arunraj R"
            className="img-fluid rounded-circle " />
        </Col>
        <Col md={6}>
          <h2 className="fs-3 text-danger">About Me</h2>
          <p className="fs-5">
            Hello! I'm Arun Raj R, a passionate and dedicated Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I recently graduated with a Bachelor of Computer Applications (BCA) from Karan Arts and Science College, Tiruvannamalai, where I achieved an impressive 86%.
          </p>
          <h2 className="fs-3 text-danger">Education</h2>
          <p className="fs-5">
            <ul>
              <li>
                Bachelor of Computer Applications (BCA)
              </li>
              <li>
                Karan Arts and Science College, Tiruvannamalai
                Graduated with 86%
                Year: 2023
              </li>
              <li>
                Higher Secondary Education (HSE)
                Sri. V.D.S. Jain Higher Secondary School
                Completed with 51%
                Year: 2020
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </Container >
  );
};

export default About;
