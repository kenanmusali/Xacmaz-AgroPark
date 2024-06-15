import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'

function Map() {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div className="divMapSection">
        <div className="divAboutSectionHomeMenu  MapContactSpace">
          <div className="GroupAboutSectionHomeMenuImg">
            <div className="divAboutSectionHomeMenuImg divAboutSectionHomeMenuImgMap GMapFrame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4099.432774937571!2d49.982773076350576!3d40.41814239418468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1718478013657!5m2!1sen!2sus"
                width="555"
                height="555"
                style={{ border: 0, borderTopLeftRadius: '5rem', borderBottomRightRadius: '5rem', border: '2px solid gray' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

