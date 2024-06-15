import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function AboutHeader() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div className="DivMenuSectionHeaderAbout">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>{language === 'az' ? 'Ana Səhifə' : 'Home'}</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>{language === 'az' ? 'Haqqımızda' : 'About Us'}</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">{language === 'az' ? 'Haqqımızda' : 'About Us'}</p>
          <p className="bckText1 Menutexts">{language === 'az' ? 'Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq' : 'We deal with agribusiness communications'}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHeader