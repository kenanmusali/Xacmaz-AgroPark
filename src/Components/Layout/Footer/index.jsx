import React from 'react'
import './style.css'
import './responsive.css'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='Footer'>
            <div className="section1 ">
                <div className="one">
                    <Link to={'/about'} className='Footertext2'>Haqqımızda</Link>
                    <Link to={'/products'} className='Footertext2'>Məhsullar</Link>
                    <Link to={'/gallery'} className='Footertext2'>Qalereya</Link>
                </div>
                <div className="one">
                    <Link to={'/news'} className='Footertext2'>Xəbərlər</Link>
                    <Link to={'/careers'} className='Footertext2'>Vakansiya</Link>
                    <Link to={'/contact'} className='Footertext2'>Əlaqə</Link>
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
                    <img className='logoFooter' src="./Public/Favicon/Logo.svg" alt="Xacmaz Aqro Park Logo" />
                    <div className="flex">
                        <p className='Footertexts'>© 2022 Xaçmaz Aqro</p>
                        <p className='Footertexts'>Müəllif hüquqları qorunur</p>
                    </div>
                </div>
                <div className="one">
                    <p>Bizi izləyin!</p>
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