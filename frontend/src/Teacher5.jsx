import React from 'react'
import { Link } from 'react-router-dom'

function Teacher5() {
  return (
    
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="pythonlogo.webp" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Sumanth Reddy</h3>
        <p>
        Sumanth Reddy is a skilled professional who trains individuals in the essential techniques to protect digital systems, data, and networks from cyber threats. 
        They teach critical topics such as malware analysis, network defense, risk assessment, and ethical hacking. Through hands-on labs, simulations, and real-world scenarios, 
        instructors help students gain practical experience and problem-solving skills necessary in the field. Beyond technical expertise, they instill a strong understanding of 
        ethical considerations and the importance of continual learning, as cybersecurity is a constantly evolving field. By mentoring future cybersecurity experts, instructors play a key role in strengthening defenses against cybercrime.</p>
        <p className="fw-bold">Skills: <Link to="/Teacher1">Cyber security</Link></p>
        
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

export default Teacher5