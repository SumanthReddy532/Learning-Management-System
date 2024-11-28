import React from 'react'
import { Link } from 'react-router-dom'

function Teacher1() {
  return (
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="pythonlogo.webp" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Saral Kumar</h3>
        <p>Saral Kumar is an instructor or expert who teaches Python programming to individuals or groups. They help learners understand Python's syntax, libraries, and concepts, from basic programming principles to advanced topics like data structures, 
            web development, and machine learning. Python trainers typically design course materials, conduct hands-on coding sessions, and provide guidance on solving real-world problems using Python. They cater to various skill levels, from beginners to advanced developers.
             With Python's broad application in fields like data science, automation, and AI, a skilled Python trainer plays a crucial role in empowering students and professionals to master the language effectively.</p>
        <p className="fw-bold">Skills: <Link to="/Teacher1">Python,Django</Link></p>
        
        <p className="fw-bold">Rating</p>
        
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <h3>Course Videos</h3>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Video1 <button className="btn btn-sm btn-secondary float-end">Play</button>
        </li>
        <li className="list-group-item">
          video2<button className="btn btn-sm btn-secondary float-end">Play</button>
        </li>
      </ul>
    </div>

    
  </div>
  )
}

export default Teacher1