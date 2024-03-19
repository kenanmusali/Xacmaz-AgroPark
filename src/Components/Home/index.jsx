import React, { useState, useEffect } from 'react';
import './style.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import HomeIcons from '../../../Public/Icons/Group164.svg'
import HomeIcons1 from '../../../Public/Icons/Group165.svg'
import HomeIcons2 from '../../../Public/Icons/Group166.svg'
import HomeIamge1 from '../../../Public/Images/image19.png'

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
      {/* Header */}
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

      {/* Icon Section */}
      <div className="divIconSectionBarHomeMenu">
        <div className="divIconHomeSec">
          <img src={HomeIcons} className='HomeIconSet' />
          <p className='HomeIconText'>Ət məhsulları</p>
          <p className='HomeIconDesp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className="divIconHomeSec">
          <img src={HomeIcons1} className='HomeIconSet' />
          <p className='HomeIconText'>Süd məhsulları</p>
          <p className='HomeIconDesp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <div className="divIconHomeSec">
          <img src={HomeIcons2} className='HomeIconSet' />
          <p className='HomeIconText'>Əkinçilik</p>
          <p className='HomeIconDesp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
      </div>

      {/* About Section */}
      <div className="divAboutSectionHomeMenu">
        <div className="divAboutSectionHomeMenuText">
          <p className='Nunito HomeSectionText1'>Haqqımızda</p>
          <p className='HomeSectionText2'>Xaçmaz Aqro Biznes</p>
          <p className='Nunito HomeSectionText3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
          <button className='Nunito bckBtn' type="button">Ətraflı</button>
        </div>
        <div className="divAboutSectionHomeMenuImg">
          <img src={HomeIamge1} className='HomeIamge1' />
        </div>
      </div>

    </div>
  );
}

export default HomeSection;
