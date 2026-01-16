import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

const NAV_HEIGHT = 72

export default function Contact() {
  return (
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
  )
}
