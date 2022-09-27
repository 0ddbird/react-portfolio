import React from 'react'
import GitHubIcon from '../assets/github-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'

const Footer = () => {
  return (
  <footer>
    <span>&copy; 2022</span>
    <a href="mailto: contact@giacomo-llinares.com" id='contact-email'>contact@giacomo-llinares.com</a>
    <a href="https://github.com/Okuspo" target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt='github-profile'/>GitHub</a>
    <a href="https://www.linkedin.com/in/giacomollinares/" target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon} alt='linkedin-profile'/>LinkedIn</a>
  </footer>)
}

export default Footer
