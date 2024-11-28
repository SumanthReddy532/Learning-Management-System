import React from 'react'
import { Link } from 'react-router-dom';


function Powerbi() {
  return (
    <div><div><div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="powerbilogo.png" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Power bi</h3>
        <p>Power BI is a business analytics tool developed by Microsoft that enables users to visualize and share insights from their data. It allows users to connect to a wide range of data sources,
           transform raw data into interactive reports and dashboards, and make data-driven decisions. Power BI provides powerful features like drag-and-drop design, real-time data updates, and interactive visualizations,
            making it accessible to both technical and non-technical users. It offers seamless integration with other Microsoft tools like Excel, Azure, and SharePoint. Power BI is widely used for data analysis, reporting,
             and business inte  lligence across various industries and organizations.</p>
        <p className="fw-bold">Course By: <Link to="/Teacher2">Vamshi</Link></p>
        <p className="fw-bold">Duration: 1 Hours 30 Minutes</p>
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
  </div>
  </div>

  )
}

export default Powerbi