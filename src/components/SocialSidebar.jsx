import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

export default function SocialSidebar() {
  return (
    <aside className="social-sidebar">
      <a href="https://github.com/notfoolish" target="_blank" rel="noopener noreferrer" title="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/laszloakos" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://facebook.com/laszloakos14" target="_blank" rel="noopener noreferrer" title="Facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </aside>
  )
}
