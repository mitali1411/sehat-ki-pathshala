import '../../src/App.css';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import OurProgram from '../components/OurProgram';
import InfoCard from '../components/InfoCard';
import ContactForm from '../components/ContactForm';
import OurImpact from '../components/OurImpact';
import Carousel from '../components/Carousel';
import OurServices from '../components/OurServices';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <InfoCard/>
    <Features/>
    <Carousel/>
    <OurServices/>
    <OurProgram/> 
    <OurImpact/>
    <ContactForm/>     
    </>
  );
};

export default Home; 