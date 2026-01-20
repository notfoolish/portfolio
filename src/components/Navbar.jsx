import { useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import CV from '../assets/Laszlo_Akos_CV.pdf'
import { NAV_HEIGHT } from '../constants'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleResumeClick = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Laszlo_Akos_CV.pdf'
    link.click()
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <motion.nav 
        className="nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-desktop">
          <Link to="about" smooth={true} duration={500} offset={-NAV_HEIGHT}>About</Link>
          <Link to="tech" smooth={true} duration={500} offset={-NAV_HEIGHT}>Tech Stack</Link>
          <Link to="projects" smooth={true} duration={500} offset={-NAV_HEIGHT}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} offset={-NAV_HEIGHT}>Contact</Link>
          <Link to="#" onClick={handleResumeClick}>Resume</Link>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />
            <motion.div 
              className="nav-mobile"
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button className="nav-mobile-close" onClick={toggleMenu} aria-label="Close menu">
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>
              <Link to="about" smooth={true} duration={500} offset={-NAV_HEIGHT} onClick={handleLinkClick}>About</Link>
              <Link to="tech" smooth={true} duration={500} offset={-NAV_HEIGHT} onClick={handleLinkClick}>Tech Stack</Link>
              <Link to="projects" smooth={true} duration={500} offset={-NAV_HEIGHT} onClick={handleLinkClick}>Projects</Link>
              <Link to="contact" smooth={true} duration={500} offset={-NAV_HEIGHT} onClick={handleLinkClick}>Contact</Link>
              <Link to="#" onClick={handleResumeClick}>Resume</Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
