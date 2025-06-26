import { Container, Row, Col, Card } from 'react-bootstrap';
import OurImpact from '../components/OurImpact';

const Results = () => {
  const results = [
    {
      name: "Priya Sharma",
      achievement: "Lost 15 kgs in 6 months",
      testimonial: "The program helped me achieve my health goals through personalized guidance.",
      image: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
    },
    {
      name: "Rahul Verma",
      achievement: "Reversed Pre-diabetes",
      testimonial: "Thanks to Sehat ki Pathshala, I was able to control my blood sugar naturally.",
      image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg"
    },
    {
      name: "Meera Patel",
      achievement: "Improved Overall Wellness",
      testimonial: "The holistic approach to health transformed my lifestyle completely.",
      image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <h1 className="text-center">Success Stories</h1>
          <p className="lead text-center">
            Real Results from Real People
          </p>
        </Container>
      </div>

      {/* Results Section */}
      <Container className="py-5">
        <Row>
          {results.map((result, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-sm">
                <div className="p-3">
                  <div 
                    className="rounded-circle overflow-hidden mx-auto mb-4 shadow" 
                    style={{ 
                      width: '150px', 
                      height: '150px',
                      border: '3px solid #0d6efd'
                    }}
                  >
                    <img 
                      src={result.image} 
                      alt={result.name}
                      className="img-fluid"
                      style={{ 
                        objectFit: 'cover', 
                        width: '100%', 
                        height: '100%' 
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/150';
                      }}
                    />
                  </div>
                  <Card.Title className="h4">{result.name}</Card.Title>
                  <div className="text-primary fw-bold mb-3">{result.achievement}</div>
                  <Card.Text className="text-muted">
                    "{result.testimonial}"
                  </Card.Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Statistics Section */}
        <OurImpact/>
      </Container>

      {/* Testimonial Banner */}
      <div className="bg-light py-5 mt-4">
        <Container className="text-center">
          <h3 className="mb-4">Ready to Start Your Transformation?</h3>
          <p className="lead mb-0">
            Join thousands of successful clients who have transformed their lives with our guidance.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Results; 