import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


function Modekey() {

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
    
    

    return (
        <div>
            <div className="divScollbuttonNavMenuSection3">
              <Link onClick={toggleDarkMode} id="name">
                <DarkModeOutlinedIcon />
              </Link>
            </div>
          </div>
      );
    }

export default Modekey