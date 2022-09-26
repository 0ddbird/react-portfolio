import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const Project = ({ project }) => {
  const [isFocused, setIsFocused] = useState(false)
  function handleProjectClick (id) {
    console.log(id)
    setIsFocused(!isFocused)
  }
  return (
    <>
      <article className='project' onClick={() => handleProjectClick(project.id)}>
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
      <aside className='project-details'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci magnam nesciunt voluptas culpa explicabo illum. Iusto distinctio laboriosam labore officia voluptatum nobis numquam alias sequi optio beatae, quidem, deserunt commodi dolorem? Commodi facilis eveniet nobis magni mollitia velit at voluptate reprehenderit odit molestiae quis repellendus aliquam ducimus, suscipit modi corrupti atque debitis! Cumque exercitationem fugit minima maxime cupiditate doloribus dolores necessitatibus, et magni tempore enim tenetur temporibus excepturi maiores veritatis, quis distinctio, assumenda fugiat! Sit, cumque. Nemo saepe harum dolorum molestiae quis, laudantium illum facilis quasi sequi adipisci veniam inventore sed, est, dolor laborum porro iure. Reprehenderit eum nobis inventore.
      </aside>
    }

    </>

  )
}

Project.propTypes = {
  project: PropTypes.object
}

export default Project
