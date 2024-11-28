import React from 'react'
import { Link } from 'react-router-dom'

function Tprofile() {
  return (
    <div className="container-fluid mt-5">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body ">
                            <h5 className="card-title">Dashboard</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Tmycourses">My Courses</Link>
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
                                    <Link className="nav-link text-danger" to="/Tlogout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-9" >
    <div className="form">
    <h1 style={{textAlign:'center'}}>Profile Setting</h1>
      
      <div className="form-body">
          <div className="UserName">
              
            <label for="FirstName" className="Form_Label">First Name</label>
            <input type="Text" id="FirstName" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Last_Name">
            <label for="Last_Name" className="Form_Label">Last Name</label>
            <input type="Text" id="Last_Name" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Email">
            <label for="Email" className="Form_Label">Email</label>
            <input type="Email" id="Email" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Profile Photo">
            <label for="formfilemultiple" className="Form_Label">Profile Photo</label>
            <input type="file"  id="formfilemultiple" className="Formfilemultiple" placeholder=""></input>
            </div>
            <div className="PassWord">
            <label for="PassWord" className="Form_Label">Password</label>
            <input type="Text" id="PassWord" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Conform_PassWord">
            <label for="Conform_PassWord" className="Form_Label">Conform Password</label>
            <input type="Text" id="Conform_PassWord" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Conform_PassWord">
            <label for="Conform_PassWord" className="Form_Label">Intrests</label>
            <input type="Text" id="Conform_PassWord" className="Form_Input" placeholder=""></input>
            </div>
            <div class="footer">
                <button type="submit">Register</button>
            </div>
   
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Tprofile