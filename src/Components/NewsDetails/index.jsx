import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import ShareIcon from '@mui/icons-material/Share';
import './style.css'
import './responsive.css'

function NewsDetailSection() {
  const { id } = useParams();
  const [text, setText] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/News/${id}`)
      .then((res) => {
        return res.json();
      })
      .then(data => setText(data))
  }, [id])


  return (
    <div>

      <div className="DivMenuSectionHeaderNewsDetails">
        <div className="DivTopNavShort">
          <Link to="/" className="LinkNav">
            Ana Səhifə
          </Link>
          <KeyboardArrowRightRoundedIcon className="IconRight" />
          <p className="RecentMenu">Xəbərlər</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">Xəbərlər</p>
          <p className="bckText1 Menutexts">
            Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq
          </p>
        </div>
      </div>

      <div className="divtextNewsSectionDetailsGroup">
        <p className='textNewsSectionDetails'>{text.article}</p>
        <p className='textNewsSectionDetails'>{text.article1}</p>
        <p className='textNewsSectionDetails'>{text.article2}</p>
        <p className='textNewsSectionDetails'>{text.article3}</p>
        <div className="sharetimenewsdetailicongroup">
          <div className="divNewsTimeZone1">
            <WatchLaterRoundedIcon className="NewsIconSet1" />
            <p className="divNewsTime">{text.time}</p>
          </div>
          <div className="shareNewsdetailicon">
            <ShareIcon />
            <p className="divNewsTime">Share</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default NewsDetailSection;
