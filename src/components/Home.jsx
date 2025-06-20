import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUsers, faGlobe, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Become a Certified Health and Wellness Coach</h1>
              <p className="lead">Transform Lives and Your Income with Health Coach Certification</p>
              <Button variant="light" size="lg" className="mt-3">Get Started</Button>
            </Col>
            <Col md={6}>
              <img src="/hero-image.jpg" alt="Health Coach" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Why Choose Sehat ki Pathshala?</h2>
        <Row>
          <Col md={3}>
            <Card className="text-center p-3 mb-4">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" className="mb-3 text-primary" />
              <Card.Title>Expert Faculty</Card.Title>
              <Card.Text>Learn from industry experts with years of experience</Card.Text>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center p-3 mb-4">
              <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3 text-primary" />
              <Card.Title>Community Support</Card.Title>
              <Card.Text>Join a thriving community of health coaches</Card.Text>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center p-3 mb-4">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mb-3 text-primary" />
              <Card.Title>Global Recognition</Card.Title>
              <Card.Text>Internationally recognized certification</Card.Text>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center p-3 mb-4">
              <FontAwesomeIcon icon={faChartLine} size="3x" className="mb-3 text-primary" />
              <Card.Title>Career Growth</Card.Title>
              <Card.Text>Unlock endless opportunities in wellness</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Programs Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Our Programs</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Foundation Program</Card.Title>
                  <Card.Text>Start your journey in health and wellness coaching</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Advanced Certification</Card.Title>
                  <Card.Text>Deepen your knowledge and expertise</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Specialization Courses</Card.Title>
                  <Card.Text>Focus on specific areas of wellness</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home; 