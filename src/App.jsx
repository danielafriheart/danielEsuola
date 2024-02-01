import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Error from './views/Error'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </>

  )
}

export default App
