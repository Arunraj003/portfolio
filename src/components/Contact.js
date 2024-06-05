import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {

  return (
    <Container id="contact" className="mt-5 pt-5">
      <h2>Contact</h2>
      <Form >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button 
        variant="primary" 
        type="submit" 
        id="btn" className='btn btn-dark text-info'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
