import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./Pages/Admin/Admin";
import Site from "./Pages/Site/Site";
import CalendarComponent from "./Pages/Admin/Calendar";
import Homepage from "./Pages/Homepage/Homepage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="dashboard">
          {/* <div>
            <Admin />
          </div> */}
          {/* Render the CalendarComponent in place of left-side */}
          {/* <CalendarComponent /> */}
          
        </div>
        <Routes>
           <Route path="/" element={<Homepage/>}/>
          <Route path="/Site Settings" element={<Site />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
