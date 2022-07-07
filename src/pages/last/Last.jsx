import React from "react";
import "./Last.css";

import Background from "../../UI/Background";
import LastImage from "../../Images/last.png";
import LastLogo from "../../Images/last-logo.png";

const Last = () => {
   return (
      <div>
         <Background image={LastImage} />
         <div className="last">
            <img src={LastLogo} alt="" className="last-logo" />
         </div>
      </div>
   );
};

export default Last;
