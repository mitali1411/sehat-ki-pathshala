import React from 'react'
import { Col, Row } from 'react-bootstrap'

const OurImpact = () => {
  return (
    <>
    {/* Statistics Section */}
        <div className="text-center mt-5 pt-5">
          <h2 className="mb-5">Our Impact</h2>
          <Row>
            <Col md={3} className="mb-4">
              <div className="h1 text-primary">1000+</div>
              <div className="text-muted">Success Stories</div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="h1 text-primary">95%</div>
              <div className="text-muted">Success Rate</div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="h1 text-primary">50+</div>
              <div className="text-muted">Expert Coaches</div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="h1 text-primary">10+</div>
              <div className="text-muted">Years Experience</div>
            </Col>
          </Row>
        </div>
    </>
  )
}

export default OurImpact