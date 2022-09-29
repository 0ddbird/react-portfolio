import React, { useState } from 'react'
import { Link } from 'react-scroll'
import OpenIcon from '../assets/bars-solid.svg'
import CloseIcon from '../assets/xmark-solid.svg'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const icon = menuOpen ? CloseIcon : OpenIcon
  return (
    <nav>
      <Link to='welcome' smooth={true} id='home-link'>
        <span id='home-link-slash'>/</span>
        <span id='home-link-text'>welcome</span>
        <span id='home-link-gt'>&gt;</span>
        <span id='home-link-underscore'>_</span>
      </Link>
      <a href="mailto: contact@giacomo-llinares.com" id='contact-email'>contact@giacomo-llinares.com</a>
      <button className="nav-button" id="nav-open-button" onClick={() => setMenuOpen(!menuOpen)}>
      <img src={icon} alt="menu"/>
      </button>
      {
        menuOpen &&
        <div className='navlinks'>
          <Link className='navlink' to='stack' smooth={true} onClick={() => setMenuOpen(!menuOpen)}>/stack</Link>
          <Link className='navlink' to='projects' smooth={true} onClick={() => setMenuOpen(!menuOpen)}>/projects</Link>
          {/* <Link className='navlink' to='people' smooth={true} onClick={() => setMenuOpen(!menuOpen)}>/people</Link> */}
          <Link className='navlink' to='contact' smooth={true} onClick={() => setMenuOpen(!menuOpen)}>/contact</Link>
        </div>
      }
    </nav>
  )
}

export default Nav
