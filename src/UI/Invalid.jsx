import React from "react";
import Invalidimg from "../Images/invalid.png";
import Cancelimg from "../Images/x.png";

import "./Invalid.css";

const Invalid = () => {
   return (
      <div className="invalid">
         <div className="invalid-header">
            <div className="invalid-heading">
               <img src={Invalidimg} alt="" />
               Invalid email
            </div>
            <img src={Cancelimg} alt="" />
         </div>
         <div className="invalid-body">Please enter valid email address</div>
      </div>
   );
};

export default Invalid;
