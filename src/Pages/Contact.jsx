import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm'

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
            {/* <Form onSubmit={handleSubmit}>
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
            </Form> */}
            <ContactForm/>
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
                    <p className="mb-0">sehatkipathshala@gmail.com</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Google Maps Embed */}
            <div className="mt-4">
              <h5 className="mb-3">Find us on Map</h5>
              <div className="ratio ratio-16x9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.330600080844!2d75.90631607508222!3d22.715950279389823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3aa1b5c71e7%3A0x41d731f20524dada!2sSehat%20Ki%20Pathshala%20-%20Deep&#39;s%20Weight%20Loss%20%26%20Lifestyle%20Coach!5e0!3m2!1sen!2sin!4v1752476984316!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact; 