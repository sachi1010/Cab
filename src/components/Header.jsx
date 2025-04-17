import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MAYILAI CAB</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/Cars" className="nav-link">Cars</Link></li>
            <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/Booking" className="nav-link">Booking</Link></li>
            <li className="nav-item"><Link to="/Contact" className="nav-link">Contact</Link></li>
     </ul>

      
      <div>
        <Link to="/Login">
        <button className='login'>
        <i className="bi bi-person-fill"></i>
        </button>
        </Link>
        
      </div>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header