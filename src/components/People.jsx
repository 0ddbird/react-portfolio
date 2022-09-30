import React from 'react'
import PeoplePic1 from '../assets/00.jpg'
import PeoplePic2 from '../assets/01.jpg'
import PeoplePic3 from '../assets/02.jpg'
const People = () => {
  const people = [
    {
      name: 'Frédéric Desmoulins',
      position: 'Founder',
      company: 'CodinGame',
      img: PeoplePic1,
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit voluptate iure quia pariatur.'
    },
    {
      name: 'Rémi Michel',
      position: 'Mentor',
      company: 'OpenClassrooms',
      img: PeoplePic2,
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit voluptate iure quia pariatur.'
    },
    {
      name: 'Valentin Vetter',
      position: 'Full-stack engineer',
      company: 'CodinGame',
      img: PeoplePic3,
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus impedit voluptate iure quia pariatur.'
    }
  ]
  return (
    <section id='people' className='main-section'>
      <h1 className='section-heading'>People</h1>
      <span className='section-subheading'>who trust me</span>

      <div className="people-wrapper">
        {
          people.map((reference, index) => {
            return (
              <article className='reference-article' key={`reference-${index}`}>
                <img className='reference-profile-pic' src={reference.img} alt={`${reference.name} profile picture`}/>
                <h1 className='reference-name'>{reference.name}</h1>
                <h2 className='reference-job'>
                <span className='reference-job-position'>
                  {reference.position}
                </span>
                <span className='reference-job-company'> @{reference.company}</span></h2>
                <p className='reference-testimonial'>{reference.testimonial}</p>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default People
