import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faUserTie, faUtensils, faSpa, faRunning, faPeopleGroup, faBookOpen, faHandshake, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Container, Row } from 'react-bootstrap'

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
        {icon: faWeightScale, desciption: "Weight Gain & Weight Loss"},
    ]
  return (
        <div className='p-5'>
            <Container>
                <h2 className='text-center mb-3'>Our Services</h2>
                <Row>   
                {
                services.map((item, index) => 
                <Col key={index} className='d-flex align-items-center justify-content-center g-3'>
                    <Card className='bg-light shadow px-2 py-5 rounded d-flex align-items-center justify-content-center flex-column'
                        style={{height: 'auto', width: '290px'}}
                        // onMouseEnter={() => setIsHovered(true)}
                        // onMouseLeave={() => setIsHovered(false)}>
                        >
                        <FontAwesomeIcon icon={item.icon} size="4x" className="mb-3 text-primary" />
                        <Card.Text className='mt-2 text-center' style={{fontSize:'18px'}}>{item.desciption}</Card.Text>
                    </Card>
                </Col>)
                }
                </Row>
            </Container>
        </div>
  )
}

export default OurServices