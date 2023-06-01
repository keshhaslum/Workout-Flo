import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";



export default function workoutList() {
    const initialWorkoutState= {workout: ""};
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
     const {name, value} = event.target; //?? not sure what to put here instead of name & value
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
      <div className="p-2">
     <h3>Workout List</h3>
      </div>
      {workouts.map((workout) => (
      <div key={workout.id}>
        <Link to={`/workout/${workout.id}`}>
        {workout.workout}
        </Link>
        
        </div>
            ))}
      
      <div>
        <form on Submit={e => handleSubmit(e)}>
        <label>Workout: </label>
        <input
          name= "workout"
          value={newWorkout.workout}
          onChange={e => handleChange(e)}
        />
       
       <label>Sets: </label>
        <input
          name= "sets"
          value={newWorkout.sets}
          onChange={e => handleChange(e)}
        />

      <label>Reps: </label>
        <input
          name= "reps"
          value={newWorkout.reps}
          onChange={e => handleChange(e)}
        />

       <button
          type="submit"
          className="btn btn-outline-danger mt-5"
        >
          Add workout!
        </button>


        </form>
      </div>

       </div>
  )
}
