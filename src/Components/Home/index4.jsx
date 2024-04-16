import React from 'react';
import './style.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import HomeImage2 from '../../../Public/Images/Rectangle9.png'
import HomeImage3 from '../../../Public/Images/Rectangle8.png'
import HomeImage4 from '../../../Public/Images/Rectangle6.png'
import HomeImage5 from '../../../Public/Images/Rectangle5.png'
import HomeIcons3 from '../../../Public/Icons/Group179.svg'

function Category() {

  return (
    <div>
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

    </div>
  );
}

export default Category;
