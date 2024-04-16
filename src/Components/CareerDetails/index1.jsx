import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function HeaderCareer() {


  return (
    <div>
      <div className="DivMenuSectionHeaderCareer">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>Ana Səhifə</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <Link to='/careers' className='LinkNav'>Vakansiyalar</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>Vakansiyalar Bölməsi</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">Vakansiyalar</p>
          <p className="bckText1 Menutexts">Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</p>
        </div>
      </div>

    </div>
  );
}

export default HeaderCareer;
