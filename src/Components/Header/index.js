import {Link} from 'react-router-dom'


import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <p className="website-logo">Bharat News</p>
    <ul className="header-list-items">
      <Link to="/" className="link-item">
        <li className="home-heading home">Home</li>
      </Link>
      <Link to="/article/1" className="link-item">
        <li className="jon-heading home">articles</li>
      </Link>
    </ul>
  </nav>
  
  )

export default Header