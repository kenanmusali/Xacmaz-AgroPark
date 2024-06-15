import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css';
import HomeImage1 from '../../../../Public/Images/image191.png'

function Info() {
  const { language } = useContext(LanguageContext);
  
  return (
    <div>
      <div className="divAboutSectionHomeMenu">
        <div className="divAboutSectionHomeMenuText">
          <p className='Nunito HomeSectionText1 HomeSectionText01'>{language === 'az' ? 'Haqqımızda' : 'About Us'}</p>
          <p className='HomeSectionText2 HomeSectionText02'>{language === 'az' ? 'Xaçmaz Aqro Biznes' : 'Xaçmaz Aqro Business'}</p>
          <p className='Nunito HomeSectionText3'>{language === 'az' ? '2021-ci ildən bəri ailəmizə məxsus fermer şirkətimiz davamlı kənd təsərrüfatında qabaqcıl olmuşdur və yüksək keyfiyyətli məhsulların etibarlı təchizatçısına çevrilmişdir. İnnovasiyalara və ətraf mühitin mühafizəsinə sadiq olaraq, günümüzün çağırışlarına cavab verərkən köklərimizə hörmət etməyə davam edirik.' : 'Since 1987, our family-owned farming company has been a pioneer in sustainable agriculture, growing into a trusted provider of premium produce. Committed to innovation and environmental stewardship, we continue to honor our roots while meeting the challenges of today.'}</p>
        </div>
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage1} className='HomeImage1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info