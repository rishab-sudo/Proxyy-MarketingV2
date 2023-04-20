import React from 'react'
import "./Icons.css"
import { faSquareInstagram, faSquareWhatsapp, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { BsWhatsapp } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"

const Icons = () => {
  return (

    <div className='social_container'>

      <a href="https://www.facebook.com/profile.php?id=100084463219381&mibextid=LQQJ4d" className="facebook social">
        <FaFacebookF />
      </a>

      <a href="https://instagram.com/timely_proxyy?igshid=MWI4MTIyMDE="
        className="whatsapp social">
        <FiInstagram />
      </a>

      <a href="https://wa.me/message/YVV3N7ZVZMAJH1"
        className="instagram social">
        <BsWhatsapp />
      </a>


      <a href="https://www.linkedin.com/company/timelyproxyy/"
        className="linkedin social">
        <FaLinkedinIn />
      </a>


    </div>
  )
}

export default Icons
