import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <h1>BAVM Legal</h1>
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-contact">
            <span className="contact-item">
              <i>📧</i> contact@bavmlegal.com
            </span>
            <span className="contact-item">
              <i>📱</i> +1 (555) 123-4567
            </span>
          </div>
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/corporate">Corporate Law</Link>
            <Link to="/criminal">Criminal Law</Link>
            <Link to="/family">Family Law</Link>
            <Link to="/real-estate">Real Estate</Link>
            <Link to="/intellectual-property">IP Law</Link>
            <Link to="/employment">Employment Law</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
