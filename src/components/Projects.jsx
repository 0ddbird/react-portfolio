import React from 'react'
import { projects } from '../data/projects'
import Project from './Project'

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
          projects.map((project, index) => {
            return <Project project={project} key={`project-${index}`}/>
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Projects
