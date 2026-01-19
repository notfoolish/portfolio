import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBolt,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import {
  faReact,
  faNode,
  faUnity,
  faPhp,
  faHtml5,
  faJs,
  faJava,
  faFigma,
  faJira,
  faSwift,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import './TechStack.css'
import { NAV_HEIGHT } from '../constants'

const frontendTech = [
  { icon: faReact, name: 'React' },
  { icon: faJs, name: 'JavaScript' },
  { icon: faHtml5, name: 'HTML5' },
  { icon: null, name: 'Tailwind' },
  { icon: faBolt, name: 'Vite' },
]

const backendTech = [
  { icon: faNode, name: 'Node.js' },
  { icon: faPhp, name: 'PHP' },
  { icon: faJava, name: 'Java' },
  { icon: faSwift, name: 'Swift' },
  { icon: null, name: '.NET' },
  { icon: faDatabase, name: 'MySQL' },
]

const toolsTech = [
  { icon: faUnity, name: 'Unity' },
  { icon: null, name: 'C#' },
  { icon: faFigma, name: 'Figma' },
  { icon: faJira, name: 'Jira' },
  { icon: faGithub, name: 'GitHub' },
]

export default function TechStack() {
  return (
    <section id="tech" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
      <div className="container">
        <h2>Tech Stack</h2>
        <div className="tech-section">
          <h4>Frontend</h4>
          <div className="tech-grid">
            {frontendTech.map((tech, index) => (
              <div key={tech.name} className="tech-item" style={{ '--i': index }}>
                {tech.icon && <FontAwesomeIcon icon={tech.icon} />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-section">
          <h4>Backend</h4>
          <div className="tech-grid">
            {backendTech.map((tech, index) => (
              <div key={tech.name} className="tech-item" style={{ '--i': index }}>
                {tech.icon && <FontAwesomeIcon icon={tech.icon} />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-section">
          <h4>Tools & Other</h4>
          <div className="tech-grid">
            {toolsTech.map((tech, index) => (
              <div key={tech.name} className="tech-item" style={{ '--i': index }}>
                {tech.icon && <FontAwesomeIcon icon={tech.icon} />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
