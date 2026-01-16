import './App.css'
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faPaperPlane,
  faBolt,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
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
} from '@fortawesome/free-brands-svg-icons'

const NAV_HEIGHT = 72

export default function App() {
  return (
    <div className="app">
      <div className="bg" aria-hidden="true">
        <ShaderGradientCanvas
          style={{ width: '100%', height: '100%' }}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            brightness={1}
            cAzimuthAngle={180}
            cDistance={2.81}
            cPolarAngle={80}
            cameraZoom={9.1}
            color1="#606080"
            color2="#8d7dca"
            color3="#212121"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={50}
            rotationY={0}
            rotationZ={-60}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1.5}
            uFrequency={0}
            uSpeed={0.1}
            uStrength={1.5}
            uTime={8}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="content">
        <header className="nav" style={{ height: NAV_HEIGHT }}>
          <div className="nav__inner">
            <nav aria-label="Primary">
              <ul className="nav__links">
                <li>
                  <Link to="about" smooth={true} duration={500} offset={-(NAV_HEIGHT + 16)}>About</Link>
                </li>
                <li>
                  <Link to="tech" smooth={true} duration={500} offset={-(NAV_HEIGHT + 16)}>Tech Stack</Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500} offset={-(NAV_HEIGHT + 16)}>Projects</Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500} offset={-(NAV_HEIGHT + 16)}>Contact</Link>
                </li>
                <li>
                  <Link to="resume" smooth={true} duration={500} offset={-(NAV_HEIGHT + 16)}>Resume</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section id="home" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
            <div className="container">
              <h1>Hi, I’m László Ákos</h1>
              <h2>
                <FontAwesomeIcon icon={faLocationDot} />
                Pécs, Hungary
              </h2>
              <p>
                I'm a fullstack junior software developer from Pécs, Hungary who is always eager to learn something new.
              </p>
            </div>
          </section>
          <section id="about" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
            <div className="container">
              <h2>About</h2>
              <p>
                I'm a fullstack junior software developer always eager to learn something new.
              </p>
            </div>
          </section>
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
                    <div className="tailwind-icon"> </div>
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
                    <div className="dotnet-icon">.NET</div>
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
                    <div className="csharp-icon">C#</div>
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

          <section id="projects" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
            <div className="container">
              <h2>Projects</h2>
              <p>Explore my already existing projects below:</p>

              <div className="project-grid" aria-hidden="true">
                <div className="project-card" />
                <div className="project-card" />
                <div className="project-card" />
              </div>
            </div>
          </section>

          

          <section id="contact" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
            <div className="container">
              <h2>Contact</h2>

              <div className="contact">
                <div className="contact__info">
                  <p>I'm always open to discussing new projects or opportunities.</p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />{' '}
                    Email: <a href="mailto:alosos398@gmail.com">alosos398@gmail.com</a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} />{' '}
                    Phone: <a href="tel:+36703269157">+36 70 326 9157</a>
                  </p>
                </div>

                <form className="contact__form" action="#" method="POST">
                  <p>
                    <FontAwesomeIcon icon={faPaperPlane} />{' '}
                    Want to contact me right now? Fill out this form.
                  </p>

                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" required />
                  </div>

                  <button className="button" type="submit">Send</button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <aside className="social-sidebar">
          <a href="https://github.com/notfoolish" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </aside>
      </div>
    </div>
  )
}
