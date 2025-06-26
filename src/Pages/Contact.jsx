import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <h1 className="text-center">Contact Us</h1>
          <p className="lead text-center">
            Get in touch with us for any queries about our courses
          </p>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-5">
        <Row>
          <Col md={6} className="mb-4">
            <h2 className="mb-4">Send us a Message</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <h2 className="mb-4">Contact Information</h2>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-primary me-3" size="2x" />
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <p className="mb-0">41 A, Ashish Nagar Garden, Bengali Square, Indore - 452016</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FontAwesomeIcon icon={faPhone} className="text-primary me-3" size="2x" />
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p className="mb-0">+91 9074010119, +91 8718810605</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-primary me-3" size="2x" />
                  <div>
                    <h5 className="mb-1">Email</h5>
                    <p className="mb-0">info@sehatkipathshala.com</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Google Maps Embed */}
            <div className="mt-4">
              <h5 className="mb-3">Find us on Map</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2061541753424!2d77.09292931492145!3d28.459044982486377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18c1b6d1a35d%3A0x9c1c0c5b7c0d0c1a!2sGolf%20Course%20Rd%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1625641230000!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact; 