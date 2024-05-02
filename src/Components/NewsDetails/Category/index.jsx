import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import { Link, useParams } from 'react-router-dom';
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import ShareIcon from '@mui/icons-material/Share';
import './style.css'

function NewsDetailCategory() {
  const { id } = useParams();
  const [text, setText] = useState({});
  const { language } = useContext(LanguageContext);

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
    copyLinkText.innerText = language === 'az' ? 'Kopyalandı' : 'Copied';
    setTimeout(() => {
      copyLinkText.innerText = language === 'az' ? 'Linki Kopyalayın' : 'Copy Link';

    }, 2000);
  };

  return (
    <div>

      <div className="divtextNewsSectionDetailsGroup">
        <p className='textNewsSectionDetails Nunito'>{text?.article && text.article[language]}</p>
        <p className='textNewsSectionDetails Nunito'>{text?.article1 && text.article1[language]}</p>
        <p className='textNewsSectionDetails Nunito'>{text?.article2 && text.article2[language]}</p>
        <p className='textNewsSectionDetails Nunito'>{text?.article3 && text.article3[language]}</p>
        <div className="sharetimenewsdetailicongroup">
          <div className="divNewsTimeZone1">
            <WatchLaterRoundedIcon className="NewsIconSet1" />
            <p className="divNewsTime">{text?.time && text.time[language]}</p>
          </div>
          <div className="shareNewsdetailicon" onClick={handleCopyLink}>
            <ShareIcon />
            <p className="divNewsTime">{language === 'az' ? 'Linki Kopyalayın' : 'Copy Link'}</p>
          </div>
        </div>
      </div>

      <div className="divNewsAddBarContainer">
        <div className="divbarnewssection2">
          <div className="divbarnewssection2-column">
            {bottomSection?.map(({ id, text, desc, time, klas }) => (
              <Link key={id} to={`/news/${id}`} className={klas}>
                {/* <img className="NewsImage1" src={image} alt="News" /> */}
                <div className="divNewsTextsSections divNewsTextsSections001">
                  <p className="NewsText1">{text[language]}</p>
                  <p className="Newsdecp1">{desc[language]}</p>
                  <div className="divNewsTimeZone">
                    <WatchLaterRoundedIcon className="NewsIconSet1" />
                    <p className="divNewsTime">{time[language]}</p>
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

export default NewsDetailCategory;
