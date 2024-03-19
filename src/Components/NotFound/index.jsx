import React from 'react'
import './style.css'
import './responsive.css'
import Notfound404 from '../../../Public/Images/404.png'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='NotfoundPage'>
      <div className="divNotfoudgrouptext">
        <p className='Notfoundtext'>Xaçmaz Aqro Biznes</p>
        <p className='Notfoundtext1'>Nə isə düzgün getmədi.... Səhifəni yeniləyin..!</p>
        <Link to="/" className='stylistic'>Ana səhifə</Link>
      </div>
      <img className='Error404' src={Notfound404} alt="404" />
    </div>
  )
}

export default NotFound