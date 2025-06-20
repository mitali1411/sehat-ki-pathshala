import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Sehat ki Pathshala</h5>
            <p>
              Empowering individuals to become certified health and wellness coaches,
              making a positive impact on people's lives through holistic wellness education.
            </p>
          </Col>
          <Col md={3} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/courses" className="text-white">Our Courses</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={5} className="mb-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                41 A, Ashish Nagar Garden, Bengali Square, Indore - 452016
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +91 9074010119
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +91 8718810605
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                xyz@gmail.com
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={10} className="text-center text-md-start">
            <p className="mb-0">&copy; 2024 Sehat ki Pathshala. All rights reserved.</p>
          </Col>
          <Col md={2} className="d-flex justify-content-end">
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 