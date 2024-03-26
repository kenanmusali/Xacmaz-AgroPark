import React from "react";
import "./style.css";
import "./responsive.css";
import { Link } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded";
import NewsImage1 from "../../../Public/Images/Rectangle22.png";
import { useState, useEffect } from "react";

const NewsSection = () => {
  const [text, setText] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/News")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
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
          {topSection.map(({ id, text, desc, time, img, klas }) => (
            <div key={id} className={klas}>
              <img className="NewsImage1" src={img} alt="" />
              <div className="divNewsTextsSections">
                <p className="NewsText1">{text}</p>
                <p className="Newsdecp1">{desc}</p>
                <div className="divNewsTimeZone">
                  <WatchLaterRoundedIcon className="NewsIconSet1" />
                  <p className="divNewsTime">{time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="divbarnewssection2">
          <div className="divbarnewssection2-column">
            {bottomSection.map(({ id, text, desc, time, img, klas }) => (
              <div key={id} className={klas}>
                <img className="NewsImage1" src={img} alt="" />
                <div className="divNewsTextsSections">
                  <p className="NewsText1">{text}</p>
                  <p className="Newsdecp1">{desc}</p>
                  <div className="divNewsTimeZone">
                    <WatchLaterRoundedIcon className="NewsIconSet1" />
                    <p className="divNewsTime">{time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
