import React, { useState } from 'react';
import './style.css';

function Form() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [backgroundClass, setBackgroundClass] = useState('defaultBackground');
  const [sentEmails, setSentEmails] = useState([]);
  const [buttonText, setButtonText] = useState('Göndər'); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
    setBackgroundClass('defaultBackground');
  };

  const handleSendClick = () => {
    const { name, email, message } = inputs;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setBackgroundClass('emptyInputBackground');
      return;
    }

    if (sentEmails.includes(email)) {
      alert('This email has already been sent.');
      return;
    }

    const currentTime = new Date().toISOString();

    sendDataToBackend({ ...inputs, MailTime: currentTime });

    setSentEmails(prevSentEmails => [...prevSentEmails, email]);

    setInputs({
      name: '',
      email: '',
      message: ''
    });

    setButtonText('Mesajınız Göndərildi');

    setTimeout(() => {
      setButtonText('Göndər');
    }, 2000);
  };

  const sendDataToBackend = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/Mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Network response has problem');
      }
      const responseData = await response.json();
      console.log(responseData); 
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className={`divHomeMenuSectionContact ${backgroundClass}`}>
      <div className="divAboutSectionHomeMenuText">
        <p className='Nunito HomeSectionText1'>Nə etdiyimizi bilmək istəyirsiniz?</p>
        <p className='HomeSectionText2 HomeContactSecText'>Yeniliklərdən xəbərdar olmaq üçün qeydiyyatdan keçin</p>
      </div>
      <div className="divHomeContactSec">
        <div className="inputbar1HomeSec">
          <input
            className='inputCon'
            type="text"
            name="name"
            placeholder='Ad, Soyad*'
            value={inputs.name}
            onChange={handleInputChange}
          />
          <input
            className='inputCon'
            type="email"
            name="email"
            placeholder='Email*'
            value={inputs.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputbar1HomeSec">
          <input
            className='inputCon'
            type="text"
            name="message"
            placeholder='Mesaj*'
            value={inputs.message}
            onChange={handleInputChange}
          />
        </div>
        <button className='ContactSendBtn' type="button" onClick={handleSendClick}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Form;
