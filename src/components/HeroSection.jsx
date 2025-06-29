import { Container, Button} from 'react-bootstrap';
import Logo from '../../src/assets/Logo.png';
import FsaaiLogo from '../../src/assets/fssai-logo.png'

const HeroSection = () => {
  return (
      <div className="hero-section bg-primary py-5">
        <Container className='d-flex align-items-center justify-content-center flex-column'>
              <img src={Logo} alt="Logo" style={{height:'130px', width:'150px'}} />
              <h1 className='mt-3 text-center'>Together for a Healthier Tommorow</h1>
              <p className="lead text-center">Transform Lives and Your Income with Health Coach Certification</p>
              <span className='w-25 d-flex align-items-center justify-content-center'>
                <img src={FsaaiLogo} alt="" style={{width:'100px'}}/>
                <p className='display-6 mt-3 text-center'>Approved</p>
              </span>
              {/* <Button variant="light" size="lg" className="mt-3">Get Started</Button> */}
        </Container>
      </div>
  )
}

export default HeroSection