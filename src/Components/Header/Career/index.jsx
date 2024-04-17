


import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


function CareerHeader() {

  return (
    <div>

      <div className="DivMenuSectionHeaderCareer">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>Ana Səhifə</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>Vakansiyalar</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">Vakansiyalar</p>
          <p className="bckText1 Menutexts">Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</p>
        </div>
      </div>
    </div>
  );
};





export default CareerHeader