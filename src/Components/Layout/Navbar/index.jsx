import React from 'react'
import './style.css'
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <div className='Navbar'>
      <div className="NavInfoSection">
        <p>+994 50 123 45 67 / Lorem Ipsum is simply dummy text of the printing</p>
      </div>
      <div className="navSocialSection">
        <IoMailOutline />
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
  )
}

export default Navbar