import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import './SocialSidebar.css'

export default function SocialSidebar() {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <aside className={`social-sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button 
        className="toggle-button" 
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? 'Hide sidebar' : 'Show sidebar'}
      >
        <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} />
      </button>      <div className="social-links">
        <a href="https://github.com/notfoolish" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/laszloakos" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://facebook.com/laszloakos14" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </aside>
  )
}
