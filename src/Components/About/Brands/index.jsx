import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'
import BrandImg1 from '../../../../Public/Brands/1.png'
import BrandImg2 from '../../../../Public/Brands/2.png'
import BrandImg3 from '../../../../Public/Brands/3.png'
import BrandImg4 from '../../../../Public/Brands/4.png'
import BrandImg5 from '../../../../Public/Brands/5.png'
import BrandImg6 from '../../../../Public/Brands/6.png'
import BrandImg7 from '../../../../Public/Brands/7.png'
import BrandImg8 from '../../../../Public/Brands/8.png'
import BrandImg9 from '../../../../Public/Brands/9.png'
import BrandImg10 from '../../../../Public/Brands/10.png'

function Brands() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div id="partner">
        <div className="container">
          <h2 className="title"> {language === 'az' ? 'Partnyorlarımız' : 'Our Brands'}</h2>
          <div className="partner-img">
            <img src={BrandImg1} />
            <img src={BrandImg2} />
            <img src={BrandImg3} />
            <img src={BrandImg4} />
            <img src={BrandImg5} />
            <img src={BrandImg6} />
            <img src={BrandImg7} />
            <img src={BrandImg8} />
            <img src={BrandImg9} />
            <img src={BrandImg10} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands