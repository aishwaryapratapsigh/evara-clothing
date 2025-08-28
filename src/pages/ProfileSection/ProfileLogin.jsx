import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
const ProfileLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="profile-container">
      <h2>Login</h2>
      <form className="profile-form" onSubmit={handleLogin}>
        <input
          className="profile-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="profile-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="profile-button" type="submit">Login</button>
      </form>
      <p className="profile-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default ProfileLogin;
