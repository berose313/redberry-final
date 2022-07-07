import React from "react";
import "./Header.css";

import header from "../Images/header-logo.png";

const Header = () => {
   return (
      <div className="header">
         <img src={header} alt="" />
      </div>
   );
};

export default Header;
