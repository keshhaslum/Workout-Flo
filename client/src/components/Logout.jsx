import React from 'react';
import { useAuth } from './auth';

export default function Logout({ navigate }) {
  const auth = useAuth();

  const logout = async (e) => {
    e.preventDefault(); // Prevent the form submission from refreshing the page
    console.log('Logout button clicked');
    await auth.logout();
    navigate('/login'); // Redirect to the login page after the logout process is complete
  };

  console.log('Logout component rendered');

  return (
    <div className="card text-center">
      <div className="card-header">
        <h4>Log out</h4>
      </div>
      <div className="card-body">
        <form onSubmit={logout}>
          <label>Are you sure?</label>
          <div><button type="submit">Logout</button></div>
        </form>
      </div>
    </div>
  );
}















// import React, { useEffect } from 'react';
// import { useAuth } from './auth';
// import { useNavigate } from 'react-router-dom';

// export default function Logout() {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   const logout = async (e) => {
//     e.preventDefault();
//     console.log('Logout button clicked');
//     await auth.logout();
//   };

//   useEffect(() => {
//     if (!auth.user) {
//       // User is logged out, navigate to the login page
//       navigate('/login');
//     }
//   }, [auth.user, navigate]);

//   console.log('Logout component rendered');

//   return (
//     <div className="card text-center">
//       <div className="card-header">
//         <h4>Log out</h4>
//       </div>
//       <div className="card-body">
//         <form onSubmit={logout}>
//           <label>Are you sure?</label>
//           <div><button type="submit">Logout</button></div>
//         </form>
//       </div>
//     </div>
//   );
// }