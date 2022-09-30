import React from 'react'
import GitHubIcon from '../assets/github-icon.svg'
import LinkedinIcon from '../assets/linkedin-icon.svg'
import EnvelopeIcon from '../assets/envelope-solid.svg'
import profile from '../data/socialLinks'

const SocialWidget = () => {
  return (
    <aside className='social-widget'>
      <a className='social-widget-link' href={profile.github} target="_blank" rel="noopener noreferrer">
        <img src={GitHubIcon} alt='github-profile'/>
      </a>
      <a className='social-widget-link' href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <img src={LinkedinIcon} alt='linkedin-profile'/>
      </a>
      <a className='social-widget-link' href="mailto: contact@giacomo-llinares.com" id='contact-email'>
       <img src={EnvelopeIcon} alt='email'/>
      </a>

    </aside>
  )
}

export default SocialWidget
