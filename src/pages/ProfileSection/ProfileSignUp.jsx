import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const ProfileSignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signed up as: ${username}`);
  };

  return (
    <div className="profile-container">
      <h2>Sign Up</h2>
      <form className="profile-form" onSubmit={handleSignup}>
        <input
          className="profile-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button className="profile-button" type="submit">Sign Up</button>
      </form>
      <p className="profile-link">
        Already have an account? <Link to="/profile">Login</Link>
      </p>
    </div>
  );
};

export default ProfileSignUp;
