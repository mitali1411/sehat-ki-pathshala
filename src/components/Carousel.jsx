import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../public/11.jpg'
import Image2 from '../../public/12.jpg'
import Image3 from '../../public/13.jpg'
import Image4 from '../../public/14.jpg'
import Image5 from '../../public/15.jpg'

const Carousel = () => {
  const result = [
    {img: Image1}, {img: Image2}, {img: Image3},{img: Image4}, {img: Image5}
  ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,         // Change based on design
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <div className='bg-white py-3'>
      <Container className="my-5">
      <Row>
        <Col>
          <h2 className="mb-5 text-center">Our Results</h2>
          <Slider {...settings}>
            {
              result.map((item, index)=>
              <div className='p-2' key={index}>
                <img src={item.img} alt="" />
              </div>)
            }
          </Slider>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Carousel