import React from "react";
import Background from "../../UI/Background";
import "./Experience.css";
import ExperienceImage from "../../Images/experience.png";
import { useState } from "react";

const levels = [
   { level: "Beginner" },
   { level: "Intermediate" },
   { level: "Professional" },
];

const Options = (props) => {
   return (
      <div className="options">
         {levels.map((el) => {
            return (
               <div
                  className=""
                  onClick={() => {
                     props.placeholder(el.level);
                     props.disableOptions();
                  }}
               >
                  {el.level}
               </div>
            );
         })}
      </div>
   );
};

const Experience = () => {
   const [options, setOptions] = useState();
   const [placeholder, setPlaceholder] = useState("level of knowledge *");

   const currentEl = (element) => {
      setPlaceholder(element);
   };

   const disableOptions = () => {
      setOptions();
   };

   return (
      <div>
         <div
            className="level"
            onClick={() => {
               setOptions(
                  <Options
                     placeholder={currentEl}
                     disableOptions={disableOptions}
                  />
               );
            }}
         >
            {placeholder}
         </div>
         {options}
      </div>
   );
};

export default Experience;
