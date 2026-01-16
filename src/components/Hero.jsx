import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const NAV_HEIGHT = 72

export default function Hero() {
  return (
    <section id="home" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
      <div className="container">
        <h1>Hi, I'm László Ákos</h1>
        <h2>
          <FontAwesomeIcon icon={faLocationDot} />
          Pécs, Hungary
        </h2>
        <p>
          I'm a fullstack junior software developer from Pécs, Hungary who is always eager to learn something new.
        </p>
      </div>
    </section>
  )
}
