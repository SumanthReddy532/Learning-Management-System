import React from 'react';
import { Link } from 'react-router-dom';

function Jafullstack() {
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        {/* Left Column for the Image */}
        <div className="col-md-4 d-flex justify-content-center">
          <img src="javalogo.png" alt="Python logo" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        </div>

        {/* Right Column for the Course Information */}
        <div className="col-md-8">
          <h3>Java</h3>
          <p>Java is a widely-used, high-level, object-oriented programming language developed by Sun Microsystems in 1995 and now owned by Oracle Corporation. Known for its platform independence, Java follows the "write once,
 run anywhere" philosophy, as code compiled into bytecode can run on any system with a Java Virtual Machine (JVM). Java is popular for building web applications, mobile apps (especially Android), enterprise solutions,
  and large-scale systems. Its syntax is similar to C++, making it familiar to many developers. With robust security features, a vast standard library, and strong community support, Java remains one of the most popular and versatile programming languages globally.</p>
          <p className="fw-bold">Course By: <Link to="/Teacher3">Madhu Smitha</Link></p>
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
  );
}

export default Jafullstack;