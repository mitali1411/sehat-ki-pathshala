import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const contact = [
        {icon: faEnvelope, detail: 'sehatkipathshala@mail.com', link:"mailto:sehatkipathshala@mail.com"},
        {icon: faPhone, detail: '9074010119', link:"tel:+919074010119"},
        {icon: faPhone, detail: '8718810605', link:"tel:+918718810605"},
    ]
  return (
    <div style={{ backgroundColor: "#1a1a1a", padding: "3px 30px" }}>
      <Nav>
        <Row className="">
          <Col md="auto" className="d-flex align-items-center gap-3">
            {
                contact.map((item, index)=> 
                    <div className='d-flex align-items-center' key={index}>
                        <FontAwesomeIcon icon={item.icon} className="text-primary" />
                        <Nav.Link className='text-white' href={item.link}>{item.detail}</Nav.Link>
                    </div>
                )
            }
          </Col>
        </Row>
      </Nav>
    </div>
  )
}

export default Header