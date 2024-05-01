import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Formkey() {

      const [showContactLink, setShowContactLink] = useState(true);
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
            {showContactLink && (
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