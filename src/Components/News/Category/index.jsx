import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import { Link } from "react-router-dom";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import './style.css'

const NewsCategory = () => {
  const [text, setText] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetch("http://localhost:3001/News")
      .then((res) => res.json())
      .then((data) => {
        setText(data);
      });
  }, []);

  const topSection = text.slice(0, 2);
  const bottomSection = text.slice(2, 10);


  return (
    <div>
      <div className="divNewsAddBarContainer">

        <div className="divbarnewssection1">
          {topSection.map(({ id, text, desc, time, image, klas }) => (
            <Link key={id} to={`/news/${id}`} className="divbarnewssection1">
              <div className={klas}>
                <img className="NewsImage1" src={image} alt="" />
                <div className="divNewsTextsSections">
                  <p className="NewsText1">{text[language]}</p>
                  <p className="Newsdecp1">{desc[language]}</p>
                  <div className="divNewsTimeZone">
                    <WatchLaterRoundedIcon className="NewsIconSet1" />
                    <p className="divNewsTime">{time[language]}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>


        <div className="divbarnewssection2">
          <div className="divbarnewssection2-column">
            {bottomSection.map(({ id, text, desc, time, image, klas }) => (
              <Link key={id} to={`/news/${id}`} className={klas}>
                <img className="NewsImage1" src={image} alt="" />
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
};

export default NewsCategory;
