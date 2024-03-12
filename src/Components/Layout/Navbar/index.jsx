import React, { useState, useEffect } from 'react';
import './style.css';
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="TopSection">
        <p className='text'>+994 50 123 45 67 / For More Info, Contact Us</p>
        <div className="navSocialSection">
          <IoMailOutline className='icon1' />
          <FaInstagram className='icon2' />
          <FaFacebook className='icon3' />
        </div>
      </div>

      <div className="BottomSection">
        <img className='logo' src="./Public/Favicon/Logo.svg" alt="Xacmaz Aqro Park Logo" />
        <div className="MenuSection">
          <div className="LanguageSection">
            <a href="">En</a>
            <p>/</p>
            <a href="">Ru</a>
            <p>/</p>
            <a href="">Az</a>
          </div>
          <HiMenuAlt2 className='icon4' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
