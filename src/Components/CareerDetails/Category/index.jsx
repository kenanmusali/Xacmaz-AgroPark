import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css';
import { useParams } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Info from '../../Info';

function CareerDetailCategory() {
  const { id } = useParams();
  const [career, setCareer] = useState({});
  const [isCareerFormVisible, setCareerFormVisible] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetch(`http://localhost:3001/Careers/${id}`)
      .then(res => res.json())
      .then(data => setCareer(data));
  }, [id]);

  const handleCareerFormToggle = () => {
    setCareerFormVisible(!isCareerFormVisible);
  };

  return (
    <div>
      <div className="divCareerSectionSubmitContainer">
        <div className="divCareerSectionSubmit">
          <div className="divTextCareerData">
            <p className='divcareertexts'>{career.article1?.title1[language]}</p>
            <p className='divcareertexts1'>{career.article1?.text[language]}</p>
          </div>
          <div className="divTextCareerData">
            <p className='divcareertexts'>{career.article2?.title1[language]}</p>
            <div>
              <p className='divcareertexts1'>{career.article2?.text1[language]}</p>
              <p className='divcareertexts1'>{career.article2?.text2[language]}</p>
              <p className='divcareertexts1'>{career.article2?.text3[language]}</p>
              <p className='divcareertexts1'>{career.article2?.text4[language]}</p>
            </div>
          </div>
          <div className="divTextCareerData">
            <p className='divcareertexts'>{career.article3?.title1[language]}</p>
            <div>
              <p className='divcareertexts1'>{career.article3?.text1[language]}</p>
              <p className='divcareertexts1'>{career.article3?.text2[language]}</p>
              <p className='divcareertexts1'>{career.article3?.text3[language]}</p>
              <p className='divcareertexts1'>{career.article3?.text4[language]}</p>
            </div>
          </div>
          <button type="button" className='SubmitCvBtn' onClick={handleCareerFormToggle}>Müraciət et</button>
        </div>
        {isCareerFormVisible && (
          <div className="divSubmitCareerSectionbtnGroup">
            <div className="divSubmitCareerSectionbtn">
              <div className="divicontextgroupcareer">
                <p className='divcareertexts'>Məlumatlar</p>
                <CloseRoundedIcon className='closeIconCareer' onClick={handleCareerFormToggle} />
              </div>
              <input type="text" className='CareerSubmit' placeholder='Ad*' />
              <input type="text" className='CareerSubmit' placeholder='Soyad*' />
              <input type="text" className='CareerSubmit' placeholder='Doğum Tarixi*' />
              <input type="text" className='CareerSubmit' placeholder='İş Təcrübəsi*' />
              <input type="text" className='CareerSubmit' placeholder='Email*' />
              <input type="text" className='CareerSubmit' placeholder='Telefon*' />
              <button type="button" className='SubmitCvBtn' onClick={handleCareerFormToggle}>Göndər</button>
            </div>
          </div>
        )}
      </div>
      <Info />
    </div>
  );
}

export default CareerDetailCategory;
