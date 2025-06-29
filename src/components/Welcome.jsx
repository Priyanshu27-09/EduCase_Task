import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="card">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eius dicta vel!</p>
      <Link to="/register" className="btn primary">Create Account</Link>
      <Link to="/login" className="btn secondary">Already Registered? Login</Link>
    </div>
  );
};

export default Welcome;