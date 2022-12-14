import React from 'react'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

import Stack from '../components/Stack'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <>
      <Welcome />
      <Stack />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
