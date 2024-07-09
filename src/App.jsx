import { useState, useEffect } from 'react'
import NavbarMobile from './components/Navbar/NavbarMobile'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Main from './components/Main/Main'

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <>
      { windowWidth <= 480 ? <NavbarMobile/> : <Navbar/> }
      { windowWidth <= 480 ? null :<Banner/> }
      <Main windowWidth={windowWidth} />
      <Banner/>
    </>
  )
}

export default App
