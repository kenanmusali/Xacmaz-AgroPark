import React from "react";
import { Link } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


function Arrowkey() {
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <div>

            <div className="divScollbuttonNavMenuSection1">
              <Link onClick={scrollToTop} id="name">
                <ArrowUpwardIcon />
              </Link>
            </div>
          </div>
      );
    }

export default Arrowkey