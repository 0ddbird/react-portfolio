import React, { useState } from 'react'
import { Link } from 'react-scroll'
import OpenIcon from '../assets/bars-solid.svg'
import CloseIcon from '../assets/xmark-solid.svg'
import SocialWidget from './SocialWidget'

const Nav = () => {
  const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false)
  const icon = responsiveMenuOpen ? CloseIcon : OpenIcon
  return (
    <nav>
      <Link to='welcome' smooth={true} id='home-link'>
        <span id='home-link-slash'>/</span>
        <span id='home-link-text'>welcome</span>
        <span id='home-link-gt'>&gt;</span>
        <span id='home-link-underscore'>_</span>
      </Link>
      <SocialWidget />
      {/* <a href="mailto: contact@giacomo-llinares.com" id='contact-email'>contact@giacomo-llinares.com</a> */}
      <button className="nav-button" id="nav-open-button" onClick={() => setResponsiveMenuOpen(!responsiveMenuOpen)}>
        <img src={icon} alt="menu"/>
      </button>
      <div className={responsiveMenuOpen ? 'navlinks-responsive' : 'navlinks'}>
        <Link className={responsiveMenuOpen ? 'navlink-responsive' : 'navlink'} to='welcome' smooth={true} onClick={() => setResponsiveMenuOpen(false)}><span className='navlink-slash'>/</span>home</Link>
        <Link className={responsiveMenuOpen ? 'navlink-responsive' : 'navlink'} to='stack' smooth={true} onClick={() => setResponsiveMenuOpen(false)}><span className='navlink-slash'>/</span>stack</Link>
        <Link className={responsiveMenuOpen ? 'navlink-responsive' : 'navlink'} to='projects' smooth={true} onClick={() => setResponsiveMenuOpen(false)}><span className='navlink-slash'>/</span>projects</Link>
        {/* <Link className='navlink' to='people' smooth={true} onClick={() => setMenuOpen(!menuOpen)}>/people</Link> */}
        <Link className={responsiveMenuOpen ? 'navlink-responsive' : 'navlink'} to='contact' smooth={true} onClick={() => setResponsiveMenuOpen(false)}><span className='navlink-slash'>/</span>contact</Link>
      </div>
    </nav>
  )
}

export default Nav
