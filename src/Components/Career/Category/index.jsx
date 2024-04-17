import React, { useState, useEffect } from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function CareerCategory() {

  const [text, setText] = useState([]);
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
            {bottomSection.map(({ id, text, time, title, klas, price }) => (
              <Link key={id} to={`/careers/${id}`} className={klas}>
                <div className="divNewsTextsSections">
                  <div className="divFancyButtonGroup">
                    <button type="button" className='Nunito CareerBtn1'>{price}</button>
                  </div>
                  <p className="NewsText1">{title}</p>
                  <p className="Nunito Newsdecp1">{text}</p>
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
      
      <div className="divNewsAddBarContainer reset00">
        <div className="divbarnewssection2 reset0">
          <div className="divCareerBarContainer ">
            <div className="divcareerbar1">
              <p className="NewsText1 Nunito">Əlaqə</p>
              <p className="Nunito Newsdecp1">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <div className="divNewsTimeZone reset reset1">
                <p className="divNewsTime">+994 50 123 45 67</p>
                <p className="divNewsTime">+994 70 123 45 67</p>
                <p className="divNewsTime">info@xacmazagro.az</p>
              </div>
            </div>
            <div className="divLine"></div>
            <div className="divcareerbar1">
              <p className="NewsText1 Nunito">Bizi izlə!</p>
              <div className="divNewsTimeZone reset">
                <EmailIcon />
                <InstagramIcon />
                <FacebookOutlinedIcon />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};





export default CareerCategory
