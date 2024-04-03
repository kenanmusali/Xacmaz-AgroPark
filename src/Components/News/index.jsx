import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import { useState, useEffect } from "react";

const NewsSection = () => {
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/News")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setText(data);
      });
  }, []);

  const topSection = text.slice(0, 2);
  const bottomSection = text.slice(2, 10);

  return (
    <div>
      <div className="DivMenuSectionHeaderNews">
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

      <div className="divNewsAddBarContainer">

        <div className="divbarnewssection1">
          {topSection.map(({ id, text, desc, time, image, klas }) => (
            <Link key={id} to={`/news/${id}`} className="divbarnewssection1">
              <div className={klas}>
                <img className="NewsImage1" src={image} alt="" />
                <div className="divNewsTextsSections">
                  <p className="NewsText1">{text}</p>
                  <p className="Newsdecp1">{desc}</p>
                  <div className="divNewsTimeZone">
                    <WatchLaterRoundedIcon className="NewsIconSet1" />
                    <p className="divNewsTime">{time}</p>
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
};

export default NewsSection;
