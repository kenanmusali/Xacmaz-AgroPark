import React, { useState, useEffect, createContext, useContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'az');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        updateStyles(newLanguage);
    };

    const updateStyles = (selectedLanguage) => {
        const elements = document.querySelectorAll('.LanguageGroup > div');
        elements.forEach((element) => {
            if (element.firstChild.textContent === selectedLanguage.toUpperCase()) {
                element.style.backgroundColor = 'var(--color)';
                element.style.color = 'var(--color8)';
            } else {
                element.style.backgroundColor = 'var(--color11)';
                element.style.color = 'var(--color2)';
            }
        });
    };

    useEffect(() => {
        updateStyles(language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, handleLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

function Language() {
    const { language, handleLanguageChange } = useContext(LanguageContext);

    return (
        <div>
            <div className="LanguageGroup">
                <div className="divLanguageSection" onClick={() => handleLanguageChange('az')}>
                    <p className={language === 'az' ? 'azLan selected' : 'azLan'}>AZ</p>
                </div>
                <div className="divLanguageSection" onClick={() => handleLanguageChange('en')}>
                    <p className={language === 'en' ? 'enLan selected' : 'enLan'}>EN</p>
                </div>
            </div>
        </div>
    )
}

export default Language;