import './Projects.css'
import bitfightersImg from '../assets/bitfighters.png'
import devmatchImg from '../assets/devmatch.png'
import xlogoImg from '../assets/xlogo.png'
import homeappImg from '../assets/homeapp.webp'
import { NAV_HEIGHT } from '../constants'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

const projectsData = [
  {
    title: "BitFighters",
    description: "A 2D wave-based survival game made in Unity with website and a launcher.",
    link: "https://bitfighters.eu",
    image: bitfightersImg,
    tags: ["Unity", "C#", "React" ]
  },
  {
    title: "DevMatch",
    description: "A platform connecting developers with job listings based on your GitHub profile.",
    link: "https://github.com/notfoolish/DevMatch",
    image: devmatchImg,
    tags: ["React", "Node.js", "GitHub API"]
  },
  {
    title: "X clone",
    description: "A full-stack social media platform replicating X (formerly Twitter) functionalities.",
    link: "https://github.com/notfoolish/XClone",
    image: xlogoImg,
    tags: ["MongoDB", "Express", "React", "Node.js" ]
  },
  {
    title: "IOS Home App",
    description: "An iOS App for managing home-made doorbell camera.",
    link: "https://github.com/notfoolish/IosHomeApp",
    image: homeappImg,
    tags: ["Swift", "Raspberry Pi", "Esp-32 AI thinker" ]
  }
]

function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

      <article className="project-card" onClick={handleClick}>
        {project.image && (
          <div className="project-image-wrapper">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay-gradient"></div>
          </div>
        )}
        
        <div className="project-body">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
          </div>
          
          {project.tags && (
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
          
          <div className="project-flip-hint">
            Click to see more
          </div>
        </div>
      </article>

      <article className="project-card project-card-back" onClick={handleClick}>
        <div className="project-body">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
          
          {project.tags && (
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            View Project
            <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <div className="project-flip-hint">
            Click to flip back
          </div>
        </div>
      </article>
    </ReactCardFlip>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
      <div className="container">
        <h2>Projects</h2>
        
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
