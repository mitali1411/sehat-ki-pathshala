import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../src/assets/Logo.png';

const Navbar = () => {
  return (
    <>
      <BootstrapNavbar className='top-0 shadow' bg="light" expand="lg" sticky="top">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            <img src={Logo} alt="Sehat ki Pathshala" style={{ width: '60px' }} />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/results">Our Results</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar; 