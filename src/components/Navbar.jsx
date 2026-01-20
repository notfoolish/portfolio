import { Link } from 'react-scroll'
import './Navbar.css'
import CV from '../assets/Laszlo_Akos_CV.pdf'
import { NAV_HEIGHT } from '../constants'

export default function Navbar() {
  const handleResumeClick = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Laszlo_Akos_CV.pdf'
    link.click()
  }

  return (
    <nav className="nav">
      <Link to="about" smooth={true} duration={500} offset={-NAV_HEIGHT}>About</Link>
      <Link to="tech" smooth={true} duration={500} offset={-NAV_HEIGHT}>Tech Stack</Link>
      <Link to="projects" smooth={true} duration={500} offset={-NAV_HEIGHT}>Projects</Link>
      <Link to="contact" smooth={true} duration={500} offset={-NAV_HEIGHT}>Contact</Link>
      <Link to="#" onClick={handleResumeClick}>Resume</Link>
    </nav>
  )
}
