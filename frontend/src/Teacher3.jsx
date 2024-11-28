import React from 'react'
import { Link } from 'react-router-dom'

function Teacher3() {
  return (
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="javalogo.png" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Madhu Smitha</h3>
        <p>Madhu Smitha is a professional who specializes in teaching Java programming to individuals or groups. They guide learners through the fundamentals of Java, such as object-oriented principles, syntax, data structures, and algorithms, as well as more advanced topics like multithreading, Java frameworks (e.g., Spring), and Java Enterprise Edition (JEE). Java trainers design structured lessons, offer hands-on coding exercises, and help students troubleshoot code. They cater to various levels, from beginners to advanced developers, and ensure that learners understand Java concepts deeply, enabling them to apply them in real-world software development projects. Java trainers play a key role in developing proficient Java developers.</p>
        <p className="fw-bold">Skills: <Link to="/Teacher3">Java</Link></p>
        
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

export default Teacher3