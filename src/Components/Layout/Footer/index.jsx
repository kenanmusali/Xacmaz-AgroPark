import React from 'react'
import './style.css'
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    return (
        <div className='Footer'>
            <div className="section1">
                <div className="one">
                    <a>Haqqımızda</a>
                    <a>Məhsullar</a>
                    <a>Qalereya</a>
                </div>
                <div className="one">
                    <a>Xəbərlər</a>
                    <a>Vakansiya</a>
                    <a>Əlaqə</a>
                </div>
                <div className="one">
                    <a>+994 50 123 45 67</a>
                    <a>+994 70 123 45 67</a>
                </div>
                <div className="one">
                    <a>info@xacmazagro.az</a>
                </div>

            </div>
            <div className="section2">
                <div className="one">
                    <img className='logoFooter' src="./Public/Favicon/Logo.svg" alt="Xacmaz Aqro Park Logo" />
                    <div className="flex">
                        <p>© 2022 Xaçmaz Aqro</p>
                        <p>Müəllif hüquqları qorunur</p>
                    </div>
                </div>
                <div className="one">
                    <p>Bizi izləyin!</p>
                    <div className="flex1">
                        <IoMailOutline className='icon3' />
                        <FaInstagram className='icon4' />
                        <FaFacebook className='icon5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer