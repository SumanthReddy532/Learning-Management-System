import React,{useEffect,useState} from 'react'
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api/teacher/';


function Tsignup() {
  
  const[teacherData,setteacherData]=useState({
    
    'first_name':'',
    'last_name':'',
    'mobile':'',
    'email':'',
    'password':'',
    'confirm_password':'',
    'Qualification':'',
    'skills':'',
    'status':''
  });
 //  const handelChange=(event)=>{
    //   console.log(event.target.name,event.target.value)
    //  }

    const handelChange=(event)=>{
      setteacherData({ 
        ...teacherData,
         [event.target.name]:event.target.value
     });
    };
   //console.log(teacherData);

  
   const submitForm=()=>{
   
    const teacherFormData=new FormData();
    
    teacherFormData.append("first_name", teacherData.first_name)
    teacherFormData.append("last_name", teacherData.last_name)
    teacherFormData.append("mobile",teacherData.mobile)
    teacherFormData.append("email",teacherData.email)
    teacherFormData.append("password",teacherData.password)
    teacherFormData.append("confirm_password",teacherData.confirm_password)
    teacherFormData.append("Qualification",teacherData.Qualification)
    teacherFormData.append("skills",teacherData.skills)
    
    
    try{
      axios.post(baseUrl,teacherFormData).then((response)=>{
        console.log(response.data);
        });
      }catch(error){
        console.log(error);
      }
      
     };
      useEffect(()=>{
         document.title='Teacher Register';
      });
  
  return (
    <div><div className="form">
    <h1 style={{textAlign:'center'}}>Sign Up</h1>
      
      <div className="form-body">
      
          <div className="UserName">
              
            <label for="FirstName" className="Form_Label">First Name</label>
            <input onChange={handelChange} name='first_name'  type="Text" id="FirstName" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Last_Name">
            <label for="Last_Name" className="Form_Label">Last Name</label>
            <input onChange={handelChange} name='last_name' type="Text" id="Last_Name" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Mobile">
            <label for="Mobile" className="Form_Label">Mobile</label>
            <input onChange={handelChange} name='mobile' type="int" id="Mobile" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Email">
            <label for="Email" className="Form_Label">Email</label>
            <input onChange={handelChange} name='email' type="Email" id="Email" className="Form_Input" placeholder=""></input>
            </div>
            <div className="PassWord">
            <label for="PassWord" className="Form_Label">Password</label>
            <input onChange={handelChange} name='password'  type="password" id="PassWord" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Conform_PassWord">
            <label for="Conform_PassWord" className="Form_Label">Conform Password</label>
            <input onChange={handelChange} name='confirm_password'  type="password" id="Conform_PassWord" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Qualification">
            <label for="Qualification" className="Form_Label">Qualification</label>
            <input onChange={handelChange} name='Qualification'  type="Text" id="Conform_PassWord" className="Form_Input" placeholder=""></input>
            </div>
            <div className="Skills">
            <label for="Skills" className="Form_Label">Skills</label>
            <input onChange={handelChange} name='skills'  type="Text" id="Skills" className="Form_Input" placeholder=""></input>
            </div>
            <div class="footer">
                <button onClick={submitForm} type="submit">Submit</button>
            </div>
   
        </div>
    </div></div>
  )
}

export default Tsignup;