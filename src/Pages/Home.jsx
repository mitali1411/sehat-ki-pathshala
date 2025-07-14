import '../../src/App.css';
import HeroSection from '../components/HeroSection';
import OurProgram from '../components/OurProgram';
import ContactForm from '../components/ContactForm';
import OurImpact from '../components/OurImpact';
import Carousel from '../components/Carousel';
import OurServices from '../components/OurServices';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    <HeroSection/>
    {/* <InfoCard/> */}
    <OurImpact/>
    <Carousel/>
    <OurServices/>
    <OurProgram/> 
    <ContactForm/>     
    </>
  );
};

export default Home; 