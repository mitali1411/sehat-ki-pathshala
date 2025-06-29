import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faUserTie, faUtensils, faSpa, faRunning, faPeopleGroup, faBookOpen, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from 'react-bootstrap'

const OurServices = () => {
    // const [isHovered, setIsHovered] = useState(false);

    // const boxStyle = {
    //     backgroundColor: isHovered ? "#9ba329" : "#f8f9fa", // hover vs default bg
    //     color: isHovered ? "#fff" : "#9ba329",
    //     cursor: "pointer",
    //     transition: "all 0.4s ease"
    // };

    const services = [
        {icon: faHeadset, desciption: "24X7 Coach Support"},
        {icon: faUserTie, desciption: "1-1 Coaching"},
        {icon: faUtensils, desciption: "Meal/Diet Plan"},
        {icon: faSpa, desciption: "Wellness Saturday"},
        {icon: faRunning, desciption: "Fat Loss Marathon"},
        {icon: faPeopleGroup, desciption: "Family Day Celebration"},
        {icon: faBookOpen, desciption: "Daily Health Education"},
        {icon: faHandshake, desciption: "Community Support"},
    ]
  return (
        <div className='p-5'>
            <Container>
                <h2 className='text-center mb-3'>Our Services</h2>
                <Row>   
                {
                services.map((item, index) => 
                <Col md={3} key={index}>
                    <div className='bg-light shadow p-5 m-2 rounded'
                        // style={boxStyle}
                        // onMouseEnter={() => setIsHovered(true)}
                        // onMouseLeave={() => setIsHovered(false)}>
                        >
                        <FontAwesomeIcon icon={item.icon} size="4x" className="mb-3 text-primary" />
                        <p className='text-center mt-2' style={{fontSize:'18px'}}>{item.desciption}</p>
                    </div>
                </Col>)
                }
                </Row>
            </Container>
        </div>
  )
}

export default OurServices