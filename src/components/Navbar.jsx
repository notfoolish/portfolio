import { Link } from 'react-scroll'

const NAV_HEIGHT = 72

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="about" smooth={true} duration={500} offset={-NAV_HEIGHT}>About</Link>
      <Link to="tech" smooth={true} duration={500} offset={-NAV_HEIGHT}>Tech Stack</Link>
      <Link to="projects" smooth={true} duration={500} offset={-NAV_HEIGHT}>Projects</Link>
      <Link to="contact" smooth={true} duration={500} offset={-NAV_HEIGHT}>Contact</Link>
      <Link to="resume" smooth={true} duration={500} offset={-NAV_HEIGHT}>Resume</Link>
    </nav>
  )
}
