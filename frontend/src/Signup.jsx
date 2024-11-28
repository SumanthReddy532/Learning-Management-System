import React,{useEffect} from 'react';
import './App.css';

function Signup() {
  useEffect(()=>{
    document.title='User/Signup'
  })
  return (
      <div style={{
        backgroundImage:"url(signup1.jpeg)",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }}>
      <div className="form" style={{backgroundColor:"transparent"}}>
       
    <h1 style={{textAlign:'center'}}>Signup</h1>
      
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
            <div className="PassWord">
            <label for="PassWord" className="Form_Label">Password</label>
            <input type="Text" id="PassWord" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Conform_PassWord">
            <label for="Conform_PassWord" className="Form_Label">Conform Password</label>
            <input type="Text" id="Conform_PassWord" className="Form_Input" placeholder=""></input>
            </div>
           
            <div class="footer">
                <button type="submit">Register</button>
            </div>
   
        </div>
    </div>
    </div>
    
  )
}

export default Signup