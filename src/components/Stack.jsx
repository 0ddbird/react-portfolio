import React from 'react'
import { InView } from 'react-intersection-observer'

const Stack = () => {
  const techs = ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'PHP', 'SQL', 'React', 'Redux', 'Jest', 'Sass', 'Git']

  return (
    <section id='stack' className='main-section'>
      <h1 className="section-heading">Technical stack</h1>
      <h2 className="section-subheading">I&apos;ve been training on</h2>
      <div className='stack-list-wrapper'>
        <ul className='stack-list'>
          {
          techs.map((tech, index) => {
            return (
              <InView key={`stack-tech-${index}`} rootMargin={'-50px'} >
              {
                ({ inView, ref, entry }) => {
                  return (
                    <li ref={ref} className={inView ? 'stack-list-tech visible' : 'stack-list-tech'}>{tech}</li>
                  )
                }
              }
              </InView>
            )
          })
        }
        </ul>
      </div>
    </section>
  )
}

export default Stack
