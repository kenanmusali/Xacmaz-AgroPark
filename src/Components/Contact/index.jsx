import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


function ContactSection() {
  return (
    <div>
      <div className="DivMenuSectionHeaderContact">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>Ana Səhifə</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>Əlaqə</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">Əlaqə</p>
          <p className="bckText1 Menutexts">Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</p>
        </div>
      </div>
      {/* You Will start coding here*/}



    </div>
  )
}

export default ContactSection