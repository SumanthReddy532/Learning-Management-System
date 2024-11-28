import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

function Tdashboard() {
    useEffect(()=>{
        document.title=' Teacher/Dashboard'
      })
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
                            <Link className="nav-link text-danger" to="/Dblogout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
         {/* Render additional dashboard routes here */}
            {/* Main Content */}
            <div className="col-md-9">
                    <h3>My Courses</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Total Enrolled</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-dark">Delete</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td><button className='btn btn-dark'>Delete</button></td>
                            </tr>
                            
                            


                        </tbody>
                    </table>

                    {/* Render additional dashboard routes here */}
                    
                </div>
        </div>
    </div>
    
    
    
  )
}

export default Tdashboard