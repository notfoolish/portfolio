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

const NAV_HEIGHT = 72

export default function TechStack() {
  return (
    <section id="tech" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
      <div className="container">
        <h2>Tech Stack</h2>
        <div className="tech-section">
          <h4>Frontend</h4>
          <div className="tech-grid">
            <div className="tech-item">
              <FontAwesomeIcon icon={faReact} />
              <span>React</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faJs} />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faHtml5} />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <span>Tailwind</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faBolt} />
              <span>Vite</span>
            </div>
          </div>
        </div>

        <div className="tech-section">
          <h4>Backend</h4>
          <div className="tech-grid">
            <div className="tech-item">
              <FontAwesomeIcon icon={faNode} />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faPhp} />
              <span>PHP</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faJava} />
              <span>Java</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faSwift} />
              <span>Swift</span>
            </div>
            <div className="tech-item">
              <span>.NET</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faDatabase} />
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="tech-section">
          <h4>Tools & Other</h4>
          <div className="tech-grid">
            <div className="tech-item">
              <FontAwesomeIcon icon={faUnity} />
              <span>Unity</span>
            </div>
            <div className="tech-item">
              <span>C#</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faFigma} />
              <span>Figma</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faJira} />
              <span>Jira</span>
            </div>
            <div className="tech-item">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
