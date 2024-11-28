import React from 'react'
import { Link } from 'react-router-dom';

function Python() {
  return (
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="pythonlogo.webp" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Python</h3>
        <p>Python is a high-level, interpreted programming language known for its simplicity and readability. 
          Created by Guido van Rossum and first released in 1991, Python emphasizes code clarity,
           allowing developers to write clean and easy-to-understand code. 
           It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
            Python boasts a vast standard library and a large community, making it versatile for tasks like web development, data analysis, machine learning, automation, and more.
             With its extensive frameworks and ease of integration, Python has become one of the most popular languages for both beginners and professionals in the tech industry..</p>
        <p className="fw-bold">Course By: <Link to="/Teacher1">Saral Kumar</Link></p>
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

export default Python