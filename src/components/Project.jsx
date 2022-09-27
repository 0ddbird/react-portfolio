import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import GitHubIcon from '../assets/github-icon.svg'
import DiagramIcon from '../assets/diagram-project-solid.svg'

const Project = ({ project }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <article className={isFocused ? 'project active-project' : 'project'} onClick={() => setIsFocused(!isFocused)}>
        <h1 className='project-title'>{project.title}</h1>
        <ul className='project-techs'>
          {
            project.techs.map(tech => {
              return <li className={`project-tech ${tech.toLowerCase()} tag`} key={uuidv4()}>{tech}</li>
            })
          }
        </ul>
        <ul className='project-themes'>
          {
            project.themes.map(theme => {
              return <li className='theme tag' key={uuidv4()}>{theme}</li>
            })
          }
        </ul>
    </article>
    {
      isFocused &&
      <section className='project-details'>
        <div className='project-details-goal'>
          <h2 className='project-goal-title'>Details</h2>
          <p className='project-goal-description'>{project.description}</p>
        </div>
        <div className='project-details-links'>
          <h2 className='project-links-title'>Links</h2>
          <a className='project-details-link' href={project.github} target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt='github'/>Github repository</a>
          <a className='project-details-link' href={project.whimsical} target="_blank" rel="noopener noreferrer"><img src={DiagramIcon} alt='diagram'/>Project diagram</a>
        </div>
      </section>
    }

    </>

  )
}

Project.propTypes = {
  project: PropTypes.object
}

export default Project
