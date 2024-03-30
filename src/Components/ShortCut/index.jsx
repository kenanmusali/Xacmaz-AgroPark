import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function ShortCut() {
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
            </div>
        </div>
    );
}

export default ShortCut;
