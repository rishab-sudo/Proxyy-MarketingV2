import React from 'react'
import "./FAQ.css"
import { Container, Row, Col } from "react-bootstrap"
import faq from "../../assests/faqq.png"
import Accordion from './Accordion'
const FAQ = () => {
  return (
    <section id="FAQ" style={{ height: '100%', padding: "10px" }}>
      <Container className='faq_container'>
        <div className='faq_heading'>
          <h1 className='contact_us'>Frequently Asked Question</h1>
          <h1 >Need A <spna className="span"> Support ?</spna></h1>

        </div>
        <Row>
          <Col lg={6} md={12} xs={12} className='left_col'>
            <img className="faq_img img-fluid" src={faq} />
          </Col>
          <Col lg={6} md={12} xs={12} className='right_col'>
            <Accordion />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQ