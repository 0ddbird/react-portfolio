import React, { useState } from 'react'
import PropTypes from 'prop-types'
import GitHubIcon from '../assets/github-icon.svg'
import DiagramIcon from '../assets/diagram-project-solid.svg'
import Caret from '../assets/caret.svg'
import Screen from '../assets/display-solid.svg'

const Project = ({ project }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <article className={isFocused ? 'project active-project' : 'project'} onClick={() => setIsFocused(!isFocused)}>
        <h1 className='project-title'>{project.title}</h1>
        <ul className='project-techs'>
          {
            project.techs.map((tech, index) => {
              return <li className={`project-tech ${tech.toLowerCase()} tag`} key={`project${project.id}-tech-tag-${index}`}>{tech}</li>
            })
          }
        </ul>
        <ul className='project-themes'>
          {
            project.themes.map((theme, index) => {
              return <li className='theme tag' key={`project${project.id}-theme-tag-${index}`}>{theme}</li>
            })
          }
        </ul>
        <img className={isFocused ? 'project-caret-icon up' : 'project-caret-icon'} src={Caret} alt='expand' />

    </article>
    {
      isFocused &&
      <section className='project-details'>
        <div className='project-details-goal'>
          <h2 className='project-goal-title'>Details</h2>
          <span className='project-goal-description'>{project.description}</span>
        </div>
        <div className='project-details-links'>
          <h2 className='project-links-title'>Links</h2>
          <a className='project-details-link' href={project.github} target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt='github'/>Repository</a>
          { project.githubPage && project.githubPage.length > 0 && <a className='project-details-link' href={project.githubPage}target="_blank" rel="noopener noreferrer"><img src={Screen} alt='github'/>GithubPage</a>}
          { project.diagram && <a className='project-details-link' href={project.diagram} target="_blank" rel="noopener noreferrer"><img src={DiagramIcon} alt='diagram'/>Diagram</a> }
          { project.logigram && <a className='project-details-link' href={project.logigram} target="_blank" rel="noopener noreferrer"><img src={DiagramIcon} alt='diagram'/>Logigram</a>}
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
