import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import YouTube from 'react-youtube';




export default function workoutList() {
    const initialWorkoutState= {workout: "", video: ""};
    const [workouts, setWorkouts] = useState([]);
    const [newWorkout, setNewWorkout] = useState(initialWorkoutState); 
  
    useEffect(() => {
       //get workouts
       getWorkouts();
    }, []);
    
    const getWorkouts = () => {
      fetch("/api/luteal")
      .then(response => response.json())
      .then(workouts => {
        setWorkouts(workouts);
      })
      .catch(error => {
        console.log(error);
      })
      };

    

    const handleChange = (event) => {
     const {name, value} = event.target; 
     setNewWorkout((prevState) => ({...prevState, [name]: value})) 
    };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        await addWorkout();
        setNewWorkout(initialWorkoutState); 
    
      };

    //add workout
    const addWorkout = async () => {
      try {
        const response = await fetch("/api/luteal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ workout: newWorkout.workout, video: newWorkout.video }), 
        });
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
      }
    };
   
    const deleteWorkout = async (id) => {
        try {
          const response = await fetch(`/api/luteal/${id}`, {
           method: "DELETE", 
          });
          const data = await response.json();
          setAllJams(data);
           } catch (error) {
          console.error(error);
        }
      };

    
    return (
    <div className="component-container mt-20">
      <h3>Luteal Phase</h3>
      <div className="row">
      {workouts.map((workout) => (
     <div className="col-3 p-4" key={workout.id}>
     <div className="card-img-top rounded" style={{ width: "18rem" }}/>
        <div className="card-body">
       <p>{workout.workout}</p>
       <p>{workout.video}</p> 
       <div onClick={() => deleteWorkout(workout.id)}>
              <button className="btn btn-dark">Delete Workout</button></div>
            </div>
            </div>
            ))}
            </div>
            
      
      <div className="container mt-2">
        <form className="mt-5" onSubmit={e => handleSubmit(e)}>

        <div className="row mt-5">

       <div className="col">
        <label>Workout: </label>
        <input
          name= "workout"
          value={newWorkout.workout}
          onChange={e => handleChange(e)}
        />  </div>
      
      <div className="col">
       <label>Url: </label>
        <input
          name= "video"
          value={newWorkout.video}
          onChange={e => handleChange(e)}
        /></div>


       <div className="col"> 
       <button
          type="submit"
          className="btn btn-outline-info mt-3"
        >
          Add workout!
        </button> </div>

        </div>
        </form>
      </div>
      <Link to='/homepage' >🔙</Link></div>
  )
}
