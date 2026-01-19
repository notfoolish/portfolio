import './Projects.css'

const NAV_HEIGHT = 72

const projectsData = [
  {
    title: "BitFighters",
    description: "A 2D wave-based survival game made in Unity.",
    link: "https://bitfighters.eu",
    image: "./src/assets/bitfighters.png"
  },
  {
    title: "DevMatch",
    description: "A platform connecting developers with job listings based on your GitHub profile.",
    link: "https://github.com/notfoolish/DevMatch",
    image: "./src/assets/devmatch.png"
  },
  {
    title: "HomeApp",
    description: "",
    link: "https://github.com/notfoolish/HomeApp",
    image: "./src/assets/homeapp.png"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
      <div className="container">
        <h2>Projects</h2>
        
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-overlay">
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-button"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
