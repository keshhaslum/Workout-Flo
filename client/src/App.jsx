import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from "react-router-dom";
import Workoutspage from "./components/Workoutspage";
import Workout from "./components/Workout";
import Homepage from "./components/homepage";
import images from "./components/images.png";

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
      </nav>
      <h1>My Fitness Journal</h1>
      <Link to='/workoutspage' >Let's Start</Link>

      
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/workoutspage" element={<Workoutspage/>}/>
        <Route path="/workout" element={<Workout/>}/>
        <Route path= "/workouts/:id" element={<Workout />}></Route>

      </Routes>
      </div>
  );
}

export default App;
