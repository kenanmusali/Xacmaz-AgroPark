import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function CareerDetailCategory() {
  const { id } = useParams();
  const [career, setCareer] = useState({});
  const [isCareerFormVisible, setCareerFormVisible] = useState(false);

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
          {/* Accessing article1 */}
          <div className="divTextCareerData">
            <p className='divcareertexts'>{career.article1?.title1}</p>
            <p className='divcareertexts1'>{career.article1?.text}</p>
          </div>
          {/* Accessing article2 */}
          <div className="divTextCareerData">
            <p className='divcareertexts'>{career.article2?.title1}</p>
            <p className='divcareertexts1'><span>• </span>{career.article2?.text1}</p>
            <p className='divcareertexts1'><span>• </span>{career.article2?.text2}</p>
            <p className='divcareertexts1'><span>• </span>{career.article2?.text3}</p>
            <p className='divcareertexts1'><span>• </span>{career.article2?.text4}</p>
          </div>
          {/* Accessing article3 */}
          <div className="divTextCareerData">
            <p className='divcareertexts'>{career.article3?.title1}</p>
            <p className='divcareertexts1'><span>• </span>{career.article3?.text1}</p>
            <p className='divcareertexts1'><span>• </span>{career.article3?.text2}</p>
            <p className='divcareertexts1'><span>• </span>{career.article3?.text3}</p>
            <p className='divcareertexts1'><span>• </span>{career.article3?.text4}</p>
          </div>
          <button type="button" className='SubmitCvBtn' onClick={handleCareerFormToggle}>Müraciət et</button>
        </div>
        {isCareerFormVisible && (
        <div className="divSubmitCareerSectionbtnGroup">
          <div className="divSubmitCareerSectionbtn">
            <div className="divicontextgroupcareer">
              <p className='divcareertexts'>Məlumatlar</p>
              <CloseRoundedIcon className='closeIconCareer' onClick={handleCareerFormToggle}/>
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

      
      <div className="divNewsAddBarContainer reset00">
        <div className="divbarnewssection2 reset0">
          <div className="divCareerBarContainer ">
            <div className="divcareerbar1">
              <p className="NewsText1 Nunito">Əlaqə</p>
              <p className="Nunito Newsdecp1">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <div className="divNewsTimeZone reset reset1">
                <p className="divNewsTime">+994 50 123 45 67</p>
                <p className="divNewsTime">+994 70 123 45 67</p>
                <p className="divNewsTime">info@xacmazagro.az</p>
              </div>
            </div>
            <div className="divLine"></div>
            <div className="divcareerbar1">
              <p className="NewsText1 Nunito">Bizi izlə!</p>
              <div className="divNewsTimeZone reset">
                <EmailIcon />
                <InstagramIcon />
                <FacebookOutlinedIcon />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default CareerDetailCategory;
