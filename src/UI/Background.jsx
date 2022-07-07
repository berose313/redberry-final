import React from "react";
import "./Background.css";

import Header from "./Header";

const Background = (props) => {
   return (
      <div>
         <Header />
         <img src={props.image} alt="" className="image" />
      </div>
   );
};

export default Background;
