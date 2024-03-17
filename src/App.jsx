import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Error from './views/Error'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Works from './views/Works'
import About from './views/About'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ProjectDetail from './views/project/ProjectDetail'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import Preloader from './components/Preloader'
// import SnackBar from './components/SnackBar'
AOS.init();

const App = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: 'smooth'
      }
    );
  })

  const [loading, setLoading] = useState(true); // Initially set to true
  useEffect(() => {
    const simulateAsyncTasks = async () => {
      // Simulate asynchronous tasks
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating some task taking 2 seconds
      setLoading(false); // Once tasks are completed, set loading to false
    };

    simulateAsyncTasks();
  }, []);

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {
        loading ?
          <Preloader />
          :
          <>
            {/* {!isContactPage && <NavBar />} */}
             <NavBar />
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/work' element={<Works />} />
              <Route path="/work/:projectId" element={<ProjectDetail />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Error />} />
            </Routes>
            {!isContactPage && <Footer />}
          </>
      }
    </>
  )
}

export default App
