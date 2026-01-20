import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
import { NAV_HEIGHT } from '../constants'

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ scrollMarginTop: NAV_HEIGHT + 16 }}>
      <div className="container">
        <h2>Contact</h2>

        <div className="contact">
          <div className="contact__info">
            <div className="contact-text-block">
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
          </div>
        </div>
      </div>
    </section>
  )
}
