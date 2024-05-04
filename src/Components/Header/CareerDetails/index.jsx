import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import { Link } from 'react-router-dom';
import './style.css'
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function CarrerDetailHeader() {
   // Language
   const { language } = useContext(LanguageContext);

    return (
      <div>
        <div className="DivMenuSectionHeaderCareer">
          <div className="DivTopNavShort">
            <Link to="/" className="LinkNav">
            {language === 'az' ? 'Ana Səhifə' : 'Home'}
            </Link>
            <KeyboardArrowRightRoundedIcon className="IconRight" />
            <Link to="/careers" className="LinkNav">
            {language === 'az' ? 'Vakansiyalar' : 'Careers'}
            </Link>
            <KeyboardArrowRightRoundedIcon className="IconRight" />
            <p className="RecentMenu">{language === 'az' ? 'Vakansiya Bölməsi' : 'Career Section'}</p>
          </div>
          <div className="DivBottomtextShort">
          <p className="bckText Menutexts">{language === 'az' ? 'Vakansiyalar' : 'Careers'}</p>
            <p className="bckText1 Menutexts">
            <p className="bckText1 Menutexts">{language === 'az' ? 'Kənd təsərrüfatı sahəsində faydalı karyeraları bizimlə kəşf edin' : 'Discover rewarding careers in agriculture with us'}</p>
            </p>
          </div>
        </div>

      </div>
    );
  }

  export default CarrerDetailHeader;
