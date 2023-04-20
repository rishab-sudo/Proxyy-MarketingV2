import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import "./Navbar.css"
import navlogo from "../../assests/logo.png"
import headerImg from "../../assests/headerImg.jpg"
import Icons from "../../Icons/Icons"


function NavBar() {
  return (
    <>
      <Container fluid style={{ backgroundImage: `url(${headerImg})`, height: "70px", width: "100%", marginBottom: "0px", position: "fixed" }}>
        <div className="header_text_div">
          <p className="header_text">
            Get 20% Discount Get for New Account
          </p>
          <p className="header_text" style={{ marginLeft: "8px", textDecoration: "underline", fontWeight: "400", }}>
            Request Demo</p>
        </div>

      </Container>
      <Navbar fixed="top" className='Navbar' expand="lg">
        <Container fluid>
          <Navbar.Brand className="NavbarBrand" href="#">
            <img className="logo_img" src={navlogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="nav_links"
              style={{ height: 'auto', width: "auto" }}
              navbarScroll
            >
              <Nav.Link className='links' href="#Home">Home</Nav.Link>
              <Nav.Link className='links' href="#About">About</Nav.Link>
              <Nav.Link className='links' href="#FAQ">FAQ</Nav.Link>
              <Nav.Link className='links' href="#Contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex search_nav" >
              <Icons />
              {/* <button className='nav_btn'>Join tech hub </button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;  