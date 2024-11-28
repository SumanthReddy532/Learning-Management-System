import React from 'react'
import { Link } from 'react-router-dom'
// import TSidebar from './TSidebar';
import { useState,useEffect } from 'react';
const baseUrl='http://127.0.0.1:8000/api';

function Taddcourse() {
    const [cats,setCats]= useState([]);
    const[courseData,setCourseData]=useState({
        category:'',
        title:'',
        description:'',
        featured_img:'',
        techs:''
    });
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category').then((res)=>{
                //console.log(res.data);
                setCats(res.data)
             
            });
            }catch(error){
             console.log(error);
            }
         },[]);
      //   console.log(cats);
      const handelChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });
      }
      const handelFileChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        });
    }

    const formSubmit=()=>{
      const _formData=new FormData();
      _formData.append('category',courseData.category);
      _formData.append('teacher',1);
      _formData.append('title',courseData.title);
      _formData.append('description',courseData.description);
      _formData.append('featured_img',courseData.featured_img,courseData.featured_img.name);
      _formData.append('techs',courseData.techs);
    
    try{
      axios.post(baseUrl+'/course/',_formData,{
          headers:{
              'content-type':'multipart/form-data'
          }
      })
      .then((res)=>{
          console.log(res.data);
      });
      }catch(error){
       console.log(error);
      }
   };
   
   
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
      {/* Render additional dashboard routes here */}
         {/* Main Content */}
         <div className="col-md-9">
                 <h3>Add Courses</h3>
                 <div className=''>

                 <div className="UserName">
              
              <label for="FirstName" className="Form_Label">Catogery</label>
              <input type="Text" onChange={handelChange} id="FirstName" className="Form_Input" placeholder=""></input>
              {cats.map((category,index)=>{return<option key={index} value={category.id}>{category.title}</option>})}

              </div>
                
                 <div className="UserName">
              <label for="FirstName" className="Form_Label">Teacher</label>
              <input type="Text"  onChange={handelChange} id="FirstName" className="Form_Input" placeholder=""></input>
              </div>
              <div className="Last_Name">
              <label for="Last_Name" className="Form_Label">Title</label>
              <input type="Text" onChange={handelChange} id="Last_Name" className="Form_Input" placeholder=""></input>
             </div>
             <div className="Last_Name">
              <label for="Last_Name"  onChange={handelChange}  className="Form_Label">Description</label>
              <input type="Text" id="Last_Name" className="Form_Input" placeholder=""></input>
             </div>
             <div className="Profile Photo">
            <label for="formfilemultiple" onChange={handelFileChange} className="Form_Label">course video</label>
            
            <input type="file"  id="formfilemultiple" className="Formfilemultiple" placeholder=""></input>
            </div>
            <div className="Technologies">
              <label for="Technologies" onChange={handelChange} className="Form_Label">Technologies</label>
              <input type="Text" id="Technologies" className="Form_Input" placeholder=""></input>
             </div>
             <br /><br /><br />
             <div className='footer'>
                <button className='submit' onClick={formSubmit}> Submit</button>
             </div>
             </div>

                 {/* Render additional dashboard routes here */}
                 
             </div>
     </div>
 </div>
  )
}

export default Taddcourse