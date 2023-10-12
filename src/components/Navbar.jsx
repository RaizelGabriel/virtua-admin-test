import React from 'react';
import '../components/Navbar.css'; // Adjust the relative path as needed

const Navbar = () => {
  return (
    <div>
        <header>
        <div className="welcome">
          Welcome, <span className="admin-box">Admin</span>
        </div>
      </header>
    </div>
  )
}

export default Navbar