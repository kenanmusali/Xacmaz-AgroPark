import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function NewsDetailHeader() {

    return (
      <div>
        <div className="DivMenuSectionHeaderNewsDetails">
          <div className="DivTopNavShort">
            <Link to="/" className="LinkNav">
              Ana Səhifə
            </Link>
            <KeyboardArrowRightRoundedIcon className="IconRight" />
            <Link to="/news" className="LinkNav">
            Xəbərlər
            </Link>
            <KeyboardArrowRightRoundedIcon className="IconRight" />
            <p className="RecentMenu">Xəbərlər Bölməsi</p>
          </div>
          <div className="DivBottomtextShort">
            <p className="bckText Menutexts">Xəbərlər</p>
            <p className="bckText1 Menutexts">
              Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq
            </p>
          </div>
        </div>

      </div>
    );
  }

  export default NewsDetailHeader;
