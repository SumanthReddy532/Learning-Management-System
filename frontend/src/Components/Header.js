import React from 'react'
import { Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg " style={{width:'100%', paddingRight:'110px'}} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="home"><b>Online Learning</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <nav class="navbar navbar-expand-sm justify-content-end">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home"><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Courses"><b>Courses</b></Link>
        </li>
        
        <li className="nav-item dropdown ">
        <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <b>Teacher</b>
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Tsignup">Sign Up</Link></li>
            <li><Link class="dropdown-item" to="Tlogin">Login</Link></li>
            <li><Link class="dropdown-item" to="Tdashboard">Dashboard</Link></li>
            <li><Link class="dropdown-item" to="Logoutone">Log out</Link></li>
            </ul>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="About"><b>About us</b></Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <b>User</b>
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="Signup">Sign Up</Link></li>
            <li><Link class="dropdown-item" to="Login">Login</Link></li>
            <li><Link class="dropdown-item" to="Dashboard">Dashboard</Link></li>
            <li><Link class="dropdown-item" to="Logouttwo">Log out</Link></li>
          
          </ul>
        </li>
        

          
      </ul>
      
    </div>
    </nav> 
  </div>
  
</nav>

    </div>
    
  );
}

export default Header;