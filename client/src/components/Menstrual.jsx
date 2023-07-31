import React, {useEffect, useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import YouTube from 'react-youtube';
import { useAuth } from './auth';


export default function Menstrual() {
  const auth = useAuth();
    const initialWorkoutState= {workout: "", video: ""};
    const [workouts, setWorkouts] = useState([]);
    const [newWorkout, setNewWorkout] = useState(initialWorkoutState); 
  
    useEffect(() => {
       //get workouts
       getWorkouts();
    }, []);
  
    const getWorkouts = () => {
      fetch("/api/menstrual")
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(workouts => {
          setWorkouts(workouts);
        })
        .catch(error => {
          console.error("Error fetching workouts:", error);
        });
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
        const response = await fetch("/api/menstrual", {
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
        const response = await fetch(`/api/menstrual/${id}`, {
         method: "DELETE", 
        });
        const data = await response.json();
        setAllJams(data);
         } catch (error) {
        console.error(error);
      }
    };

    
    return (
      <div>
        <div className="container pt-4">
          <h1 className="text-bold">Menstrual Phase</h1>
          <br />
          <div className="container py-2">
              <div className="row">
                {workouts.map((workout) => (
                  <div key={workout.id} className="col-md-4">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title t-center">{workout.workout}</h5>
                        <div className="d-flex justify-content-center">
                          <iframe
                            className="vid t-center"
                            title="YouTube video player"
                            src={`https://www.youtube.com/embed/${workout.embedid}`}
                            allowFullScreen
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          ></iframe>
                        </div>
                        <p className="t-center pt-2">
                          <a href={workout.video} target="_blank" rel="noreferrer">
                            Click here to watch on YouTube!
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
  
          </div>
    
          {/* <div className="container mt-2">
            <form className="mt-5" onSubmit={e => handleSubmit(e)}>
              <div className="row mt-5">
                <div className="col">
                  <label>Workout: </label>
                  <input
                    name="workout"
                    value={newWorkout.workout}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="col">
                  <label>Url: </label>
                  <input
                    name="video"
                    value={newWorkout.video}
                    onChange={e => handleChange(e)}
                  />
                </div>
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-outline-info mt-3"
                  >
                    Add workout!
                  </button>
                </div>
              </div>
            </form>
          </div> */}
          <Link to='/homepage' >Back</Link>
        </div>
      </div>
    )
                }