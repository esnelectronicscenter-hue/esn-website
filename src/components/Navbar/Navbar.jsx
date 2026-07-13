import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isNavOpen, setIsNavOpen }) {
  return (
    <nav className={`glass-nav ${isNavOpen ? 'open' : ''}`}>
      <ul className="nav-links">
        <li><Link to="/" onClick={() => setIsNavOpen(false)}>الرئيسية</Link></li>
        <li><a href="#products" onClick={() => setIsNavOpen(false)}>المنتجات</a></li>
        <li><a href="#about" onClick={() => setIsNavOpen(false)}>من نحن</a></li>
        <li><a href="#contact" onClick={() => setIsNavOpen(false)}>تواصل معنا</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;