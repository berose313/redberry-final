import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import Last from "./pages/last/Last";

function App() {
   const navigator = useNavigate();

   return (
      <div className="App">
         <Routes>
            <Route
               path="/home"
               element={
                  <Home
                     next={() => {
                        navigator("/registration");
                     }}
                  />
               }
            />
            <Route
               path="/registration"
               element={
                  <Registration
                     prev={() => {
                        navigator("/home");
                     }}
                     next={() => {
                        navigator("/experience");
                     }}
                  />
               }
            />
            <Route path="/experience" element={<Experience />} />
            <Route path="/last" element={<Last />} />
         </Routes>
      </div>
   );
}

export default App;
