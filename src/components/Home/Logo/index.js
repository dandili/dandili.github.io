import './index.scss'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/about">
    <div className="logo-container">
      <svg viewBox="45 60 400 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4d88f3" d="M 90 210 C 90 180 90 150 90 150 C 150 150 180 150 180 150 C 180 150 300 150 300 150 C 300 150 330 150 390 150 C 390 150 390 180 390 210 C 390 240 390 270 390 270 C 330 270 300 270 300 270 C 300 270 180 270 180 270 C 180 270 150 270 90 270 C 90 270 90 240 90 210" mask="url(#knockout-text)" >
        </path>
        <mask id="knockout-text">
          <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
          <text x="147" y="227" fill="#000">About Me</text>
        </mask>
      </svg>
    </div>
    </Link>
  )
}

export default Logo
