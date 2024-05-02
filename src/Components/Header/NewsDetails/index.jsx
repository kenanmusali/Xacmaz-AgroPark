import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import { Link } from 'react-router-dom';
import './style.css'
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function NewsDetailHeader() {
   // Language
   const { language } = useContext(LanguageContext);

    return (
      <div>
        <div className="DivMenuSectionHeaderNewsDetails">
          <div className="DivTopNavShort">
            <Link to="/" className="LinkNav">
            {language === 'az' ? 'Ana Səhifə' : 'Home'}
            </Link>
            <KeyboardArrowRightRoundedIcon className="IconRight" />
            <Link to="/news" className="LinkNav">
            {language === 'az' ? 'Xəbərlər' : 'News'}
            </Link>
            <KeyboardArrowRightRoundedIcon className="IconRight" />
            <p className="RecentMenu">{language === 'az' ? 'Xəbərlər Bölməsi' : 'News Section'}</p>
          </div>
          <div className="DivBottomtextShort">
            <p className="bckText Menutexts">{language === 'az' ? 'Xəbərlər' : 'News'}</p>
            <p className="bckText1 Menutexts">
            {language === 'az' ? 'Davamlı Kənd Təsərrüfatı Yaşıl Təcrübələri Becərdir' : 'Sustainable Farming Cultivates Greener Practices'}
            </p>
          </div>
        </div>

      </div>
    );
  }

  export default NewsDetailHeader;
