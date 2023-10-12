import React from 'react';
import CalendarComponent from '../Admin/Calendar';
import Admin from '../Admin/Admin';

const Homepage = () => {
  return (
    <div className="dashboard">
      <div>
        <Admin />
      </div>
      <div>
        <CalendarComponent />
      </div>
    </div>
  );
};

export default Homepage;
