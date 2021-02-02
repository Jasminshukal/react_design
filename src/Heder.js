import './css/bootstrap.min.css';
import './css/templatemo-softy-pinko.css';
import LogoBlack from "./images/logo-black.png";
import { Link } from "react-scroll";
import { Navbar,Nav } from 'react-bootstrap';
import React,{ useState} from "react";

function Heder() {
    const [expanded, setExpanded] = useState(false);
  return (
      <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <Navbar bg="light" expand="lg" className="main-nav" expanded={expanded}>
                    <Navbar.Brand>
                        <Link to="welcome" className="active" smooth={true} duration={2000}><img style={{height:'65px'}} className="img-fluid" src={LogoBlack} alt="logos" /></Link></Navbar.Brand>
                        
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu-trigger' onClick={() => setExpanded(expanded ? false : "expanded")}  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className="text-dark"><Link onClick={() => setExpanded(expanded ? false : "expanded")} to="welcome" className="active" smooth={true} duration={2000}>Home</Link></Nav.Link>
                            <Nav.Link className="text-dark"><Link onClick={() => setExpanded(expanded ? false : "expanded")} to="features" smooth={true} duration={2000}>Features</Link></Nav.Link>
                            <Nav.Link className="text-dark"><Link onClick={() => setExpanded(expanded ? false : "expanded")} to="pricing-plans" smooth={true} duration={2000}>Pricing Plans</Link></Nav.Link>
                            <Nav.Link className="text-dark"><Link onClick={() => setExpanded(expanded ? false : "expanded")} to="about" smooth={true} duration={2000}>About</Link></Nav.Link>
                            <Nav.Link className="text-dark"><Link onClick={() => setExpanded(expanded ? false : "expanded")} to="contact-us" smooth={true} duration={2000}>Contact Us</Link></Nav.Link>
                            <Nav.Link className="text-dark" target='_blank' href="https://www.app.mailpokes.com/login">Login</Nav.Link>
                            <Nav.Link className="text-dark" target='_blank' href="https://www.app.mailpokes.com/users/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                   
                </div>
            </div>
        </div>

      </header>
  );
}

export default Heder;
