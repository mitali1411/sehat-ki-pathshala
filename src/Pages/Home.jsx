import '../../src/App.css';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import OurProgram from '../components/OurProgram';
import InfoCard from '../components/InfoCard';
import ContactForm from '../components/ContactForm';
import OurImpact from '../components/OurImpact';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <InfoCard/>
    <Features/>
    <OurProgram/> 
    <OurImpact/>
    <ContactForm/>     
    </>
  );
};

export default Home; 