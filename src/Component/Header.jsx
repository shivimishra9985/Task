import React from 'react';
import './css/heaader.css'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
{/* <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-white ">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <a className="navbar-brand mt-2 mt-lg-0" href="#"  id="logo">
        Postarta
      </a>
      <ul className="navbar-nav me-auto ml-4 mb-2 mb-lg-0" id="left-side">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Live</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Chat</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="search">Explore</Link>
        </li>
   
  </ul>
  </div>
    <div className="d-flex align-items-center">
     <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav> */}
<nav class=" sticky-top navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
  <a className="navbar-brand" href="#"  id="logo">
        Postarta
      </a>
    <button class="mt-4 mt-lg-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-4">
      <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Live</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Chat</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="search">Explore</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

