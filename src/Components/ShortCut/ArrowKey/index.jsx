import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


function Arrowkey() {
  const [showLink, setShowLink] = useState(true);
  const location = useLocation();


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
        <div className="divScollbuttonNavMenuSection1">
          <Link onClick={scrollToTop} id="name">
            <ArrowUpwardIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Arrowkey