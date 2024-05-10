import React, { useContext } from 'react';
import { LanguageContext } from '../../../Assets/Language';
import './style.css'
import galleryImg1 from '../../../../Public/Gallery/i1.png'
import galleryImg2 from '../../../../Public/Gallery/i2.png'
import galleryImg3 from '../../../../Public/Gallery/i3.png'
import galleryImg4 from '../../../../Public/Gallery/i4.png'
import galleryImg5 from '../../../../Public/Gallery/i5.png'
import galleryImg6 from '../../../../Public/Gallery/i6.png'
import galleryImg7 from '../../../../Public/Gallery/i7.png'
import galleryImg8 from '../../../../Public/Gallery/i11.png'
import galleryImg9 from '../../../../Public/Gallery/i22.png'
import galleryImg10 from '../../../../Public/Gallery/i33.png'
import galleryImg11 from '../../../../Public/Gallery/i44.png'
import galleryImg12 from '../../../../Public/Gallery/i55.png'
import galleryImg13 from '../../../../Public/Gallery/i66.png'
import galleryImg14 from '../../../../Public/Gallery/i77.png'
import galleryImg15 from '../../../../Public/Gallery/video1.png'
import galleryImg16 from '../../../../Public/Gallery/video2.png'
import galleryImg17 from '../../../../Public/Gallery/video3.png'
import galleryImg18 from '../../../../Public/Gallery/video4.png'

function Category() {
  const { language } = useContext(LanguageContext);

  const scrollToGallery = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offset + 1,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <div className='GalleryGroupSection'>
      <div className="about-header">
        <div className="containerGallery">
          <a id="photoLink" href="#" onClick={() => scrollToGallery('photo')}>
            {language === 'az' ? 'Fotoqalereya' : 'Photo Gallery'}
          </a>
          <a id="videoLink" href="#" onClick={() => scrollToGallery('video')}>
            {language === 'az' ? 'Videoqalereya' : 'Video Gallery'}
          </a>
        </div>
    </div>
    <section id="gallery">
      <div id="photo" className="gal">
        <div className="containerGallery containerGallery001">
          <div className="gallery-img-1">
            <img src={galleryImg1} />
          </div>
          <div className="gallery-images">
            <div className="gallery-img">
              <img src={galleryImg2} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg3} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg4} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg5} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg6} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg7} />
            </div>
          </div>
          <div className="gallery-images">
            <div className="gallery-img">
              <img src={galleryImg8} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg9} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg10} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg11} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg12} />
            </div>
            <div className="gallery-img">
              <img src={galleryImg13} />
            </div>
          </div>
          <div className="gallery-img-1">
            <img src={galleryImg14} />
          </div>
        </div>
      </div>
      <div id="video" className="gal" style={{ display: "block" }}>
        <div className="containerGallery">
          <div className="gallery-video">
            <img src={galleryImg15} alt="" />
            <div className="play">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </div>
          </div>
          <div className="gallery-video">
            <img src={galleryImg16} alt="" />
            <div className="play">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </div>
          </div>
          <div className="gallery-video">
            <img src={galleryImg17} alt="" />
            <div className="play">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </div>
          </div>
          <div className="gallery-video">
            <img src={galleryImg18} alt="" />
            <div className="play">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

)
}

export default Category