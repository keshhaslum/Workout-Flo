import React, { useState, useEffect } from 'react';
import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const auth = useAuth();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordForgotten, setIsPasswordForgotten] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    auth && auth.login(username, password);
  };

   const resetPassword = (e) => {
     e.preventDefault();
     auth && auth.resetPassword(username, newPassword);
   };

   useEffect(() => {
    if (auth && auth.resetPasswordResponse && auth.resetPasswordResponse.status === 200) {
      setIsPasswordForgotten(false);
    }
  }, [auth && auth.resetPasswordResponse]);

  useEffect(() => {
    if (auth && auth.loginResponse && auth.loginResponse.isPasswordCorrect === false) {
      alert(auth.loginResponse.message);
    }
  }, [auth && auth.loginResponse]);

  if (auth && auth.user) {
    return <Navigate to="/homepage" />;
  }

  const handleUsernameChange = (e) => {
    const formattedUsername = e.target.value.trim().toLowerCase();
    setUserName(formattedUsername);
  };

  const handlePasswordChange = (e) => {
    const formattedPassword = e.target.value.replace(/\s/g, '');
    setPassword(formattedPassword);
  };

  const handleNewPasswordChange = (e) => {
    const formattedNewPassword = e.target.value.replace(/\s/g, '');
    setNewPassword(formattedNewPassword);
  };

  const logout = (e) => {
    auth.logout();
  };

  return (
    <div className="card text-center">
      {!isPasswordForgotten && (
        <div className="card-header">
          <h4>Log in</h4>
        </div>
      )}
      <div className="card-body">
        {!isPasswordForgotten ? (
          // Log in form
          <form onSubmit={login}>
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
            <button type="submit">Login</button>
          </form>
        ) : (
          // Password reset form
          <form onSubmit={resetPassword}>
            <div>
              <input
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <input
                placeholder="Type New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                type="password"
              />
            </div>
            <button type="submit">Reset Password</button>
          </form>
        )}
        {!isPasswordForgotten && (
          <button onClick={() => setIsPasswordForgotten(true)}>
            Forgot your password?
          </button>
        )}
      </div>
      {/* <form onSubmit={logout}> {/* Logout form is always rendered */}
        {/* <button type="submit">Logout</button>
      </form> */}
    </div> 
  );
  
        }
