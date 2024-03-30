import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function ShortCut() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true' ? true : false; 
    });
    
    
    useEffect(() => {
        const root = document.querySelector(':root');
        const HomeMenuTextGrid = document.querySelectorAll('.HomeMenuTextGrid');
        const HomeMenuTextGrid1 = document.querySelectorAll('.HomeMenuTextGrid1');
        const HomeMenuTextGridDesp = document.querySelectorAll('.HomeMenuTextGridDesp');
        const divGridSections = document.querySelectorAll('.divGridSections');
        const divGridSections1 = document.querySelectorAll('.divGridSections1');
        const IconAdds = document.querySelectorAll('.IconAdds');
        const Footer = document.querySelectorAll('.Footer');
        const divAboutSectionHomeMenu = document.querySelectorAll('.divAboutSectionHomeMenu');
        const HomeSectionText01 = document.querySelectorAll('.HomeSectionText1');
        const HomeSectionText02 = document.querySelectorAll('.HomeSectionText02');
        const HomeSectionText3 = document.querySelectorAll('.HomeSectionText3');

        root.style.setProperty('--color', isDarkMode ? 'black' : '#66b64d');
        root.style.setProperty('--color1', isDarkMode ? '#466e61' : '#466e61');
        root.style.setProperty('--color2', isDarkMode ? '#66b64d' : '#00421d');
        root.style.setProperty('--color8', isDarkMode ? 'black' : 'white');
        root.style.setProperty('--color9', isDarkMode ? 'white' : 'black');

        HomeSectionText01.forEach((element) => {
            element.style.color = isDarkMode ? '#66b64d' : '#00421d';
        });

        HomeSectionText02.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : 'black';
        });

        HomeSectionText3.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : 'black';
        });

        Footer.forEach((element) => {
            element.style.backgroundColor = isDarkMode ? 'black' : '#466e61';
        });

        divAboutSectionHomeMenu.forEach((element) => {
            element.style.backgroundColor = isDarkMode ? 'black' : '#f4f4f4';
        });

        HomeMenuTextGrid.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : 'black';
        });

        HomeMenuTextGrid1.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : '#66b64d';
        });

        HomeMenuTextGridDesp.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : '#66b64d';
        });

        IconAdds.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : '#66b64d';
        });

        divGridSections.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : 'black';
            element.querySelector('p').style.color = isDarkMode ? 'white' : 'black'; // Set initial color for <p> inside divGridSections
            element.addEventListener('mouseover', () => {
                element.querySelector('p').style.color = isDarkMode ? 'black' : 'white';
            });
            element.addEventListener('mouseout', () => {
                element.querySelector('p').style.color = isDarkMode ? 'white' : 'black';
            });
        });

        divGridSections1.forEach((element) => {
            element.style.color = isDarkMode ? 'white' : 'black';
            element.querySelector('p').style.color = isDarkMode ? 'white' : 'black'; // Set initial color for <p> inside divGridSections1
            element.addEventListener('mouseover', () => {
                element.querySelector('p').style.color = isDarkMode ? 'black' : 'white';
            });
            element.addEventListener('mouseout', () => {
                element.querySelector('p').style.color = isDarkMode ? 'white' : 'black';
            });
        });

        document.body.style.backgroundColor = isDarkMode ? '#121212' : 'white';
    }, [isDarkMode]);
    

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('darkMode', newMode ? 'true' : 'false');
            return newMode;
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contactSection');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="divShortCutIcon">
                <div className="divScollbuttonNavMenuSection1">
                    <Link onClick={scrollToTop} id='name'><ArrowUpwardIcon /></Link>
                </div>
                <div className="divScollbuttonNavMenuSection2">
                    <Link onClick={scrollToContact} id='name'><ChatBubbleOutlineIcon /></Link>
                </div>
                <div className="divScollbuttonNavMenuSection3">
                    <Link onClick={toggleDarkMode} id='name'><DarkModeOutlinedIcon /></Link>
                </div>
            </div>
        </div>
    );
}

export default ShortCut;
