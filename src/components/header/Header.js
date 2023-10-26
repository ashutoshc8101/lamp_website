import logo from '../../assets/logo.png';
import labLogo from '../../assets/images/logo_2.png'
import mechanicalLogo from '../../assets/images/header_new.png';
import smallLogo from '../../assets/images/small-screen-logo.png';

import './header.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {

  return (
    <>
      <div className="header">
      <div className="col-sm-3 institute-logo">
        <img src={logo} alt="institute logo" className="image" />
        <img src={smallLogo} alt="small screen logo" className="small-screen-image" />
      </div>
      <div className="col-sm-3 lab-logo">
        <img src={labLogo} alt="lab logo" className="lab-image" />
      </div>
      <div className="col-sm-3 headline">उन्नत विनिर्माण व प्रसंस्करण प्रयोगशाला <br /> Laboratory for Advanced Manufacturing and Processing</div>
      <div className="col-sm-3 dep-logo">
        <img src={mechanicalLogo} alt="mechanical engineering" className="mechanical-logo" />
      </div>
      </div>
      <Navbar expand="lg" variant="dark" className="headernav">
        <Navbar.Toggle aria-controls={`responsive-navbar-nav`} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navmenu">
              <Nav.Link className="navlink">
                <Link to={`/`}>
                  Home
                </Link>
                </Nav.Link>
                <Nav.Link className="navlink">
                  <Link to={`/about`}>About</Link>
                </Nav.Link>
                <Nav.Link className="navlink">
                <Link to={`/research`}>Research</Link>
                </Nav.Link>
                <Nav.Link className="navlink">
                <Link to={"/team/team"}>Team</Link>
                </Nav.Link>
                <Nav.Link className="navlink">
                <Link to={"/publications/research-papers"}>Publications</Link>
                </Nav.Link>
                <Nav.Link className="navlink">
                <Link to={"/gallery"}>Gallery</Link>
                </Nav.Link>
                <Nav.Link className="navlink">
                <Link to={"/contact"}>Contact</Link>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;