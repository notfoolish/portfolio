import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDna, faCode, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './About.css'


const NAV_HEIGHT = 72

export default function About() {
  return (
    <section id="about" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
      <div className="container">
        <h1>Hi, I'm László Ákos</h1>
        <h2>
          <FontAwesomeIcon icon={faLocationDot} />
          Pécs, Hungary
        </h2>
        <div className="about-content">
          <div className="about-main">
            <b><u>Technical Tinkerer</u></b>
            <p>
              <br />
              I've been taking things apart and putting them back together <b>since I was 8</b>. Started with <b>broken laptops</b>, moved on to building <b>custom PCs</b>, and now at <b>20</b> I'm building <b>web applications</b>. That early curiosity turned into a lifelong obsession with understanding how systems work.
            </p>
            <b><u>Built on Independence</u></b>
            <p>
              <br />
              At <b>16</b>, I started <b>living independently</b>, juggling <b>school, work, and responsibilities</b>. Managing my own life while taking care of others taught me resilience, time management, and the importance of reliable skills that serve me every day as a developer. When you're responsible for yourself and others, you learn to solve problems efficiently and think several steps ahead.
            </p>
            <b><u>From Hardware to Software</u></b>
            <p>
              <br />
              Between school and work, coding became <b>more than a hobby</b>. It became a <b>career path</b>. The same <b>troubleshooting mindset</b> that helped me fix hardware now helps me debug code and architect solutions. When you've spent years <b>troubleshooting Windows systems</b> and optimizing performance, transitioning to <b>fullstack development</b> feels natural.
            </p>
            <b><u>Life Outside the Code</u></b>
            <p>
              <br />
              <b>Balance</b> is everything. Soccer, hiking, pool, and the gym keep me grounded and sharp. The same <b>discipline</b> that got me through working while studying now keeps me <b>focused during long debugging sessions</b>. Physical activity clears my mind, and honestly, some of my best solutions come to me on the soccer field or during a hike.
            </p>
          </div>

          <div className="about-sidebar">
            <div className="about-card">
              <h3><FontAwesomeIcon icon={faDna} /> Technical DNA</h3>
              <ul>
                <li>Hardware repairing since the age of 8</li>
                <li>PC building & repair</li>
                <li>Windows modding</li>
                <li>Fullstack development</li>
              </ul>
            </div>

            <div className="about-card">
              <h3><FontAwesomeIcon icon={faCode} /> What I Do</h3>
              <ul>
                <li>React applications</li>
                <li>JavaScript/Node.js</li>
                <li>System optimization</li>
                <li>Backend solutions with Express.js, MongoDB, PHP</li>
              </ul>
            </div>

            <div className="about-card">
              <h3><FontAwesomeIcon icon={faReact} /> Why React?</h3>
              <ul>
                <li>Component modularity</li>
                <li>Virtual DOM performance</li>
                <li>Rich ecosystem</li>
                <li>Great developer experience</li>
              </ul>
            </div>

            <div className="about-card">
              <h3><FontAwesomeIcon icon={faDumbbell} /> Beyond Code</h3>
              <ul>
                <li>Soccer player</li>
                <li>Hiking enthusiast</li>
                <li>Pool player</li>
                <li>Gym regular</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
