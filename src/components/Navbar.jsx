import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import CV from '../assets/Laszlo_Akos_CV.pdf'
import { NAV_HEIGHT } from '../constants'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollYRef.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleResumeClick = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Laszlo_Akos_CV.pdf'
    link.click()
  }

  return (
    <nav className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
      <Link to="about" smooth={true} duration={500} offset={-NAV_HEIGHT}>About</Link>
      <Link to="tech" smooth={true} duration={500} offset={-NAV_HEIGHT}>Tech Stack</Link>
      <Link to="projects" smooth={true} duration={500} offset={-NAV_HEIGHT}>Projects</Link>
      <Link to="contact" smooth={true} duration={500} offset={-NAV_HEIGHT}>Contact</Link>
      <button type="button" onClick={handleResumeClick} className="nav-button">Resume</button>    </nav>
  )
}
