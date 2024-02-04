import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Error from './views/Error'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Works from './views/Works'
import About from './views/About'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Works />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </>

  )
}

export default App
