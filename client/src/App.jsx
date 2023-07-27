import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Menstrual from "./components/Menstrual";
import Luteal from "./components/Luteal";
import Follicular from './components/Follicular';
import Ovulation from './components/Ovulation';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from './components/Register';
import YouTube from 'react-youtube';


//add routes here for components 
function App() {

  return (

      <div className="component-container">
      
      <nav className="navbar navbar-light  navbar-expand-lg static-top" >
      {/*<nav className="d-flex justify-content-end">*/}
      <div className="container-fluid">
      <Link to='/homepage'>
      <a href="#" className="navbar-brand">
      <img src="/src/components/workoutflo.png" height="100" alt="workoutflo"/>
            </a></Link>

     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item mx-3">
          {/*<a className="nav-linkactive" aria-current="page" href="#">*/}
          <Link to='/login'>Log in</Link>
          {/*}  </a>*/}
        </li>

        <li className="nav-item mx-3">
          {/*<a className="nav-linkactive" aria-current="page" href="#">*/}
          <Link to='/register'>Register</Link>
          {/*}  </a>*/}
        </li>

    
      </ul>
      </div>
      </div>
      </nav>

      
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/menstrual" element={<Menstrual/>}/>
        <Route path="/ovulation" element={<Ovulation/>}/>
        <Route path="/luteal" element={<Luteal/>}/>
        <Route path="/follicular" element={<Follicular/>}/>
        {/* <Route path="/workouts" element={<Workouts/>}/>
        <Route path= "/workouts/:id" element={<Workouts />}></Route> */}
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>


      </Routes>
      </div>
  );
}

export default App;
