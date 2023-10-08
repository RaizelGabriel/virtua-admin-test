// Inside your React component (Navbar.js)
import React from "react";
import "./Navbar.css"; // Import your CSS file here

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="welcome">
          Welcome, <span className="admin-box">Admin</span>
        </div>
      </header>
      <nav>
        <ul>
          {/* Add your navigation items here */}
        </ul>
      </nav>
      <div className="button-column">
        {/* Add your buttons here */}
        <button className="dashboard-button">Enrollment Applications</button>
        <button className="dashboard-button">Student Accounts</button>
        <button className="dashboard-button">Instructor Accounts</button>
        <button className="dashboard-button">Administrator Accounts</button>
        <button className="dashboard-button">Site Settings</button>
      </div>
    </div>
  );
};

export default Navbar;
