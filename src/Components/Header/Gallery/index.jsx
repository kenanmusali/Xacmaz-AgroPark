import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function GalleryHeader() {
  return (
    <div>
      <div className="DivMenuSectionHeaderGallery">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>Ana Səhifə</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>Qalereya</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">Qalereya</p>
          <p className="bckText1 Menutexts">Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</p>
        </div>
      </div>
      {/* You Will start coding here*/}

    </div>
  )
}

export default GalleryHeader