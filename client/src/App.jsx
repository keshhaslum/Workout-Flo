import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menstrual from './components/Menstrual';
import Luteal from './components/Luteal';
import Follicular from './components/Follicular';
import Ovulation from './components/Ovulation';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignupPage from './components/SignupPage';
import Menu from './components/Menu';
import Logout from './components/Logout';
import AuthProvider, { AuthRoute } from './components/auth';

function App() {
  return (
    <div>
    <AuthProvider>
      <Menu />
        <Routes>
          {/* Public Routes */}
          <Route path="/menstrual" element={<Menstrual />} />
          <Route path="/ovulation" element={<Ovulation />} />
          <Route path="/luteal" element={<Luteal />} />
          <Route path="/follicular" element={<Follicular />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login /> }/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/logout" element={<Logout/>}/>
            
        </Routes>
        </AuthProvider>

    </div>
  );
}

export default App;

