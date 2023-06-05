import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";



export default function workoutList() {
    const initialWorkoutState= {type: "", workout: "", sets: "", reps:""};
    const [workouts, setWorkouts] = useState([]);
    const [newWorkout, setNewWorkout] = useState(initialWorkoutState); 
  
    useEffect(() => {
       //get workouts
       getWorkouts();
    }, []);
    
    const getWorkouts = () => {
      fetch("/api/workouts")
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
        const response = await fetch("/api/workouts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ workout: newWorkout.workout, reps: newWorkout.reps , sets: newWorkout.sets }), 
        });
        const data = await response.json();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
      }
    };
   
  

    
    return (
    <div>
      <div className="container text-center">
      <div className="row">
     <div className="col">
      {workouts.map((workout) => (
      <ul key={workout.id} className="list-group">
        <li className="list-group-item">
        <Link to={`/workouts/${workout.id}`}>
        {workout.workout}
        </Link>
        </li>
        </ul>
            ))}
            </div>
            </div>
            
      
      <div className="container mt-2">
        <form className="mt-5" onSubmit={e => handleSubmit(e)}>

        <div className="row mt-5">
          <div className="col">
        <label>Type of workout:</label>
        <select name="type" id="type">
    <option value="upperbody">Upper Body</option>
    <option value="lowerbody">Lower Body</option>
    </select>
    </div>

       <div className="col">
        <label>Workout: </label>
        <input
          name= "workout"
          value={newWorkout.workout}
          onChange={e => handleChange(e)}
        />  </div>
      
      <div className="col">
       <label>Sets: </label>
        <input
          name= "sets"
          value={newWorkout.sets}
          onChange={e => handleChange(e)}
        /></div>

      <div className="col"> 
      <label>Reps: </label>
        <input
          name= "reps"
          value={newWorkout.reps}
          onChange={e => handleChange(e)}
        /> </div>


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
      </div>
       </div>
  )
}
