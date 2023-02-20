import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
      <img src="/logo.jpeg" alt="..." height="36"/>
    </a>
    <a className="navbar-brand me-4" href="/">EstateFinder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Rent</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Mortgage</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hot Rental Locations
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Apartments in Mumbai</a></li>
            <li><a className="dropdown-item" href="/">Beach House in Goa</a></li>
            <li><a className="dropdown-item" href="/">Flats in South Delhi</a></li>
            <li><a className="dropdown-item" href="/">Flats in Kolkata</a></li>
            <li><a className="dropdown-item" href="/">Explore more</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active">Contact us</a>
        </li>
      </ul>
      <div className="button">
      <button className="btn btn-outline-success me-3" type="submit" >Login</button>
        <button className="btn btn-outline-success" type="submit">Sign Up</button>
      </div>
    </div>
  </div>
</nav>
    )
}
