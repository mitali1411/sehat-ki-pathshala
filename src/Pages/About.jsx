import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faHeart, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const AboutContent = [
    {icon: faBullseye, title: "Vision", description: "To be the leading health coaching institute in India"},
    {icon: faHeart, title: "Values", description: "Integrity, Excellence, and Compassion"},
    {icon: faHandshakeSimple, title: "Promise", description: "Quality education and ongoing support"} 
  ]

  const TeamMembers = [
    {img: "/team-1.jpg", name: "Rajesh Batra", designation: "Founder & Lead Instructor"},
    {img: "/team-2.jpg", name: "Priya Batra", designation: "Nutrition Expert"},
    {img: "/team-3.jpg", name: "Karan Batra", designation: "Wellness Coach"},
  ]
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-4">
        <Container>
          <h1 className="text-center">About Sehat ki Pathshala</h1>
          <p className="lead text-center">
            Empowering individuals to lead healthier lives through education and guidance
          </p>
        </Container>
      </div>

      {/* Mission Section */}
      <Container className="py-5">
        <Row className="">
          <Col md={6} className='px-5'>
            <h2>Our Mission</h2>
            <p className="lead">
              At Sehat ki Pathshala, we are committed to transforming lives through
              comprehensive health and wellness education. Our mission is to create
              a community of certified health coaches who can make a real difference
              in people's lives.
            </p>
            <div className="mt-4">
              {AboutContent.map((item, index) => (
                <div className="d-flex align-items-center mb-3" key={index} style={{position:"relative", right:'80px'}}>
                  <FontAwesomeIcon icon={item.icon} className="text-primary" size="2x" />
                  <div className="">
                    <h5 className="mb-2">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <img src="/about-image.jpg" alt="Our Mission" className="img-fluid rounded" style={{height:'500px'}}/>
          </Col>
        </Row>
      </Container>

      {/* Team Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Our Expert Team</h2>
          <Row>
            {TeamMembers.map((item, index) => {
              return(
                <Col md={4}>
                <Card className="text-center mb-4" key={index}>
                <Card.Img variant="top" src={item.img} style={{height:'400px'}}/>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.designation}</Card.Text>
                </Card.Body>
              </Card>
          </Col>
              )
            })  
          }
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About; 