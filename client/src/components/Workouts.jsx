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
    const response = await fetch(`/api/workouts/${id}`);
    const data = await response.json();
    setWorkout(data);
  };
   

    return (
    <div className="container mt-3">
      <h4>Workout Details</h4>
      {workout && (
        <div className="row mt-10">
       <div className="col"> Type: {workout[0].type} </div>
        
       <div className="col">
         Exercise: {workout[0].workout}</div>
        
         <div className="col">
         Reps: {workout[0].reps}</div>
         
         <div className="col">
         Sets: {workout[0].sets}
         </div>
         </div>
      )}
        
    </div>
  );
      }
