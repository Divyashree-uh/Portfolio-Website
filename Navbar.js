import React from 'react'
import "./Navbar.css"; 

const Navbar = () => {


  return (
    <nav>
        
        <div className="nav-links">
            <ul>
                <li>
                <i class="fa fa-home" aria-hidden="true"></i> <a href="#"> Home</a>
                </li>
                <li>
                <i class="fa fa-info-circle" aria-hidden="true"></i> <a href="#About">About</a>
                </li>
                <li>
                <i class="fas fa-project-diagram" aria-hidden="true"></i> <a href="#Projects">Projects</a>
                </li>
                <li>
                <i class="fa fa-certificate" aria-hidden="true"></i>  <a href="#Certifications">Certifications</a>
                </li>
            </ul>
        </div>

    </nav>
    
  )
}

export default Navbar