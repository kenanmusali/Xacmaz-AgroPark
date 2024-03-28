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

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);

    // Change text to "Copied" after copying
    const copyLinkText = document.querySelector(".shareNewsdetailicon .divNewsTime");
    copyLinkText.innerText = "Copied";
    setTimeout(() => {
      copyLinkText.innerText = "Copy Link";
    }, 2000); // Reset text after 2 seconds
  };

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
          <div className="shareNewsdetailicon" onClick={handleCopyLink}>
            <ShareIcon />
            <p className="divNewsTime">Copy Link</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailSection;
