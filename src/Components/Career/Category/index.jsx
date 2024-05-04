import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css';
import { Link } from 'react-router-dom';
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import Info from '../../Info';

function CareerCategory() {

  const [text, setText] = useState([]);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetch("http://localhost:3001/Careers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setText(data);
      });
  }, []);

  const bottomSection = text.slice(0, 8);

  return (
    <div>
      <div className="divNewsAddBarContainer">
        <div className="divbarnewssection2">
          <div className="divbarnewssection2-column">
            {bottomSection.map(({ id, title, text, time, klas, price }) => (
              <Link key={id} to={`/careers/${id}`} className={klas}>
                <div className="divNewsTextsSections">
                  <div className="divFancyButtonGroup">
                    <button type="button" className="Nunito CareerBtn1">{price[language]}</button>
                  </div>
                  <p className="NewsText1">{title[language]}</p>
                  <p className="Nunito Newsdecp1">{text[language]}</p>
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
      <Info />
    </div>
  );
};

export default CareerCategory;
