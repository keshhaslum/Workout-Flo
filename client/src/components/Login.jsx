import React from 'react';


export default function Login() {
    return (
        <div className="component-container">
            <h3>Log in</h3>
        <div className="row mt-3">
        <div className="col">
        <label>Email address: </label>
        <input></input>
        </div>
        
        <div className="col">
       <label>Password: </label>
       <input></input>
       </div>
        
       <div className="col mt-8">
       <button> Submit </button>
       </div>
       </div>
      

</div>
    )
    
    };