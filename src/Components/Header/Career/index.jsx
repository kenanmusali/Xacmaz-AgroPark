import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


function CareerHeader() {

       // Language
       const { language } = useContext(LanguageContext);

  return (
    <div>

      <div className="DivMenuSectionHeaderCareer">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>{language === 'az' ? 'Ana Səhifə' : 'Home'}</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>{language === 'az' ? 'Vakansiyalar' : 'Careers'}</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">{language === 'az' ? 'Vakansiyalar' : 'Careers'}</p>
          <p className="bckText1 Menutexts">{language === 'az' ? 'Kənd təsərrüfatı sahəsində faydalı karyeraları bizimlə kəşf edin' : 'Discover rewarding careers in agriculture with us'}</p>
        </div>
      </div>
    </div>
  );
};





export default CareerHeader