import React from 'react'
import './style.css'
import './responsive.css'
import Notfound404 from '../../../Public/Images/404.png'

function NotFound() {
  return (
    <div className='NotfoundPage'>
        <img className='Error404' src={Notfound404} alt="404"/>
    </div>
  )
}

export default NotFound