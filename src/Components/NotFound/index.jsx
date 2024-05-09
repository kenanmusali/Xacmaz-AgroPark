import React, { useContext } from 'react'
import './style.css'
import Notfound404 from '../../../Public/Images/404.png'
import { LanguageContext } from '../../Assets/Language';
import { Link } from 'react-router-dom'

function NotFound() {

  const { language } = useContext(LanguageContext);

  return (
    <div className='NotfoundPage'>
      <div className="divNotfoudgrouptext">
        <p className='Notfoundtext'>{language === 'az' ? 'Xaçmaz Aqro Biznes' : 'Xaçmaz Aqro Business'}</p>
        <p className='Notfoundtext1'>{language === 'az' ? 'Nə isə düzgün getmədi.... Səhifəni yeniləyin..!' : 'Something went wrong.... Refresh the page..!'}</p>
        <Link to="/" className='stylistic'>{language === 'az' ? 'Ana səhifə' : 'Home page'}</Link>
      </div>
      <img className='Error404' src={Notfound404} alt="404" />
    </div>
  )
}

export default NotFound