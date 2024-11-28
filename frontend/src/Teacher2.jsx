import React from 'react'
import { Link } from 'react-router-dom'

function Teacher2() {
  return (
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="powerbilogo.png" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Vamshi</h3>
        <p>Vamshi is an expert who teaches individuals or groups how to effectively use Power BI for data visualization and business intelligence. They guide learners through the process of connecting to data sources, 
            creating interactive dashboards, building reports, and using advanced features like DAX (Data Analysis Expressions) and Power Query. 
            Power BI trainers tailor their lessons to suit different skill levels, from beginners to advanced users, and help professionals leverage Power BI to make data-driven decisions. 
            Their role also includes providing practical examples, answering queries, and ensuring that learners can confidently use Power BI in real-world scenarios.</p>
        <p className="fw-bold">Skills: <Link to="/Teacher2">Power bi,My sql</Link></p>
        
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

export default Teacher2