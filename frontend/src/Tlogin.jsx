import React from 'react'
import { useEffect,useState } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';

function Tlogin() {
  const [teacherLoginData, setteacherLoginData] = useState({
    email: '',
    password: ''
  });

  const handelChange = (event) => {
    setteacherLoginData({
      ...teacherLoginData,
      [event.target.name]: event.target.value
    });
  };
  const submitForm = () => {
    // console.log(teacherLoginData);
    const teacherFormData = new FormData();
    teacherFormData.append('email', teacherLoginData.email)
    teacherFormData.append('password', teacherLoginData.password)
    try {
      axios.post(baseUrl + '/Tlogin', teacherFormData).then((res) => {
        //console.log(res.data);
        if (res.data.bool === true) {
          localStorage.setItem('teacherLoginStatus', true);
          window.location.href = '/Tdashboard';

        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  if (teacherLoginStatus === 'true') {
    window.location.href = '/Tdashboard';
  }

 
  useEffect(() => {
    document.title = 'Teacher Login';
  });

  return (
    <div> <div className='form'>
      <h1 style={{ textAlign: 'center' }}>Login</h1>
      <div className='form-body'>
        <div className='username'>
          <label for="email" className="Form_Label">Login Id</label>
          <input type="Text" value={teacherLoginData.email} name='email' onChange={handelChange} className="Form_Input" placeholder=""></input>
        </div>

      </div>
      <div className='username'>
        <label for="Password" className="Form_Label">Password</label>
        <input type="password" value={teacherLoginData.password} name='password'  onChange={handelChange} id="Password" className="Form_Input" placeholder="" ></input>
      </div>
      <br />
      <div className='footer' >

        <button type='submit' onClick={submitForm} style={{ background: 'grey' }}>Submit</button>
      </div>
    </div></div>
  )
}

export default Tlogin;