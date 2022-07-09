import React, { Fragment, useState } from "react";
import "./Registration.css";

import Background from "../../UI/Background";
import RegistrationImage from "../../Images/registration.png";

const Registration = (props) => {
   const [name, setName] = useState(localStorage.getItem("name"));
   const [email, setEmail] = useState(localStorage.getItem("email"));
   const [number, setNumber] = useState(localStorage.getItem("number"));
   const [date, setDate] = useState(localStorage.getItem("date"));

   let data = [];

   const submitHandler = (event) => {
      event.preventDefault();
      data.push({
         name,
         email,
         number,
         date,
      });

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("number", number);
      localStorage.setItem("date", date);

      // props.takeData(data);
      props.next();
   };

   return (
      <Fragment>
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
            <form action="" className="reg-form" onSubmit={submitHandler}>
               <input
                  type="text"
                  placeholder="Name"
                  required
                  className="reg-form-input"
                  value={localStorage.getItem("name")}
                  name="name"
                  onChange={(event) => {
                     setName(event.target.value);

                     if (event.target.value.length < 3) {
                        setTimeout(() => {
                           event.target.style.backgroundColor = "#FFEFEF";
                        }, 1000);
                     } else {
                        setTimeout(() => {
                           event.target.style.backgroundColor = "#3BAF77";
                        }, 1000);
                     }
                  }}
               />
               <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="reg-form-input"
                  value={localStorage.getItem("email")}
                  name="email"
                  onChange={(event) => {
                     setEmail(event.target.value);

                     if (!event.target.value.includes("@redberry.ge")) {
                        setTimeout(() => {
                           event.target.style.backgroundColor = "#FFEFEF";
                        }, 200);
                     } else {
                        setTimeout(() => {
                           event.target.style.backgroundColor = "#3BAF77";
                        }, 200);
                     }
                  }}
               />
               <input
                  type="number"
                  placeholder="Phone number"
                  required
                  className="reg-form-input"
                  value={localStorage.getItem("number")}
                  name="number"
                  onChange={(event) => {
                     setNumber(event.target.value);

                     if (event.target.value.length < 8) {
                        setTimeout(() => {
                           event.target.style.backgroundColor = "#FFEFEF";
                        }, 200);
                     } else {
                        setTimeout(() => {
                           event.target.style.backgroundColor = "#3BAF77";
                        }, 200);
                     }
                  }}
               />
               <input
                  type="date"
                  placeholder="Date of birth"
                  required
                  className="reg-form-input"
                  value={localStorage.getItem("date")}
                  name="date"
                  onChange={(event) => {
                     setDate(event.target.value);

                     if (event.target.value.length < 2) {
                        setTimeout(() => {
                           event.target.style.backgroundColor = "#FFEFEF";
                        }, 200);
                     } else {
                        event.target.style.backgroundColor = "#3BAF77";
                     }
                  }}
               />
               <div className="reg-form-btns">
                  <button className="reg-btn-white" onClick={props.prev}>
                     back
                  </button>
                  <button
                     className="reg-btn-black"
                     type="submit"
                     // onClick={props.next}
                  >
                     next
                  </button>
               </div>
            </form>
         </div>
      </Fragment>
   );
};

export default Registration;
