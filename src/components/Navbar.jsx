import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../assets/img/logo.png'
import { GiHamburgerMenu } from "react-icons/Gi"
import { GrClose } from "react-icons/gr"


// const Navbar = ( {toggleMenu} ) 
const Navbar = ( ) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  const hideMenu = () => setToggle(!toggle); //or !toggle ?

  return (
    <header id="headerMain" className={toggle ? "active" : ""}>

    <nav className="navbar">
      <div className="profile">
        <img className="profile-img" src={logo} alt=""/>
        <h3>Lisa Wagner</h3>
      </div>
      <ul >
        <li >
          <Link className='nav-item' to="#about" onClick={hideMenu}>about</Link>
        </li>
        <li>
          <Link className='nav-item' to="#skills" onClick={hideMenu}>skills</Link>
        </li>
        <li>
          <Link className='nav-item' to="#portfolio" onClick={hideMenu}>portfolio</Link>
        </li>
        <li>
          <Link className='nav-item' to="#contact" onClick={hideMenu}>contact</Link>
        </li>
      </ul>
      <button type="button" id="toggle-btn" onClick={handleToggle}>
        {!toggle ? (
          <GiHamburgerMenu></GiHamburgerMenu>
        ) : (
            <GrClose></GrClose>
        )}
      </button>
    </nav>

  </header>
  )
}

export default Navbar