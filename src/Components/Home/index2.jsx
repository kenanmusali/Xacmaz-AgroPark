import React from 'react';
import './style.css';
import HomeIcons from '../../../Public/Icons/Group164.svg'
import HomeIcons1 from '../../../Public/Icons/Group165.svg'
import HomeIcons2 from '../../../Public/Icons/Group166.svg'

function Section() {
 
  return (
    <div>
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
    </div>
  );
}

export default Section;
