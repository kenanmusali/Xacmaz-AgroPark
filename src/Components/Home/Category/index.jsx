import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import HomeImage2 from '../../../../Public/Images/Rectangle9.png'
import HomeImage3 from '../../../../Public/Images/Rectangle8.png'
import HomeImage4 from '../../../../Public/Images/Rectangle6.png'
import HomeImage5 from '../../../../Public/Images/Rectangle5.png'
import HomeIcons3 from '../../../../Public/Icons/Group179.svg'
import { Link } from 'react-router-dom';

function Category() {

  // Language
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <div className="divHomemenuSectionAdds">
        <div className="divGrisHomeMenuSection1">
          <Link to='/news' className="divGridSections">
            <img src={HomeImage2} className='HomeImage2' />
            <p className='HomeMenuTextGrid'>Xəbərlər</p>
            <div className="divGridSectionMenu">
              <p className='Nunito HomeMenuTextGrid1'>{language === 'az' ? 'Ətraflı' : 'See More'}</p>
              <EastRoundedIcon className='IconAdds' />
            </div>
          </Link>
          <Link to='/careers' className="divGridSections">
            <img src={HomeImage3} className='HomeImage3' />
            <p className='HomeMenuTextGrid'>Vakansiya</p>
            <div className="divGridSectionMenu">
              <p className='Nunito HomeMenuTextGrid1'>{language === 'az' ? 'Ətraflı' : 'See More'}</p>
              <EastRoundedIcon className='IconAdds' />
            </div>
          </Link>
        </div>
        <div className="divGrisHomeMenuSection2">
          <Link to='/gallery' className="divGridSections1">
            <img src={HomeImage4} className='HomeImage4' />
            <div className="divGrisHomeMenuSectionfortext">
              <p className='HomeMenuTextGrid'>{language === 'az' ? 'Şəkillər' : 'Images'}</p>
              <div className="divGridSectionMenu">
              <p className='Nunito HomeMenuTextGrid1 HomeMenuTextGridDesp'>{language === 'az' ? 'Ətraflı' : 'See More'}</p>
                <EastRoundedIcon className='IconAdds' />
              </div>
            </div>
          </Link>
          <div className="divGridSections1">
            <div className="divVideoAddSection">
              <img src={HomeImage5} className='HomeImage4' />
              <img src={HomeIcons3} className='HomeIcons3' />
            </div>
            <div className="divGrisHomeMenuSectionfortext">
              <p className='HomeMenuTextGrid'>{language === 'az' ? 'Videolar' : 'Videos'}</p>
              <div className="divGridSectionMenu">
                <p className='Nunito HomeMenuTextGrid1 HomeMenuTextGridDesp'>{language === 'az' ? 'Ətraflı' : 'See More'}</p>
                <EastRoundedIcon className='IconAdds' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Category;
