import React from 'react'
import { Link } from 'react-router-dom'

function Cybersecurity() {
  return (
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="pythonlogo.webp" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Cyber Security</h3>
        <p>Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, theft, and damage. With the rise of technology and internet usage, cybersecurity 
          has become essential for individuals, businesses, and governments to safeguard sensitive information and ensure privacy. Common threats include malware, phishing, ransomware,
           and hacking, all of which can compromise data and disrupt operations. Cybersecurity involves various practices, such as encryption, firewalls, multi-factor authentication, and
            regular software updates. As cyber threats evolve, cybersecurity professionals work constantly to stay ahead, developing new defenses to protect against increasingly sophisticated attacks and to maintain digital safety and trust.</p>
        <p className="fw-bold">Course By: <Link to="/Teacher5">Sumanth Reddy</Link></p>
        <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
        <p className="fw-bold">Total Enrolled: 0 Students</p>
        <p className="fw-bold">Rating</p>
      </div>
    </div>

    <div className="card">
      <div className="card-header">
        <h3>Course Videos</h3>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Introduction <button className="btn btn-sm btn-secondary float-end">Play</button>
        </li>
        <li className="list-group-item">
          Introduction <button className="btn btn-sm btn-secondary float-end">Play</button>
        </li>
      </ul>
    </div>

    <h3 className="pb-1 mb-4 mt-5">Related courses <Link href="#" className="float-end">See all</Link></h3>
    <div className="row mb-4">
      <div className="col-md-3">
        <div className="card">
          <Link to=""><img src="" className="card-img-top" alt="" /></Link>
          <div className="card-body">
            <h5 className="card-title"><Link to="">DevOps</Link></h5>
          </div>
        </div>
      </div>
      </div>
      </div>

  )
}

export default Cybersecurity