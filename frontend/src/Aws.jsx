import React from 'react'
import { Link } from 'react-router-dom'

function Aws() {
  return (
    <div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="pythonlogo.webp" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Aws</h3>
        <p>Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon, providing a wide range of on-demand services including computing power, storage, and databases,
             as well as machine learning, analytics, and Internet of Things (IoT) capabilities. AWS enables businesses to scale their infrastructure with flexibility, reducing the need for costly on-site hardware. 
             Its pay-as-you-go pricing model allows companies to only pay for the resources they use. AWS is known for its global network of data centers, security features, and reliability,
              making it one of the leading cloud platforms for startups, enterprises, and government organizations worldwide.</p>
        <p className="fw-bold">Course By: <Link to="/Teacher6">Sai Manith</Link></p>
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

export default Aws