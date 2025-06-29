import React from 'react';

const AccountSettings = ({ userData }) => {
  return (
    <div className="card">
      <h2>Account Settings</h2>
      <div className="profile">
        <img className="profile-pic" src="https://randomuser.me/api/portraits/women/1.jpg" alt="Profile" />
        <div>
          <h3>{userData?.name || 'Name'}</h3>
          <p>{userData?.email || 'Email'}</p>
        </div>
      </div>
      <p className="bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;