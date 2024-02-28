import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <p className="wave-text">Wave</p>
    </div>
    <ul className="section-list">
      <li className="section-item">
        <Link className="section-link" to="/">
          Home
        </Link>
      </li>
      <li className="section-item">
        <Link className="section-link" to="/about">
          About
        </Link>
      </li>
      <li className="section-item">
        <Link className="section-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
