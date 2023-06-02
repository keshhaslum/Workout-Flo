import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";


export default function singleWorkout() {
    const [workout, setWorkout] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
      //get workout by ID
      getWorkout();
   }, [id]);
   
   const getWorkout = async () => {
    const response = await fetch(`/api/workouts/${workout.id} ${workout.type} ${workout.workout} ${workout.reps} ${workout.sets}`);
    const data = await response.json();
    setWorkout(data);
  };
   

    return (
    <div>
      {workout && (
        <div>
      {workout.type} {workout.workout} {workout.reps} {workout.reps} 
         </div>
      )}
        <h4>Workout Details</h4>
    </div>
  )
      };
