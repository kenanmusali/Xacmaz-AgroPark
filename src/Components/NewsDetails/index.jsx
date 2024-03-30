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

    const [text1, setText1] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3001/News")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setText1(data);
        });
    }, []);

    const bottomSection = text1.slice(2, 10);
    const handleCopyLink = () => {
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl);
      const copyLinkText = document.querySelector(".shareNewsdetailicon .divNewsTime");
      copyLinkText.innerText = "Copied";
      setTimeout(() => {
        copyLinkText.innerText = "Copy Link";
      }, 2000);
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

        <div className="divNewsAddBarContainer">
          <div className="divbarnewssection2">
            <div className="divbarnewssection2-column">
              {bottomSection?.map(({ id, text, desc, time,  klas }) => (
                <Link key={id} to={`/news/${id}`} className={klas}>
                  {/* <img className="NewsImage1" src={image} alt="News" /> */}
                  <div className="divNewsTextsSections">
                    <p className="NewsText1">{text}</p>
                    <p className="Newsdecp1">{desc}</p>
                    <div className="divNewsTimeZone">
                      <WatchLaterRoundedIcon className="NewsIconSet1" />
                      <p className="divNewsTime">{time}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default NewsDetailSection;
