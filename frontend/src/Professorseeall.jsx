import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';

const baseUrl='http://127.0.0.1:8000/api';
function Professorseeall() {

  const [teacher,setTeacher]=useState(null);
  useEffect(()=>{
    axios.get(baseUrl+'/teacher/').then((response)=>{
     // console.log(response.data);
     setTeacher(response.data);
    });
    
  },[]);
  console.log(teacher);


  


  return (
    <div>
        <h1>Professor</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card"  style={{ width: '18rem', height: '300px' }}>
              <img src="teach1.avif" className="card-img-top" alt="" style={{ width: '18rem', height: '290px' }} />
              <div className="card-body">
                <h5 className="card-title">Francesca</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card"  style={{ width: '18rem', height: '300px' }}>
              <img src="teach3.avif" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Paul Jhonson</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card"  style={{ width: '18rem', height: '300px' }}>
              <img src="teach2.jpeg" className="card-img-top" alt="..." style={{ width: '16rem', height: '290px' }} />
              <div className="card-body">
                <h5 className="card-title">Valentina</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card"  style={{ width: '18rem', height: '300px' }}>
              <img src="teach4.png" className="card-img-top" alt="" style={{ width: '17rem', height: '290px' }} />
              <div className="card-body">
                <h5 className="card-title">Christopher</h5>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </div>
  )
}

export default Professorseeall