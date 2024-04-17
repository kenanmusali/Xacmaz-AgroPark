import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function ProductHeader() {
    return (
        <div>
            <div className="DivMenuSectionHeaderProducts">
                <div className="DivTopNavShort">
                    <Link to='/' className='LinkNav'>Ana Səhifə</Link>
                    <KeyboardArrowRightRoundedIcon className='IconRight' />
                    <p className='RecentMenu'>Məhsullar</p>
                </div>
                <div className="DivBottomtextShort">
                    <p className="bckText Menutexts">Məhsullar</p>
                    <p className="bckText1 Menutexts">Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</p>
                </div>
            </div>
        </div>
    )
}

export default ProductHeader