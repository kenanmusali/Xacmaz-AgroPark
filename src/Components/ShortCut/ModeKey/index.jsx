import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


function Modekey() {

  const [showLink, setShowLink] = useState(true);
  const location = useLocation();

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

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#121212" : "white";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode ? "true" : "false");
      return newMode;
    });
  };

  useEffect(() => {
    const currentPath = location.pathname;

    if (
      currentPath.startsWith("/contact") ||
      currentPath.startsWith("/about") ||
      currentPath.startsWith("/careers") ||
      currentPath.startsWith("/careers/:id") ||
      currentPath.startsWith("/gallery") ||
      currentPath.startsWith("/news") ||
      currentPath.startsWith("/news/:id") ||
      currentPath.startsWith("/products") ||
      currentPath === "/"
    ) {
      setShowLink(true);
    } else {
      setShowLink(false);
    }
  }, [location.pathname]);


  return (
    <div>
      {showLink && (
        <div className="divScollbuttonNavMenuSection3">
          <Link onClick={toggleDarkMode} id="name">
            <DarkModeOutlinedIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Modekey