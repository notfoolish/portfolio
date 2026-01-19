import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import CV from '../assets/Laszlo_Akos_CV.pdf'

const NAV_HEIGHT = 72

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

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
      <a onClick={handleResumeClick}>Resume</a>
    </nav>
  )
}
