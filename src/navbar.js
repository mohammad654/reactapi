import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from './images/SBlogo.svg';
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <Link className="nav-link  active " to="/"><img src={Logo} alt="React Image" width="150"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link  active" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">
          about
        </Link>        
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact">
          contact
        </Link>    
        </li>
      </ul>
    </div>
  </div>
</nav>
   
 
     
      </div>
    );
  }
}

export default NavBar;
