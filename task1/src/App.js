import React, { useEffect, useRef } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { handleScroll } from './Components/ScrollAnimations'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

library.add(fab)

function App () {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const timelineRef = useRef(null)
  const technologiesRef = useRef(null)
  const certificatesRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = ref => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='App'>
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        timelineRef={timelineRef}
        technologiesRef={technologiesRef}
        certificatesRef={certificatesRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
    </div>
  )
}

export default App
