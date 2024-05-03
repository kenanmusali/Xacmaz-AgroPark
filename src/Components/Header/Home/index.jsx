import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Link } from 'react-router-dom';
import video from '../../../../Public/Videos/videoplayback.mp4'

function HomeHeader() {
  const images = [
    { type: 'video', src: video },
    { type: 'image', src: 'Group171.png' },
    { type: 'image', src: 'Group172.png' },
    { type: 'image', src: 'Group173.png' },
    { type: 'image', src: 'Group174.png' },
    { type: 'image', src: 'Group175.png' },
    { type: 'image', src: 'Group176.png' },
    { type: 'image', src: 'Group177.png' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalTime = images[currentImageIndex].type === 'video' ? 51000 : 6000;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [images, currentImageIndex]);


  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Language
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className="divHeader">
        <div
          className={`Background ${images[currentImageIndex].type === 'image' ? 'imageWithPadding' : ''}`}
          style={{
            backgroundImage: images[currentImageIndex].type === 'image' ? `url(../../../Public/Background/${images[currentImageIndex].src})` : 'none',
          }}>
          {images[currentImageIndex].type === 'video' &&
            <video
              src={images[currentImageIndex].src}
              autoPlay
              muted
              loop
              style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: '-1', objectFit: 'cover' }}
            />
          }
            <div className="HomeText">
              <p className="bckText">{language === 'az' ? 'Məhsullar' : 'Products'}</p>
              <p className="bckText1">
                {language === 'az' ? 'Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq' : 'We deal with agribusiness communications'}
              </p>
              <Link to={'/about'} className="bckBtn">
                {language === 'az' ? 'Haqqımızda' : 'About Us'}
              </Link>
            </div>
            <div className="HomeCount">
              <div className="alineHome">
                <ArrowBackIosRoundedIcon
                  className="iconHome"
                  onClick={handlePrevImage}
                />
                <ArrowForwardIosRoundedIcon
                  className="iconHome"
                  onClick={handleNextImage}
                />
                <p className="HomeSectionCounts">*{String(currentImageIndex + 1).padStart(2, '0')}</p>
              </div>
          
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomeHeader;
