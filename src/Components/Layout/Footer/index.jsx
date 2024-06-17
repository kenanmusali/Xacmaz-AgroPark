import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'

import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';

function Footer() {

    // Language
    const { language } = useContext(LanguageContext);

    return (
        <div className='Footer'>
            <div className="section1 ">
                <div className="one">
                    <Link to={'/about'} className='Footertext2'>{language === 'az' ? 'Haqqımıda' : 'About Us'}</Link>
                    <Link to={'/products'} className='Footertext2'>{language === 'az' ? 'Məhsullar' : 'Products'}</Link>
                    <Link to={'/gallery'} className='Footertext2'>{language === 'az' ? 'Qalereya' : 'Gallery'}</Link>
                </div>
                <div className="one">
                    <Link to={'/news'} className='Footertext2'>{language === 'az' ? 'Xəbərlər' : 'News'}</Link>
                    <Link to={'/careers'} className='Footertext2'>{language === 'az' ? 'Vakansiyalar' : 'Careers'}</Link>
                    <Link to={'/contact'} className='Footertext2'>{language === 'az' ? 'Əlaqə' : 'Contact'}</Link>
                </div>
                <div className="one">
                    <Link className='Footertext2'>+994 50 123 45 67</Link>
                    <Link className='Footertext2'>+994 70 123 45 67</Link>
                </div>
                <div className="one">
                    <Link className='Footertext2'>info@xacmazagro.az</Link>
                </div>

            </div>
            <div className="section2">
                <div className="one">
                    <img className='logoFooter' src="./Public/Favicon/Logo.svg" alt="XAP" />
                    <div className="flex">
                        <p className='Footertexts'>© 2024 Xaçmaz Aqro</p>
                        <p className='Footertexts'>{language === 'az' ? 'Müəllif hüquqları qorunur' : 'Copyright, All rights reserved'}</p>
                    </div>
                </div>
                <div className="one">
                    <p>{language === 'az' ? 'Bizi izləyin!' : 'Follow Us!'}</p>
                    <div className="flex1">
                        <EmailIcon className='icon1' />
                        <InstagramIcon className='icon1' />
                        <FacebookOutlinedIcon className='icon1' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer