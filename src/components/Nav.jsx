import React, { useState } from 'react'
import { Link } from 'react-scroll'
import OpenIcon from '../assets/bars-solid.svg'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
  <nav>
    <Link to='welcome' smooth={true} id='home-link'>
    <span id='home-link-slash'>/</span>
    <span id='home-link-text'>welcome</span>
    <span id='home-link-gt'>&gt;</span>
    <span id='home-link-underscore'>_</span>
    </Link>
    <span id='contact-email'>contact@giacomo-llinares.com</span>
    <button className="nav-button" id="nav-open-button" onClick={() => setMenuOpen(!menuOpen)}><img src={OpenIcon} alt="menu"/></button>
    {
      menuOpen &&
      <div className='navlinks'>
        <Link className='navlink' to='stack' smooth={true}>/stack</Link>
        <Link className='navlink' to='projects' smooth={true}>/projects</Link>
        <Link className='navlink' to='people' smooth={true}>/people</Link>
        <Link className='navlink' to='contact' smooth={true}>/contact</Link>
    </div>
    }
  </nav>
  )
}

export default Nav
