// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>

        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>

      <button className="logout-desktop-btn" type="button">
        Logout
      </button>

      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout"
        />
      </button>
    </div>
  </nav>
)

export default Header
