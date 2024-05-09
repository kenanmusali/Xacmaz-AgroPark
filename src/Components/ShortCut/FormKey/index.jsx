import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Formkey() {

      const [showLink, setShowLink] = useState(true);
      const location = useLocation();
    
      const scrollToContact = () => {
        const formElement = document.querySelector('.divHomeMenuSectionContact');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    
      useEffect(() => {
        const currentPath = location.pathname;
    
        if (
          currentPath.startsWith("/contact") ||
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
              <div className="divScollbuttonNavMenuSection2">
                <Link onClick={scrollToContact} id="name">
                  <ChatBubbleOutlineIcon />
                </Link>
              </div>
            )}
          </div>
      );
    }

export default Formkey