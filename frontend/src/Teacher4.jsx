import React from 'react'
import { Link } from 'react-router-dom'

function Teacher4() {
  return (
    <div> <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="digitallogo.png" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Valentina </h3>
        <p>Valentina is an expert who teaches individuals or groups how to effectively use digital channels to promote products, services, or brands. They cover a wide range of topics, including search engine 
            optimization (SEO), social media marketing, content creation, paid advertising, email marketing, and data analytics. Digital marketing trainers design structured learning programs, provide real-world examples, 
            and teach practical strategies for online marketing success. They cater to both beginners and advanced learners, ensuring students understand how to use digital tools to drive engagement, leads, and sales. 
            Trainers play a vital role in equipping professionals with the skills needed in today’s digital economy.</p>
        <p className="fw-bold">Skills: <Link to="/Teacher4">Digital Marketing</Link></p>
        
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

    
  </div></div>
  )
}

export default Teacher4