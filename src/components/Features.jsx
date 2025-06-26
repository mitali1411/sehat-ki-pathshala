import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUsers, faGlobe, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
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
  )
}

export default Features