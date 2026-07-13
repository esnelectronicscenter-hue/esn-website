import './Navbar.css';

function Navbar({ isNavOpen, setIsNavOpen }) {
  return (
    <nav className={`glass-nav ${isNavOpen ? 'open' : ''}`}>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => setIsNavOpen(false)}>الرئيسية</a></li>
        <li><a href="#products" onClick={() => setIsNavOpen(false)}>الكاميرات</a></li>
        <li><a href="#about" onClick={() => setIsNavOpen(false)}>من نحن</a></li>
        <li><a href="#contact" onClick={() => setIsNavOpen(false)}>تواصل معنا</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;