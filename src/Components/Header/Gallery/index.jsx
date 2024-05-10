import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function GalleryHeader() {

   // Language
   const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className="DivMenuSectionHeaderGallery">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>{language === 'az' ? 'Ana Səhifə' : 'Home'}</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>{language === 'az' ? 'Qalereya' : 'Gallery'}</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">{language === 'az' ? 'Qalereya' : 'Gallery'}</p>
          <p className="bckText1 Menutexts">{language === 'az' ? 'Müxtəlif Qalereya Seçimlərimizi araşdırın' : 'Explore Our Diverse Gallery Selection'}</p>
        </div>
      </div>

    </div>
  )
}

export default GalleryHeader