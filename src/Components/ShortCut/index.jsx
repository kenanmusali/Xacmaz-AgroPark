import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


function ShortCut() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" ? true : false;
  });

  useEffect(() => {
    if (isDarkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [isDarkMode]); 
  
    useEffect(()=>{
        document.body.style.backgroundColor = isDarkMode ? "#121212" : "white";
    }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode ? "true" : "false");
      return newMode;
    });
  };

  const [showContactLink, setShowContactLink] = useState(true);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    const formElement = document.querySelector('.divHomeMenuSectionContact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  useEffect(() => {
    const currentPath = location.pathname;

    if (
      currentPath.startsWith("/careers") ||
      currentPath.startsWith("/gallery") ||
      currentPath.startsWith("/about") ||
      currentPath.startsWith("/news") ||
      currentPath.startsWith("/products")
    ) {
      setShowContactLink(false);
    } else {
      setShowContactLink(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="divShortCutIcon">
        <div className="divScollbuttonNavMenuSection1">
          <Link onClick={scrollToTop} id="name">
            <ArrowUpwardIcon />
          </Link>
        </div>
        {showContactLink && (
          <div className="divScollbuttonNavMenuSection2">
            <Link onClick={scrollToContact} id="name">
              <ChatBubbleOutlineIcon />
            </Link>
          </div>
        )}
        <div className="divScollbuttonNavMenuSection3">
          <Link onClick={toggleDarkMode} id="name">
            <DarkModeOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShortCut;
