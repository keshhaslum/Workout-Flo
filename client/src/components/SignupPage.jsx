import React, { useState } from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
  const auth = useAuth();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    auth.signup(username, password);
  };

  const handleUsernameChange = (e) => {
    const formattedUsername = e.target.value.trim().toLowerCase();
    setUserName(formattedUsername);
  };

  const handlePasswordChange = (e) => {
    const formattedPassword = e.target.value.replace(/\s/g, '');
    setPassword(formattedPassword);
  };

  return (
    <div className="card text-center">
        <div className="card-header">
      <h4>Sign up</h4>
      </div>
      <div className="card-body">
      <form onSubmit={signup}>
        <div>
          <input
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
          />
        </div>
        <button type="submit">Sign Up</button>
        {auth.signupResponse && auth.signupResponse.status === 400 && (
          <p>
            The username is already taken. Please try a different one!
          </p>
        )}
      </form>
      </div>
    </div>
  );
  
}