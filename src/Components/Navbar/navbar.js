import React from 'react'
import "./navbar.css";

function Navbar() {

 

  return (
    <div className='navbar'>
      <img
        className='logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo" />
      <div class="container">
        <ul class="nav-list">
          <li>
            <a href="/home" >Home</a>
          </li>
          <li>
            <a href="#">Originals</a>

          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Comedy</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search" />

        </div>
      </div>

      <img
        className='avatar'
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar" />
    </div>
  )
}

export default Navbar
