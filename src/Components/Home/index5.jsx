import React, { useState } from 'react';
import './style.css';

function Form() {
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


export default Form;
