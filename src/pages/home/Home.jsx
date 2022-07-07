import React from "react";
import "./Home.css";

import Background from "../../UI/Background";
import homeImage from "../../Images/home.png";

const Home = (props) => {
   return (
      <div>
         <Background image={homeImage} />
         <div className="home">
            <div>
               <h1 className="home-heading">
                  chess says <span>a lot about</span>
               </h1>
               <h1 className="home-heading">who we are</h1>
            </div>
            <button className="home-button" onClick={props.next}>
               get started
            </button>
         </div>
      </div>
   );
};

export default Home;
