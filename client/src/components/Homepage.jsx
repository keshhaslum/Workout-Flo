import React from 'react';
import { Link} from "react-router-dom";



export default function Homepage() {

return (
    <div className="component-container">


    <h4>Click on the phase you are in to find the right workout for you 👇</h4>
    
    <div className="cycle-container">
    <div className="phase menstrual-phase"><Link to='/menstrual' ><div className="heading">Menstrual Phase</div>
    <div>Days 1-7. This is when you would have your period. Energy levels might be low so light exercise is advised.</div></Link></div>

    <div className="phase follicular-phase"><Link to='/follicular' ><div className="heading">Follicular Phase</div>
    <div> Days 7-13. Your energy levels are starting to increase. Strength training and high-intensity exercise could be good here.</div></Link></div>
    <div className="phase ovulation-phase"><Link to='/ovulation' ><div className="heading">Ovulation Phase</div>
    <div>Days 14-18. There is a surge of testosterone during this phase which help with muscle growth.
        Circuit training, HIIT workouts and running would be great during this time.</div></Link></div>
    <div className="phase luteal-phase"><Link to='/luteal' ><div className="heading">Luteal Phase</div>
    <div> Days 20-28. This is your premenstrual phase. You might be feeling tired, and more inclined to overheat quickly.
        Moderate-intensity training like aerobics, pilates, running and swimming would be beneficial. </div></Link></div>
    </div>
    </div>


)
};