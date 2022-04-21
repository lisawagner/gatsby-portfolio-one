import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/Gi"

const Navbar = () => {
  return (
    <header id="headerMain">

    <div className="profile">
      <img className="profile-img" src={logo} alt=""/>
      <h3>Lisa Wagner</h3>
    </div>
    <div id="toggle-btn"><GiHamburgerMenu></GiHamburgerMenu></div>

    <nav className="navbar">
      <ul>
        <li>
          <Link className='nav-item' to="#about">about</Link>
        </li>
        <li>
          <Link className='nav-item' to="#skills">skills</Link>
        </li>
        <li>
          <Link className='nav-item' to="#portfolio">portfolio</Link>
        </li>
        <li>
          <Link className='nav-item' to="#contact">contact</Link>
        </li>
      </ul>
    </nav>

  </header>
  )
}

export default Navbar