import React from 'react'
import { Link } from 'react-router-dom'

// localStorage.removeItem('teacherLoginStatus')
    
//         window.location.href='/teacher-login';


function Tlagout() {
  return (
    <div className="container-fluid mt-5">
       <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Dashboard</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tmycourse">My Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Taddcourse">Add Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tprofile">Profile Setting</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tuser">My user</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tchangepassword">Change Password</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-danger" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-md-9" style={{textAlign:'center'}} >
                   <h1 style={{textAlign:'center'}}>Logout</h1>
                  <div>
                  <h5 >Please confirm</h5>
                  <p >Are you sure want to log out from my app?</p>
               </div>
                   <div className='footer'>
                      <button type='submit' className='bg-secondary'> Yes</button>   <button type='submit' className='bg-secondary'>No</button>                     
            
                    </div>
    
                </div>
                </div>
                </div>                
  )
}

export default Tlagout