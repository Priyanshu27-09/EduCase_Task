import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';
import './components/styles.css';

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register setUserData={setUserData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<AccountSettings userData={userData} />} />
      </Routes>
    </Router>
  );
};

export default App;