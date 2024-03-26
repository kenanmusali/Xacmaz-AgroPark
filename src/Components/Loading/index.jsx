import React, { useEffect } from 'react';
import './style.css';
import cowLoad from '../../../Public/Elements/Cow.gif'

function LoadingSection() {
    useEffect(() => {
        const loader = document.querySelector(".loadingbackground");

        setTimeout(() => {
            loader.style.transition = "opacity 0.6s";
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.remove();
            }, 300);
        }, 3500);

    }, []);

    return (
        <div className="loadingbackground">
                    <img src={cowLoad} className='Load chgLanload' />
                    <div className="loading-bar">
                        <div className="fill"></div>
                    </div>
        </div>
    );
}

export default LoadingSection;
