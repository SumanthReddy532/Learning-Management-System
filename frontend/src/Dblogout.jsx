// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// function Dblogout() {
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleLogout = () => {
//       localStorage.removeItem('teacherLoginStatus'); // Remove login status
//       navigate('/teacher-login');
//     }
//     // localStorage.removeItem('teacherLoginStatus')
//     //    window.location.href='/teacher-login';
//   return (
    
//     <div className="col-md-9" style={{textAlign:'center'}} >
//                <h1 style={{textAlign:'center'}}>Logout</h1>
//               <div>
//               <h5 >Please confirm</h5>
//               <p >Are you sure want to log out from my app?</p>
//            </div>
//                <div className='footer'>
//                 <link > <button type='submit' className='bg-secondary'onClick={handleLogout}> Yes</button></link>   <button type='submit' className='bg-secondary' onClick={() => navigate(-1)}>No</button>                     
        
//                 </div>
//                 </div>
//   )
// }
    

// export default Dblogout;



import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Dblogout() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    localStorage.removeItem('teacherLoginStatus'); // Remove login status
    navigate('/Tlogin'); // Redirect to the login page
  };

  return (
    <div className="col-md-9" style={{ textAlign: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Logout</h1>
      <div>
        <h5>Please confirm</h5>
        <p>Are you sure you want to log out from my app?</p>
      </div>
      <div className="footer">
        {/* Call handleLogout when the Yes button is clicked */}
        <button type="button" className="bg-secondary" onClick={handleLogout}>
          Yes
        </button> <button type="button" className="bg-secondary" onClick={() => navigate(-1)}>
          No
        </button>

        
      </div>
    </div>
  );
}

export default Dblogout;
