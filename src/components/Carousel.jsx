import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../public/11.jpg'
import Image2 from '../../public/12.jpg'
import Image3 from '../../public/13.jpg'
import Image4 from '../../public/14.jpg'
import Image5 from '../../public/15.jpg'

const Carousel = () => {
  const result = [
    {img: Image4, desc: 'Rejected for her weight, Riddhi worked hard and lost 10kg in just 2 months, finally achieving her dream of becoming an air hostess.'}, 
    {img: Image1, desc: 'Mr. and Mrs. Jain lost 45kg together by changing their habits. Mr. Jain shed 14kg, and Mrs. Jain lost 31kg, overcoming asthma and BP issues. She no longer needs to carry her pump everywhere and now enjoys a healthier, happier life.'}, 
    {img: Image2, desc: 'Devendra lost 24kg by changing his habits. Once struggling with BP, diabetes, and walking issues, he now lives a healthy and active life.'},
    {img: Image3, desc: 'Namrata lost 35kg, overcoming health issues like BP and acidity that once required daily pills. Now, she lives a healthy, energetic, and pill-free life.'}, 
    {img: Image5, desc: 'Devendra lost 24kg by changing his habits. Once struggling with BP, diabetes, and walking issues, he now lives a healthy and active life.'}
  ]
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,         // Change based on design
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className='bg-white py-3'>
      <Container className="my-5">
      {/* <Row> */}
        {/* <Col> */}
          <h2 className="mb-5 text-center">Our Results</h2>
          <Slider {...settings}>
            {
              result.map((item, index)=>
              <div className='px-2'>
                <Card className='bg-white ms-auto px-1 pb-3 pt-1 d-flex align-items-center justify-content-center flex-column' key={index}>
                <Card.Img src={item.img} alt="" className='w-100'/>
                <Card.Text className='mt-3 px-3'>{item.desc}</Card.Text>
              </Card>
              </div>
              )
            }
          </Slider>
        {/* </Col> */}
      {/* </Row> */}
    </Container>
    </div>
  )
}

export default Carousel