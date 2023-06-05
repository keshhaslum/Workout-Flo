import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Workoutspage from "./components/Workoutspage";
import Workouts from "./components/Workouts";
import Homepage from "./components/homepage";
import Login from "./components/Login";

//add routes here for components 
function App() {

  return (

      <div>
      
      <nav className="d-flex justify-content-end ">
        <div className="mx-3">
            <Link to='/homepage' >Homepage</Link> 
            </div>
            <div className="mx-3">        
            <Link to='/workout' >Workout Details</Link>
            </div>
            <div className="mx-3"> 
            <Link to='/login' >Log in</Link>
            </div>       
      </nav>
      <h1>My Fitness Journal</h1>


      
      <h3>
      <Link to='/workoutspage' >Go to exercises</Link></h3>

      
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/workoutspage" element={<Workoutspage/>}/>
        <Route path="/workouts" element={<Workouts/>}/>
        <Route path= "/workouts/:id" element={<Workouts />}></Route>
        <Route path= "/login" element={<Login/>}/>

      </Routes>
      </div>
  );
}

export default App;
