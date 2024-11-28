import React from 'react'
import { Link } from 'react-router-dom'

function Tchangepassword() {
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
                            <Link className="nav-link text-danger" to="/Tlagout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
<div className="col-md-9" >
<div className='form'>
      <h1 style={{textAlign:'center'}}>Change Password</h1>
      <div className='form-Body'>
        <div className='Old Password'>
        <label for='Oldpassword' className="Form_Label">old Password</label>
        <input type="text" id="Oldpassword" className="Form_Input" placeholder=""/>
      </div>
      
      <div className='Newpassword'>
        <label for='Newpassword' className="Form_Label">New Password</label>
        <input type="text" id="Newpassword" className="Form_Input" placeholder="" />
       </div>
         <br /><br /><br />
       <div className='footer'>
        <button type="submit" class="btn btn-primary">Submit</button>
       </div>


      </div>
    </div>
   

</div>
</div>
</div>
   
  )
}

export default Tchangepassword