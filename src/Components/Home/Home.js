import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./Home.css"
import homeBg from "../../assests/output.png"
import { AiFillPlayCircle } from "react-icons/ai";
import { MdDownloadForOffline } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <section id="Home" >
        <main style={{
          backgroundImage: `url(${homeBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}>
          <div className='homeBg_container'>
            <Container className=''>
              <Row>
                <Col lg={6} md={7} xs={12} className='left_col'>
                  <div>
                    <h1>Welcome to  <span className='span1'> Proxyy <br />The Attendance Portal for Colleges </span>

                    </h1>
                    <p className='sub_heading'>
                      "Join the Future of Attendance Tracking with QR Codes:
                      Say Goodbye to the Attendance Sheet!"
                    </p>
                    <div className='homebtn_div'>

                      <button className='download_btn' href="#Contact">
                        <MdDownloadForOffline style={{ margin: "0px", marginRight: "5px", marginTop: "-2px", fontSize: "16px" }} />
                        Request Demo</button>
                      <button className='download_btn'>
                        <AiFillPlayCircle style={{ margin: "0px", marginRight: "5px", marginTop: "-2px", fontSize: "16px" }} />
                        View Promotion</button>
                    </div>
                    <div style={{ display: "flex", gap: '75px', marginTop: '2.5rem' }}>
                      <div style={{ display: "flex", }}>
                        <BiRefresh className='trial_icon' />
                        <p className='trail_text'>FREE TRIAL</p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <BiRefresh className='trial_icon' />
                        <p className='trail_text'> ONE TIME PAYMENT</p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={5} xs={12} className='right_col'>
                  <div >
                    <img className='vector_img img-fluid' src={require("../../assests/mobile.png")} />
                  </div>
                </Col>
              </Row>
              <Container style={{ marginBottom: "1rem" }}>

                <div className="heading_div">
                  <h1 className='contact_us'>Key Benefits </h1>
                  <h1 >Awesome <span className='span'>Features</span> </h1>
                </div >
                <div className='circle_div'>
                  <div>
                    <img src={require("../../assests/circle4.png")} className="circle_img img-fluid  " />
                    <p className='circle_text'>Scan and mark attendance</p>
                  </div>
                  <div>
                    <img src={require("../../assests/circle5.png")} className="circle_img img-fluid " />
                    <p className='circle_text'>Real-time updates</p>
                  </div>
                  <div>
                    <img src={require("../../assests/circle1.png")} className="circle_img img-fluid " />
                    <p className='circle_text'>Robust security</p>
                  </div>
                  <div>
                    <img src={require("../../assests/circle2.png")} className="circle_img img-fluid " />
                    <p className='circle_text'>Find all documents in one place</p>
                  </div>
                  <div>
                    <img src={require("../../assests/circle3.png")} className="circle_img img-fluid " />
                    <p className='circle_text'>Find all Information in one place</p>
                  </div>
                </div>

              </Container>
            </Container>

          </div>
        </main>
      </section>
    </>
  )
}

export default Home