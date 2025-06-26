import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const ContactForm = () => {
      const [formData, setFormData] = useState({
        name: "",
        contact: "",
        city: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // You can send formData to backend here
    };
  return (
   <div className='bg-light p-5'>
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="mb-4 text-center">Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
    // backgroundColor: "#f8f9fa",
    border: "2px solid #ced4da",
    borderRadius: "8px",
    padding: "10px"
  }}
              />
            </Form.Group>

            <Form.Group controlId="formContact" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter contact number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                style={{
    // backgroundColor: "#f8f9fa",
    border: "2px solid #ced4da",
    borderRadius: "8px",
    padding: "10px"
  }}
              />
            </Form.Group>

            <Form.Group controlId="formCity" className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={{
    // backgroundColor: "#f8f9fa",
    border: "2px solid #ced4da",
    borderRadius: "8px",
    padding: "10px"
  }}
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{
    // backgroundColor: "#f8f9fa",
    border: "2px solid #ced4da",
    borderRadius: "8px",
    padding: "10px"
  }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
   </div>

  )
}

export default ContactForm