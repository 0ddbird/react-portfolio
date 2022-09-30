import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1 className="section-heading">Page not found!</h1>
      <h2 className="section-subheading"><NavLink to='/'>Back to homepage</NavLink></h2>

    </>
  )
}

export default NotFound
