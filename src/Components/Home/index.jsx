import React, { useState, useEffect } from 'react';
import './style.css';
import './responsive.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import HomeIcons from '../../../Public/Icons/Group164.svg'
import HomeIcons1 from '../../../Public/Icons/Group165.svg'
import HomeIcons2 from '../../../Public/Icons/Group166.svg'
import HomeImage1 from '../../../Public/Images/image19.png'
import HomeImage2 from '../../../Public/Images/Rectangle9.png'
import HomeImage3 from '../../../Public/Images/Rectangle8.png'
import HomeImage4 from '../../../Public/Images/Rectangle6.png'
import HomeImage5 from '../../../Public/Images/Rectangle5.png'
import HomeIcons3 from '../../../Public/Icons/Group179.svg'
import { Link } from 'react-router-dom';

function ContactForm() {
  const [backgroundClass, setBackgroundClass] = useState('defaultBackground');

  const handleSendClick = () => {
    const inputs = document.querySelectorAll('.inputCon');
    const isEmpty = Array.from(inputs).some((input) => !input.value.trim());

    if (isEmpty) {
      setBackgroundClass('emptyInputBackground');
    }
  };

  const handleInputChange = () => {
    setBackgroundClass('defaultBackground');
  };

  return (
    <div className={`divHomeMenuSectionContact ${backgroundClass}`}>
      <div className="divAboutSectionHomeMenuText">
        <p className='Nunito HomeSectionText1'>Nə etdiyimizi bilmək istəyirsiniz?</p>
        <p className='HomeSectionText2 HomeContactSecText'>Yeniliklərdən xəbərdar olmaq üçün qeydiyyatdan keçin</p>
      </div>
      <div className="divHomeContactSec">
        <div className="inputbar1HomeSec">
          <input className='inputCon' type="text" placeholder='Ad, Soyad*' onChange={handleInputChange} />
          <input className='inputCon' type="email" placeholder='Email*' onChange={handleInputChange} />
        </div>
        <div className="inputbar1HomeSec">
          <input className='inputCon' type="text" placeholder='Mesaj*' onChange={handleInputChange} />
        </div>
        <button className='ContactSendBtn' type="button" onClick={handleSendClick}>Göndər</button>
      </div>
    </div>
  );
}



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
            <Link to={'/about'} className="bckBtn">
              Haqqımızda
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
          <Link to={'/about'} className='Nunito bckBtn' >Ətraflı</Link>
        </div>
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage1} className='HomeImage1' />
          </div>
        </div>
      </div>

      {/* Add PopsUp */}
      <div className="divHomemenuSectionAdds">
        <div className="divGrisHomeMenuSection1">
          <div className="divGridSections">
            <img src={HomeImage2} className='HomeImage2' />
            <p className='HomeMenuTextGrid'>Xəbərlər</p>
            <div className="divGridSectionMenu">
              <p className='Nunito HomeMenuTextGrid1'>Ətraflı</p>
              <EastRoundedIcon className='IconAdds' />
            </div>
          </div>
          <div className="divGridSections">
            <img src={HomeImage3} className='HomeImage3' />
            <p className='HomeMenuTextGrid'>Vakansiya</p>
            <div className="divGridSectionMenu">
              <p className='Nunito HomeMenuTextGrid1'>Ətraflı</p>
              <EastRoundedIcon className='IconAdds' />
            </div>
          </div>
        </div>
        <div className="divGrisHomeMenuSection2">
          <div className="divGridSections1">
            <img src={HomeImage4} className='HomeImage4' />
            <div className="divGrisHomeMenuSectionfortext">
              <p className='HomeMenuTextGrid'>Şəkillər</p>
              <div className="divGridSectionMenu">
                <p className='Nunito HomeMenuTextGrid1 HomeMenuTextGridDesp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <EastRoundedIcon className='IconAdds' />
              </div>
            </div>
          </div>
          <div className="divGridSections1">
            <div className="divVideoAddSection">
              <img src={HomeImage5} className='HomeImage4' />
              <img src={HomeIcons3} className='HomeIcons3' />
            </div>
            <div className="divGrisHomeMenuSectionfortext">
              <p className='HomeMenuTextGrid'>Videolar</p>
              <div className="divGridSectionMenu">
                <p className='Nunito HomeMenuTextGrid1 HomeMenuTextGridDesp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <EastRoundedIcon className='IconAdds' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <ContactForm />

    </div>
  );
}

export default HomeSection;
