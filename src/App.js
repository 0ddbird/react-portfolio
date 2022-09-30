import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
function App () {
  return (
    <>
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />

    </BrowserRouter>
    </>
  )
}

export default App
