import React from 'react'
import { Link } from 'react-router-dom'

function Teacher6() {
  return (
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="pythonlogo.webp" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Sai Manith</h3>
        <p>
        Sai Manith is a professional who teaches individuals or groups about AWS cloud computing services and solutions. They guide students through the fundamentals of cloud infrastructure, 
        architecture, and various AWS tools like EC2, S3, Lambda, RDS, and more. AWS instructors often provide hands-on labs, real-world examples, and best practices to ensure that learners gain practical experience. 
        They may offer certifications to help students validate their skills in cloud computing. AWS instructors play a crucial role in upskilling professionals, enabling them to build scalable, secure, and cost-effective cloud-based systems.</p>
        <p className="fw-bold">Skills: <Link to="/Teacher6">Amazon Web services</Link></p>
        
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

export default Teacher6