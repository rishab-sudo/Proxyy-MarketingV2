import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import navlogo from "../../assests/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <section id="Footer">
      <Container className='footer_container'>
        <div className='brand_div'>
          <img className='logo_img' src={navlogo} />
        </div>
        <div>
          <nav className='nav'>
            <li ><a className='link' href="#Home">Home</a></li>
            <li ><a className='link' href="#About">About</a></li>
            <li ><a className='link' href="#FAQ">FAQ</a></li>
            <li ><a className='link' href="#Contact">Contact</a></li>
          </nav>
        </div>
      </Container>
      <Container>
        <div className='underline'></div>
        <p className='copyright_text'>© 2023 Copyrights by Proxyy. All Rights Reserved. Developed by Proxyy</p>
      </Container>

    </section>
  )
}

export default Footer