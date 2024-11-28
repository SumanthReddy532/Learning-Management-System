import React from 'react'
import { Link } from 'react-router-dom';

function Digital() {
  return (
    <div><div className="container mt-3">
    <div className="row align-items-center">
      {/* Left Column for the Image */}
      <div className="col-md-4 d-flex justify-content-center">
        <img src="digitallogo.png" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>

      {/* Right Column for the Course Information */}
      <div className="col-md-8">
        <h3>Digital Marketing</h3>
        <p>Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, or brands. It encompasses a wide range of strategies, including search engine optimization (SEO),
           content marketing, social media marketing, email campaigns, online advertising, and influencer marketing. Digital marketing leverages data analytics to track performance, target specific audiences, and optimize campaigns
            for better engagement and conversion rates. It offers businesses the ability to reach a global audience, engage customers in real-time, and measure campaign effectiveness. As technology evolves, digital marketing continues to be a crucial tool 
            for brands to build awareness and drive sales.</p>
        <p className="fw-bold">Course By: <Link to="/Teacher4">Sudheer</Link></p>
        <p className="fw-bold">Duration: 2 Hours 30 Minutes</p>
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
  </div></div>
  )
}

export default Digital