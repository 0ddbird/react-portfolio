import React from 'react'
import GitHubIcon from '../assets/github-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'
import profile from '../data/socialLinks'

const Footer = () => {
  return (
  <footer>
    <span>&copy; 2022</span>
    <a href={profile.github}target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt='github-profile'/>GitHub</a>
    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><img src={LinkedinIcon} alt='linkedin-profile'/>LinkedIn</a>
    <a href="mailto: contact@giacomo-llinares.com" id='contact-email'>contact@giacomo-llinares.com</a>
  </footer>)
}

export default Footer
