import React, { useState, useEffect } from 'react';
import './style.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function HomeSection() {
  const images = [
    'Group171.png',
    'Group172.png',
    'Group173.png',
    'Group174.png',
    'Group175.png',
    'Group176.png',
    'Group177.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="divHeader">
        <div
          className="Background"
          style={{
            backgroundImage: `url(../../../Public/Background/${images[currentImageIndex]})`,
          }}
        >
          <div className="HomeText">
            <p className="bckText">Məhsullar</p>
            <p className="bckText1">
              Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq
            </p>
            <button type="button" className="bckBtn">
              Haqqımızda
            </button>
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

export default HomeSection;
