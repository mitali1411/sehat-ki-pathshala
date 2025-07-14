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

 <div className="bg-light py-5">
        <Container>
          <Row>
            {results.map((item, index) => {
              return(
                <Col md={4} key={index}>
                <Card className="text-center mb-4" key={index}>
                <Card.Img variant="top" src={item.image} style={{height:'400px'}}/>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.testimonial}</Card.Text>
                </Card.Body>
              </Card>
          </Col>
              )
            })  
          }
          </Row>
        </Container>
      </div>

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