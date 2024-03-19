import React from 'react'
import './style.css'
import './responsive.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function AboutSection() {
  return (
    <div>
      <div className="DivMenuSectionHeaderAbout">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>Ana Səhifə</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>Haqqımızda</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">Haqqımızda</p>
          <p className="bckText1 Menutexts">Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</p>
        </div>
      </div>
      {/* You Will start coding here*/}



    </div>
  )
}

export default AboutSection