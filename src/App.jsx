import React from 'react'
import { Route, Routes, Navigate, Outlet, useLocation } from 'react-router-dom'
// import Home from './views/Home'
import Error from './views/Error'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Works from './views/Works'
// import ShareWebsite from './components/ShareWebsite'
import About from './views/About'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ProjectDetail from './views/project/ProjectDetail'
// ..
AOS.init();

const App = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className='relative'>
      {!isContactPage && <NavBar />}
      {/* {!isContactPage && <ShareWebsite />} */}
      <Routes>
        <Route path='/' element={<About />} />
        
        <Route path='/projects' element={<Works />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>

      {/*  `{!isContactPage && <Footer />}` is a conditional rendering statement in JSX. It checks if the
   `isContactPage` variable is `false`. If it is `false`, it renders the `<Footer />` component. If
   it is `true`, it does not render anything. */}
      {!isContactPage && <Footer />}
    </div>

  )
}

export default App
