import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fas fa-tasks text-primary" /> First Task
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-tasks text-primary" /> Second Task
      </Link>
    </div>
  );
};

export default DashboardActions;
