import React from 'react'
import CountUp from 'react-countup'
import { Col, Container, Row } from 'react-bootstrap'

const OurImpact = () => {
  const counter = [
    { count: 1000, title: 'Success Stories' },
    { count: 95, title: 'Success Rate' },
    { count: 50, title: 'Expert Coaches' },
    { count: 10, title: 'Years Experience' },
  ]
  return (
    <div>
      <Container>
        <div className="text-center mt-5 pt-5">
          <h2 className="mb-5">Our Impact</h2>
          <Row>
            {counter.map((item, index) => 
            <Col md={3} className="mb-4" key={index}>
              <div className="h1 text-primary">
                <CountUp end={item.count} duration={2}/>
              </div>
              <div className="text-muted">{item.title}</div>
            </Col>)}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default OurImpact