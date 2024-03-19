import React, { useState, useEffect } from 'react';
import './style.css';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';
// import { HiMenuAlt2 } from "react-icons/hi";
// import { Link } from 'react-router-dom';

// Navbar Hamburger Menu
// function toggleMenu() {
//   var topnav = document.querySelector('.topnav');
//   var myLinks = document.getElementById('myLinks');
//   topnav.classList.toggle('show');
//   if (myLinks.style.height === '0px') {
//     myLinks.style.height = '100vh';
//   } else {
//     myLinks.style.height = '0';
//   }
// }


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
        <p className='text'>+994 50 123 45 67 / For More Info, Contact Us</p>
        <div className="navSocialSection">
          <EmailIcon className='icon1'/>
          <InstagramIcon className='icon1'/>
          <FacebookOutlinedIcon className='icon1'/>
        </div>
      </div>

      <div className="BottomSection">
        <Link to='/' className="logoSec">
          <img className='logo' src="./Public/Favicon/Logo.svg" alt="Xacmaz Aqro Park Logo" />
          <p className='logotext'>Xaçmaz AqroPark</p>
        </Link>
        <div className="MenuSection">
          <div className="LanguageSection">
            <Link to='/about'>Haqqımıda</Link>
            <Link to='/products'>Məhsullar</Link>
            <Link to='/news'>Xəbərlər</Link>
            <Link to='/gallery'>Qalereya</Link>
            <Link to='/careers'>Vakansiyalar</Link>
            <Link to='/contact'>Əlaqə</Link>
          </div>


          {/* <HiMenuAlt2 className='icon4' onClick={toggleMenu} /> */}

          {/* <div className="topnav">
            <div className="mSection">
              <div id="myLinks" className='Links'>
                <a className='top' href='#'>Haqqımıda</a>
               
              </div>
              <div className='pDiv' id='myLinks'>
                <p className='menutext'>Xaçmaz AqroPark</p>
                <p className='menutext1 bottom'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <p className='menutext1'>+994 50 123 45 67 / +994 70 123 45 67</p>
                <p className='menutext1'>Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Navbar;
