import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import mmm from "../../assests/tab.png"
import group from "../../assests/mobiles.png"



import "./About.css"
const About = () => {
  fetch()
  return (
    <section id="About" style={{ height: "auto" }}>
      <Container className='about_container'>
        <Row>
          <Col lg={6} md={6} xs={12} className='left_col'>
            <img className='ipad_img img-fluid' src={mmm} />
          </Col>

          <Col lg={6} md={6} xs={12} className='right_col'>
            <div className='heading_para'>
              <h1>Efficient Student Data Management with Our Admin Dashboard and<span className='span'> QR Codes</span> </h1>
              <p className='about_text'>Our admin dashboard provides the best platform for managing student data efficiently. With our user-friendly interface, you can easily view and organize student information.
              </p>
              <p className='about_text'>Additionally, our system allows for easy QR code generation, making attendance tracking and identification a breeze.<br />
              </p>
            </div>
          </Col>
        </Row>

        <Row className="row flex-column-reverse flex-md-row">
          <Col lg={6} md={6} xs={12} className='left_col'>
            <div className='heading_para'>
              <h1>The Event   <span className='span'>Portal</span> </h1>
              <p className='about_text'>If you are looking for a way to stay up-to-date with all the private and public events in your area or beyond, Proxyy can be the perfect platform to bring them all together. Proxyy can serve as a one-stop-shop for event-goers, providing a comprehensive directory of all the upcoming events.</p>
              <p className='about_text'>Filtering notes using matched keywords<br />
                Through Proxyy, users can easily search for events by location, date, and category. <br />
                Filtering notes using matched keywords
              </p>
            </div>
          </Col>

          <Col lg={6} md={6} xs={12} className='right_col'>
            <img className='mobile_img img-fluid' src={group} />
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6} xs={12} className='left_col'>
            <img className='mobile_img img-fluid' src={require('../../assests/dashboard.png')} />
          </Col>

          <Col lg={6} md={6} xs={12} className='right_col'>
            <div className='heading_para'>
              <h1 className='heading3'>Introducing Our Eye-Catching  <span className='span'> Institute Admin Panels</span>
              </h1>
              <p className='about_text'>An attractive admin panel for an institute is a user interface designed for administrators to manage and oversee various aspects of the institute. It typically includes features such as student and staff management, course scheduling, grade tracking, financial reporting, and communication tools.</p>
              <p className='about_text'>The panel is designed with a visually appealing layout and intuitive navigation to ensure ease of use for administrators. <br />
                The overall goal is to provide an efficient and streamlined system for managing the day-to-day operations of the institute.<br />

              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About