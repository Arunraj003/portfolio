import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import weatherimg from '../Assets/img/weather.png';
import quizimg from '../Assets/img/quiz.png';

const projects = [
  {
    title: 'Weather App',
    description: 'This Weather Application is a modern web application built using Vite and React. It provides users with real-time weather information for any city in the world. The application leverages the power of React for building a dynamic user interface and Vite for fast and efficient development and build processes.',
    
    imageUrl: weatherimg,
    
  },
  {
    title: 'Quiz App',
    description: '',
    imageUrl: quizimg,
  },
];

const Projects = () => {
  return (
    <Container id="projects" className="mt-5 pt-5">
      <h2>Projects</h2>

      <Row>
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.imageUrl} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                
              </Card.Body>
                
            </Card>
          </Col>
        ))}
      </Row>
      <a className='btn btn-md-dark fs-2 text-info' 
      href= 'https://arunraj003.github.co'>See More</a>
    </Container>
  );
};

export default Projects;
