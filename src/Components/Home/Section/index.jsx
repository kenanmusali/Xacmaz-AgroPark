import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css';
import HomeIcons from '../../../../Public/Icons/Group164.svg'
import HomeIcons1 from '../../../../Public/Icons/Group165.svg'
import HomeIcons2 from '../../../../Public/Icons/Group166.svg'

function Section() {

  // Language
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className="divIconSectionBarHomeMenu">
        <div className="divIconHomeSec">
          <img src={HomeIcons} className='HomeIconSet' />
          <p className='HomeIconText'>{language === 'az' ? 'Ət Məhsulları' : 'Meat Products'}</p>
          <p className='HomeIconDesp'>{language === 'az' ? 'Onlar dadı və rahatlığı ilə tanınan heyvanlardan hazırlanmış emal edilmiş qidalardır' : 'They are processed foods made from animals known for their taste and convenience'}</p>
        </div>
        <div className="divIconHomeSec">
          <img src={HomeIcons1} className='HomeIconSet' />
          <p className='HomeIconText'>{language === 'az' ? 'Süd Məhsulları' : 'Milk Products'}</p>
          <p className='HomeIconDesp'>{language === 'az' ? 'Pendir, qatıq və yağ kimi süd məhsulları qida dəyəri və çox yönlü olması ilə tanınır' : 'Dairy products such as cheese, yogurt, and butter are known for their nutritional value and versatility'}</p>
        </div>
        <div className="divIconHomeSec">
          <img src={HomeIcons2} className='HomeIconSet' />
          <p className='HomeIconText'>{language === 'az' ? 'Əkinçilik' : 'Farming'}</p>
          <p className='HomeIconDesp'>{language === 'az' ? 'Əkinçilik məhsul yetişdirmək və qida və ya digər məhsullar üçün mal-qara yetişdirmək təcrübəsidir' : 'Farming is the practice of cultivating crops and raising livestock for food or other products'}</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
