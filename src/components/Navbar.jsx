import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../src/assets/Logo.png';

const Navbar = () => {
  const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/results', label: 'Results' },
  { to: '/contact', label: 'Contact' },
];

  const location = useLocation();
  return (
    <>
      <BootstrapNavbar className='top-0 shadow' bg="light" expand="lg" sticky="top">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            <img src={Logo} alt="Sehat ki Pathshala" style={{ width: '70px' }} />
            <span className='mx-2 text-center text-uppercase body-1'>Sehat ki Pathshala</span>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link, index) => 
              <Nav.Link as={Link} key={index} to={link.to} style={{
                  color: location.pathname === link.to ? '#bdd33eff' : '#000',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  marginLeft: '1rem',
                  transition: 'color 0.2s',
                }}>{link.label}</Nav.Link>)}
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar; 