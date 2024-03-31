import React, { useEffect, useState } from 'react';
import './style.css';
import './responsive.css';
import { Link, useParams } from 'react-router-dom';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

function CareerDetailSection() {
  const { id } = useParams();
  const [career, setCareer] = useState({});
  
  useEffect(() => {
    fetch(`http://localhost:3001/Careers/${id}`)
      .then(res => res.json())
      .then(data => setCareer(data));
  }, [id]);

  return (
    <div>
      <div className="DivMenuSectionHeaderCareer">
        <div className="DivTopNavShort">
          <Link to='/' className='LinkNav'>Ana Səhifə</Link>
          <KeyboardArrowRightRoundedIcon className='IconRight' />
          <p className='RecentMenu'>Vakansiyalar</p>
        </div>
        <div className="DivBottomtextShort">
          <p className="bckText Menutexts">Vakansiyalar</p>
          <p className="bckText1 Menutexts">Biz aqrobiznes kommunikasiyaları ilə məşğul oluruq</p>
        </div>
      </div>

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
          <button type="button" className='SubmitCvBtn'>Müraciət et</button>
        </div>
      </div>
    </div>
  );
}

export default CareerDetailSection;
