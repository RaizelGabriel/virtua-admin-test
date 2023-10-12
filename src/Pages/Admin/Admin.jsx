import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Admin.css'; // Use a relative path
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Admin = () => {
  return (
    <div className="button-column">
      {/* Add your buttons here */}
      <button className="dashboard-button">Enrollment Applications</button>
      <button className="dashboard-button">Student Accounts</button>
      <button className="dashboard-button">Instructor Accounts</button>
      <button className="dashboard-button">Administrator Accounts</button>
      <Link to="/Site Settings">
  <button className="dashboard-button">Site Settings</button>
</Link>

    </div>
  );
};

export default Admin;
