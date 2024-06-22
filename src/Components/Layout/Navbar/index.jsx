import React, { useState, useEffect, useContext } from 'react';
import Language, { LanguageContext } from '../../../Assets/Language';
import './style.css';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link, NavLink } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../../../../Public/Favicon/Logo.svg'

// Navbar Hamburger Menu
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    const body = document.body;
    const myLinks = document.getElementById('myLinks');
    const scrollDisabled = body.classList.contains('scroll-disabled');
    const hamMenuIcon = document.querySelector('.HamMenuIcon');
    const TopSection = document.querySelector('.TopSection');

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
  };

  // Language
  const { language } = useContext(LanguageContext);

  return (
    <div className={`Navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`TopSection ${isScrolled ? 'none' : ''}`}>
        <p className='text Nunito'>{language === 'az' ? '+994 50 123 45 67 / Əlaqə' : '+994 50 123 45 67 / Contact Us'}</p>
        <div className="navSocialSection">
          <EmailIcon className='icon1' />
          <InstagramIcon className='icon1' />
          <FacebookOutlinedIcon className='icon1' />
        </div>
      </div>

      <div className="BottomSection">
        <Link to='/' className="logoSec">
        <img className='logo' src={logo} alt="XAP" />
          <p className='logotext'>Xaçmaz AqroPark</p>
        </Link>
        <div className="MenuSection">
          <div className="LanguageSection">
            <NavLink to='/about' activeclassname="active">{language === 'az' ? 'Haqqımıda' : 'About Us'}</NavLink>
            <NavLink to='/products' activeclassname="active">{language === 'az' ? 'Məhsullar' : 'Products'}</NavLink>
            <NavLink to='/news' activeclassname="active">{language === 'az' ? 'Xəbərlər' : 'News'}</NavLink>
            <NavLink to='/gallery' activeclassname="active">{language === 'az' ? 'Qalereya' : 'Gallery'}</NavLink>
            <NavLink to='/careers' activeclassname="active">{language === 'az' ? 'Vakansiyalar' : 'Careers'}</NavLink>
            <NavLink to='/contact' activeclassname="active">{language === 'az' ? 'Əlaqə' : 'Contact'}</NavLink>
          </div>

          <Language />

          <MenuRoundedIcon className='HamMenuIcon' onClick={toggleMenu} style={{ display: isMenuOpen ? 'none' : 'flex' }} />
          <CloseRoundedIcon className='HamMenuIcon1' onClick={toggleMenu} style={{ display: isMenuOpen ? 'flex' : 'none' }} />

          <div className="topnav">
            <div className="mSection">
              <div id="myLinks" className='Links'>
             
                <NavLink onClick={toggleMenu} className='Nunito topChildMargin' to='/about' activeclassname="active">{language === 'az' ? 'Haqqımıda' : 'About Us'}</NavLink>
                <NavLink onClick={toggleMenu} className='Nunito' to='/products' activeclassname="active">{language === 'az' ? 'Məhsullar' : 'Products'}</NavLink>
                <NavLink onClick={toggleMenu} className='Nunito' to='/news' activeclassname="active">{language === 'az' ? 'Xəbərlər' : 'News'}</NavLink>
                <NavLink onClick={toggleMenu} className='Nunito' to='/gallery' activeclassname="active">{language === 'az' ? 'Qalereya' : 'Gallery'}</NavLink>
                <NavLink onClick={toggleMenu} className='Nunito' to='/careers' activeclassname="active">{language === 'az' ? 'Vakansiyalar' : 'Careers'}</NavLink>
                <NavLink onClick={toggleMenu} className='Nunito' to='/contact' activeclassname="active">{language === 'az' ? 'Əlaqə' : 'Contact'}</NavLink>

                <p className='menutext'>Xaçmaz AqroPark</p>
                <p className='menutext1 bottom'>{language === 'az' ? 'Xaсhmaz Aqropark MMC 01.12.2021 tarixində fəaliyyətə başlayıb' : 'Xaсhmaz Agropark LLC started operating on 01.12.2021'}</p>
                <p className='menutext1'>+994 50 123 45 67 / +994 70 123 45 67</p>
                <p className='menutext1'>{language === 'az' ? 'Əlavə məlumat üçün müştəri xidmətlərimizlə əlaqə saxlayın.' : 'For more information, please contact our customer service.'}</p>
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
