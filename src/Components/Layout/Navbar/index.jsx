import React, { useState, useEffect } from 'react';
import './style.css';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, NavLink } from 'react-router-dom';

// Navbar Hamburger Menu
function toggleMenu() {
  var body = document.body;
  var myLinks = document.getElementById('myLinks');
  var scrollDisabled = body.classList.contains('scroll-disabled');
  var hamMenuIcon = document.querySelector('.HamMenuIcon');
  var TopSection = document.querySelector('.TopSection'); 
  
  if (!scrollDisabled) {
    body.classList.add('scroll-disabled');
    body.style.overflow = 'hidden';
    myLinks.style.height = '100vh';
    hamMenuIcon.style.color = 'white';
    TopSection.style.display = 'none'; 
  } else {
    body.classList.remove('scroll-disabled');
    body.style.overflow = '';
    myLinks.style.height = '0';
    hamMenuIcon.style.color = '';
    TopSection.style.display = ''; 
  }
}

// Navbar
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
      <div className={`TopSection ${isScrolled ? 'none' : ''}`}>
        <p className='text'>+994 50 123 45 67 / Contact Us</p>
        <div className="navSocialSection">
          <EmailIcon className='icon1' />
          <InstagramIcon className='icon1' />
          <FacebookOutlinedIcon className='icon1' />
        </div>
      </div>

      <div className="BottomSection">
        <Link to='/' className="logoSec">
          <img className='logo' src="./Public/Favicon/Logo.svg" alt="Xacmaz Aqro Park Logo" />
          <p className='logotext'>Xaçmaz AqroPark</p>
        </Link>
        <div className="MenuSection">
          <div className="LanguageSection">
            <NavLink to='/about' activeclassname="active">Haqqımıda</NavLink>
            <NavLink to='/products' activeclassname="active">Məhsullar</NavLink>
            <NavLink to='/news' activeclassname="active">Xəbərlər</NavLink>
            <NavLink to='/gallery' activeclassname="active">Qalereya</NavLink>
            <NavLink to='/careers' activeclassname="active">Vakansiyalar</NavLink>
            <NavLink to='/contact' activeclassname="active">Əlaqə</NavLink>
          </div>
          <MenuRoundedIcon className='HamMenuIcon' onClick={toggleMenu} />



          <div className="topnav">
            <div className="mSection">
              <div id="myLinks" className='Links'>
                <NavLink className='Nunito topChildMargin' to='/about' activeclassname="active">Haqqımıda</NavLink>
                <NavLink className='Nunito' to='/products' activeclassname="active">Məhsullar</NavLink>
                <NavLink className='Nunito' to='/news' activeclassname="active">Xəbərlər</NavLink>
                <NavLink className='Nunito' to='/gallery' activeclassname="active">Qalereya</NavLink>
                <NavLink className='Nunito' to='/careers' activeclassname="active">Vakansiyalar</NavLink>
                <NavLink className='Nunito' to='/contact' activeclassname="active">Əlaqə</NavLink>
                <p className='menutext'>Xaçmaz AqroPark</p>
                <p className='menutext1 bottom'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <p className='menutext1'>+994 50 123 45 67 / +994 70 123 45 67</p>
                <p className='menutext1'>Lorem Ipsum is simply dummy text of the printing</p>
                <div className="navSocialSection bottom">
                  <EmailIcon className='icon1' />
                  <InstagramIcon className='icon1' />
                  <FacebookOutlinedIcon className='icon1' />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Navbar;
