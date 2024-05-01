import React from 'react';
import './style.css';
import HomeImage1 from '../../../../Public/Images/image19.png'
import { Link } from 'react-router-dom';


function Info() {

  return (
    <div>
      <div className="divAboutSectionHomeMenu">
        <div className="divAboutSectionHomeMenuText">
          <p className='Nunito HomeSectionText1 HomeSectionText01'>Haqqımızda</p>
          <p className='HomeSectionText2 HomeSectionText02'>Xaçmaz Aqro Biznes</p>
          <p className='Nunito HomeSectionText3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
          <Link to={'/about'} className='Nunito bckBtn' >Ətraflı</Link>
        </div>
        <div className="GroupAboutSectionHomeMenuImg">
          <div className="divAboutSectionHomeMenuImg">
            <img src={HomeImage1} className='HomeImage1' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
