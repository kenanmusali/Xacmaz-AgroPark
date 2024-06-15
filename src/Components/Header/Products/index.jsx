import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function ProductHeader() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
<div className="DivMenuSectionHeaderProducts">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>{language === 'az' ? 'Ana Səhifə' : 'Home'}</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>{language === 'az' ? 'Məhsullar' : 'Products'}</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">{language === 'az' ? 'Məhsullar' : 'Products'}</p>
          <p className="bckText1 Menutexts">{language === 'az' ? 'Yüksək keyfiyyətli təzə məhsullar çeşidini təklif edirik.' : 'We offer a range of high-quality farm-fresh products'}</p>
        </div>
      </div>
    </div>
  )
}
export default ProductHeader