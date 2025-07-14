import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer style={{ background: '#000', padding: '40px 10px' }}>
      <Container>
        <Row className="mb-4 align-items-center">

          <Col md={4}>
            <Image src={Logo} style={{width:'180px'}}/>
          </Col>
        
          <Col md={4} className="">
            <ul className='list-unstyled'>
              <h5>Links</h5>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/results">Results</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Col>

          <Col md={4} className="">
            <ul className='list-unstyled'>
              <h5>Info:</h5>
              <li><FontAwesomeIcon className='icon' icon={faPhone}/><a href="tel: +918718810605">8718810605</a></li>
              <li><FontAwesomeIcon className='icon' icon={faPhone}/><a href="tel: +919074010119">9074010119</a></li>
              <li><FontAwesomeIcon className='icon' icon={faEnvelope}/><a href="mailto:sehatkipathshala@gmail.com">sehatkipathshala@gmail.com</a></li>
              <li><FontAwesomeIcon className='icon' icon={faLocation}/><a href="https://maps.app.goo.gl/bCCQKPrvQRG84g7w6" target="_blank">41 A, Ashish Nagar Garden, Bengali Square, Indore - 452016</a></li>
            </ul>
          </Col>

        </Row>
        <hr />
        <Row className='mt-4'>
          <Col md={6} className="">
            <div className='copy'>
              &copy; {new Date().getFullYear()} SEHAT KI PATHSHALA. All rights reserved.
            </div>
          </Col>
          <Col md={4} className="text-md-end">
            <a href="https://www.instagram.com/indore_ins_theatre_/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
            <a href="https://www.facebook.com/search/top?q=%E0%A4%87%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A4%A4%E0%A5%80%20%E0%A4%A8%E0%A4%BE%E0%A4%9F%E0%A5%8D%E0%A4%AF%20%E0%A4%B8%E0%A4%AE%E0%A4%BF%E0%A4%A4%E0%A4%BF%20%E0%A4%B8%E0%A5%80%E0%A4%A7%E0%A5%80" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} className='icon'/></a>
            <a href="https://www.youtube.com/@INSSIDHI" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className='icon'/></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
} 

export default Footer