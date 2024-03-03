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
import Preloader from './components/Preloader'
import ShareWebsite from './components/ShareWebsite'
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
    const fetchData = async () => {
      try {
        // Perform your asynchronous operation here, for example fetching data
        // Replace the setTimeout with your actual asynchronous operation
        await fetch('https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_5f68N0n4Ef8_qybid5.png'); // Example fetch operation
        // Once the operation is completed, set loading to false
        setLoading(false);
      } catch (error) {
        // Handle any errors
        console.error('Error fetching data:', error);
        setLoading(false); // In case of error, still set loading to false
      }
    };
    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount()


  return (
    <>
      <Analytics />
      {
        loading ?
          <Preloader />
          :
          <>
            {!isContactPage && <NavBar />}
            {/* <ShareWebsite /> */}
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/projects' element={<Works />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
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
