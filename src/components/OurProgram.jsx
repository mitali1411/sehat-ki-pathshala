import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const OurProgram = () => {
  return (
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
  )
}

export default OurProgram