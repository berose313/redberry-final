import React from "react";
import "./Registration.css";

import Background from "../../UI/Background";
import RegistrationImage from "../../Images/registration.png";

const Registration = (props) => {
   return (
      <div>
         <Background image={RegistrationImage} />
         <div className="reg-headings">
            <div className="reg-header">Start creating your account</div>
            <div className="reg-progress">
               <div className="reg-progress-block progress-first">
                  <div className="reg-progress-btn">1</div>
                  <span>Personal information</span>
               </div>
               <div className="reg-progress-block progress-second">
                  <div className="reg-progress-btn ">2</div>
                  <span>Chess experience</span>
               </div>
            </div>
            <div className="reg-form-heading">
               <h1>Personal information</h1>
               <h3>This is basic informaton fields</h3>
            </div>
            <form action="" className="reg-form">
               <input
                  type="text"
                  placeholder="Name"
                  required
                  className="reg-form-input"
               />
               <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="reg-form-input"
               />
               <input
                  type="number"
                  placeholder="Phone number"
                  required
                  className="reg-form-input"
               />
               <input
                  type="date"
                  placeholder="Date of birth"
                  required
                  className="reg-form-input"
               />
               <div className="reg-form-btns">
                  <button className="reg-btn-white" onClick={props.prev}>
                     back
                  </button>
                  <button
                     className="reg-btn-black"
                     type="submit"
                     onClick={props.next}
                  >
                     next
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Registration;
