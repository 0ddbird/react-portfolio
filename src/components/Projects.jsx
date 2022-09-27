import React from 'react'
import { projects } from '../data/projects'
import Project from './Project'
import { v4 as uuidv4 } from 'uuid'

const Projects = () => {
  return (
    <section id='projects' className='main-section'>
      <h1 className='section-heading'>Projects</h1>
      <h2 className='section-subheading'>I built so far</h2>
      <div className='table'>
        <div className='table-headings'>
          <div id='heading-project' className='table-heading'>Project</div>
          <div id='heading-techs' className='table-heading'>Technologies</div>
          <div id='heading-themes' className='table-heading'>Themes</div>
        </div>
        <div className='table-content'>
        {
          projects.map(project => {
            return <Project project={project} key={uuidv4()}/>
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Projects
