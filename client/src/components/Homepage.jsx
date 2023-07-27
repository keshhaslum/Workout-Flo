import {React} from 'react';
import { Routes, Route, Link} from "react-router-dom";



export default function Homepage() {

return (
    <div className="component-container">


    <h4>Click on the phase you are in ⬇️</h4>
    
    <div className="cycle-container">
    <div className="phase menstrual-phase"><Link to='/menstrual' ><div className="heading">Menstrual Phase</div></Link>
    <div>Days 1-7. This is when you would have your period. 
        <div>Energy levels might be low so light exercise is advised. </div></div></div>

    <div className="phase follicular-phase"><Link to='/follicular' ><div className="heading">Follicular Phase</div></Link>
    <div> Days 7-13. Your energy levels are starting to increase. <div>Strength training and high-intensity exercise could be good here.</div></div></div>
    <div className="phase ovulation-phase"><Link to='/ovulation' ><div className="heading">Ovulation Phase</div></Link>
    <div>Days 14-18. There is a surge of testosterone during this phase which help with muscle growth.
        Circuit training, HIIT workouts and running would be great during this time.</div></div>
    <div className="phase luteal-phase"><Link to='/luteal' ><div className="heading">Luteal Phase</div></Link>
    <div> Days 20-28. This is your premenstrual phase. You might be feeling tired, and more inclined to overheat quickly.
        Moderate-intensity trainig like aerobics, pilates, running and swimming would be beneficial. </div></div>
    </div>
    </div>


)
};