import { FaReact, FaNode, FaUnity, FaPhp, FaHtml5, FaJs, FaJava, FaFigma, FaJira, FaSwift, FaGithub } from 'react-icons/fa'
import { SiVite, SiTailwindcss, SiDotnet, SiMysql } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import './TechStack.css'
import { NAV_HEIGHT } from '../constants'

const frontendTech = [
  { icon: FaReact, name: 'React' },
  { icon: FaJs, name: 'JavaScript' },
  { icon: FaHtml5, name: 'HTML5' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiVite, name: 'Vite' },
]

const backendTech = [
  { icon: FaNode, name: 'Node.js' },
  { icon: FaPhp, name: 'PHP' },
  { icon: FaJava, name: 'Java' },
  { icon: FaSwift, name: 'Swift' },
  { icon: SiDotnet, name: '.NET' },
  { icon: SiMysql, name: 'MySQL' },
]

const toolsTech = [
  { icon: FaUnity, name: 'Unity' },
  { icon: TbBrandCSharp, name: 'C#' },
  { icon: FaFigma, name: 'Figma' },
  { icon: FaJira, name: 'Jira' },
  { icon: FaGithub, name: 'GitHub' },
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
                {tech.icon && <tech.icon />}
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
                {tech.icon && <tech.icon />}
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
                {tech.icon && <tech.icon />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
