import React from "react";
import Background from "../../UI/Background";
import "./Experience.css";
import ExperienceImage from "../../Images/experience.png";
import { useState, Fragment } from "react";
import { useEffect } from "react";
import axios from "axios";

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

const PlayerOptions = (props) => {
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

const RadioButton = () => {
   return <div className="radio-btn"></div>;
};

const Experience = () => {
   const [options, setOptions] = useState();
   const [playerOptions, setPlayerOptions] = useState();
   const [placeholder, setPlaceholder] = useState("level of knowledge *");
   const [playerPlaceholder, setPlayerPlaceholder] = useState(
      "Choose your character *"
   );

   const currentEl = (element) => {
      setPlaceholder(element);
   };

   const currentPlayer = (element) => {
      setPlayerPlaceholder(element);
   };

   const disableOptions = () => {
      setOptions();
   };

   const disablePlayerOptions = () => {
      setPlayerOptions();
   };

   return (
      <div>
         <Background image={ExperienceImage} />
         <div className="experience">
            {/* HEADER */}
            <div className="exp-header">
               First step is done, continue to finish onboarding
            </div>
            {/* PROGRESS ROW */}
            <div className="exp-progress">
               <div className="exp-progress-block progress-first">
                  <div className="exp-progress-btn">1</div>
                  <span>Personal information</span>
               </div>
               <div className="exp-progress-block progress-second">
                  <div className="exp-progress-btn ">2</div>
                  <span>Chess experience</span>
               </div>
            </div>
            {/* HEADING */}
            <div className="exp-form-heading">
               <h1>Chess experience</h1>
               <h3>This is basic informaton fields</h3>
            </div>
            <div style={{ display: "flex" }}>
               {/* LEVELS */}
               <div className="column">
                  <div
                     className="level"
                     onClick={() => {
                        setOptions(
                           <PlayerOptions
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
               {/* CHARACTERS */}
               <div className="column">
                  <div
                     className="level"
                     onClick={() => {
                        setPlayerOptions(
                           <Options
                              placeholder={currentPlayer}
                              disableOptions={disablePlayerOptions}
                           />
                        );
                     }}
                  >
                     {playerPlaceholder}
                  </div>
                  {playerOptions}
               </div>
            </div>
            {/* radio buttons */}
            <Fragment>
               <h1 className="radio-header">
                  Have you participated in the Redberry Championship? *
               </h1>
               <div className="check-box">
                  <div className="radio">
                     <RadioButton />
                     Yes
                  </div>
                  <div className="radio" style={{ marginLeft: "16px" }}>
                     <RadioButton />
                     No
                  </div>
               </div>
            </Fragment>
         </div>
      </div>
   );
};

export default Experience;
